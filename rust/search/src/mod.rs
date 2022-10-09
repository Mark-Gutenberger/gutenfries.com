pub mod data;

pub mod search {
	#![allow(clippy::tabs_in_doc_comments)]

	use std::{cmp::Ordering, iter};

	use js_sys::Array as JsArray;
	use wasm_bindgen::prelude::*;

	/// Binary search algorithm
	///
	/// ## Example:
	/// ```
	/// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	/// let target = 5;
	/// let index = search::binary_search(&arr, target);
	/// assert_eq!(index, 4);
	/// ```
	pub fn binary_search<T: Ord>(item: &T, arr: &[T]) -> Option<usize> {
		let mut is_asc = true;
		if arr.len() > 1 {
			is_asc = arr[0] < arr[(arr.len() - 1)];
		}
		let mut left = 0;
		let mut right = arr.len();

		while left < right {
			let mid = left + (right - left) / 2;

			if is_asc {
				match item.cmp(&arr[mid]) {
					Ordering::Less => right = mid,
					Ordering::Equal => return Some(mid),
					Ordering::Greater => left = mid + 1,
				}
			} else {
				match item.cmp(&arr[mid]) {
					Ordering::Less => left = mid + 1,
					Ordering::Equal => return Some(mid),
					Ordering::Greater => right = mid,
				}
			}
		}
		None
	}

	fn trigrams(s: &str) -> Vec<(char, char, char)> {
		let it_1 = iter::once(' ').chain(iter::once(' ')).chain(s.chars());
		let it_2 = iter::once(' ').chain(s.chars());
		let it_3 = s.chars().chain(iter::once(' '));

		let res: Vec<(char, char, char)> =
			it_1.zip(it_2).zip(it_3).map(|((a, b), c): ((char, char), char)| (a, b, c)).collect();
		res
	}

	/// Use this function to compare 2 strings.
	///
	/// The output is a score (between `0.0f32 and 1.0f32`) representing how similar the 2 strings
	/// are.
	///
	/// Arguments:
	/// * `a` : the first string to compare.
	/// * `b` : the second string to compare.
	///
	///
	/// example:
	/// ```rust
	/// fn test() {
	/// 	use rust_fuzzy_search::fuzzy_compare;
	/// 	let score: f32 = fuzzy_compare("kolbasobulko", "kolbasobulko");
	/// 	println!("score = {:?}", score);
	/// }
	/// ```
	pub fn fuzzy_compare(a: &str, b: &str) -> f32 {
		// gets length of first input string plus 1 (because of the 3 added spaces (' '))
		let string_len = a.chars().count() + 1;

		// gets the trigrams for both strings
		let trigrams_a = trigrams(a);
		let trigrams_b = trigrams(b);

		// accumulator
		let mut acc: f32 = 0.0f32;
		// counts the number of trigrams of the first string that are also present in the second one
		for t_a in &trigrams_a {
			for t_b in &trigrams_b {
				if t_a == t_b {
					acc += 1.0f32;
					break;
				}
			}
		}
		let res = acc / (string_len as f32);
		// crops between zero and one
		if (0.0f32..=1.0f32).contains(&res) { res } else { 0.0f32 }
	}

	/// Use this function to compare a string (`&str`) with all elements of a list.
	///
	///
	/// The result is a list whose elements are tuples of the form `(string, score)`, the first
	/// element being the word of the list and the second element the score.
	///
	/// Arguments:
	/// * `s` : the string to compare.
	/// * `list` : the list of strings to compare with `s`.
	///
	/// example:
	/// ```rust
	/// fn test() {
	/// 	use rust_fuzzy_search::fuzzy_search;
	/// 	let s = "bulko";
	/// 	let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo"];
	/// 	let res: Vec<(&str, f32)> = fuzzy_search(s, &list);
	/// 	for (_word, score) in res {
	/// 		println!("{:?}", score)
	/// 	}
	/// }
	/// ```
	pub fn fuzzy_search<'a, T: AsRef<str>>(s: &'a str, list: &'a [T]) -> Vec<(&'a str, f32)> {
		list.iter()
			.map(|value| {
				let res = fuzzy_compare(s, value.as_ref());
				(value.as_ref(), res)
			})
			.collect()
	}

	/// This function is similar to [fuzzy_search] but sorts the result in descending order (the
	/// best matches are placed at the beginning).
	///
	/// Arguments:
	/// * `s` : the string to compare.
	/// * `list` : the list of strings to compare with `s`.
	///
	/// example:
	/// ```rust
	/// fn test() {
	/// 	use rust_fuzzy_search::fuzzy_search_sorted;
	/// 	let s = "bulko";
	/// 	let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo"];
	/// 	let res: Vec<(&str, f32)> = fuzzy_search_sorted(s, &list);
	/// 	for (_word, score) in res {
	/// 		println!("{:?}", score)
	/// 	}
	/// }
	/// ```
	pub fn fuzzy_search_sorted<'a, T: AsRef<str>>(
		s: &'a str,
		list: &'a [T],
	) -> Vec<(&'a str, f32)> {
		let mut res = fuzzy_search(s, list);
		res.sort_by(|(_, d1), (_, d2)| d2.partial_cmp(d1).unwrap()); // TODO to fix the unwrap call
		res
	}

	/// This function is similar to [fuzzy_search] but filters out element with a score lower than
	/// the specified one.
	///
	/// Arguments:
	/// * `s` : the string to compare.
	/// * `list` : the list of strings to compare with `s`.
	/// * `threshold` : the minimum allowed score for the elements in the result: elements with
	///  lower score will be removed.
	///
	/// ```rust
	/// fn test() {
	/// 	use rust_fuzzy_search::fuzzy_search_threshold;
	/// 	let s = "bulko";
	/// 	let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo"];
	/// 	let threshold: f32 = 0.4f32;
	/// 	let res: Vec<(&str, f32)> = fuzzy_search_threshold(s, &list, threshold);
	/// 	for (_word, score) in res {
	/// 		println!("{:?}", score)
	/// 	}
	/// }
	/// ```
	pub fn fuzzy_search_threshold<'a, T: AsRef<str>>(
		s: &'a str,
		list: &'a [T],
		threshold: f32,
	) -> Vec<(&'a str, f32)> {
		fuzzy_search(s, list).into_iter().filter(|&(_, score)| score >= threshold).collect()
	}

	/// This function is similar to [fuzzy_search_sorted] but keeps only the `n` best items, those
	/// with a better match.
	///
	/// Arguments :
	/// * `s` : the string to compare.
	/// * `list` : the list of strings to compare with `s`.
	/// * `n` : the number of element to retrieve.
	///
	/// example:
	/// ```
	/// fn test() {
	/// 	use rust_fuzzy_search::fuzzy_search_best_n;
	/// 	let s = "bulko";
	/// 	let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo"];
	/// 	let n: usize = 1;
	/// 	let res: Vec<(&str, f32)> = fuzzy_search_best_n(s, &list, n);
	/// 	for (_word, score) in res {
	/// 		println!("{:?}", score)
	/// 	}
	/// }
	/// ```
	pub fn fuzzy_search_best_n<'a, T: AsRef<str>>(
		s: &'a str,
		list: &'a [T],
		n: usize,
	) -> Vec<(&'a str, f32)> {
		fuzzy_search_sorted(s, list).into_iter().take(n).collect()
	}

	#[cfg(test)]
	mod tests {
		use super::{
			fuzzy_compare, fuzzy_search, fuzzy_search_best_n, fuzzy_search_sorted,
			fuzzy_search_threshold,
		};

		#[test]
		fn perfect_match_1() {
			assert_eq!(fuzzy_compare("kolbasobulko", "kolbasobulko"), 1.0f32)
		}
		#[test]
		fn perfect_match_2() {
			assert_eq!(fuzzy_compare("sandviĉo", "sandviĉo"), 1.0f32)
		}
		#[test]
		fn perfect_match_3() {
			assert_eq!(fuzzy_compare("domo", "domo"), 1.0f32)
		}
		#[test]
		fn perfect_match_4() {
			assert_eq!(fuzzy_compare("ŝatas", "ŝatas"), 1.0f32)
		}
		#[test]
		fn perfect_match_5() {
			assert_eq!(fuzzy_compare("mirinda estonto", "mirinda estonto"), 1.0f32)
		}
		#[test]
		fn no_match() {
			assert_eq!(fuzzy_compare("abc", "def"), 0.0f32)
		}
		#[test]
		fn empty_word() {
			assert_eq!(fuzzy_compare("", ""), 1.0f32)
		}
		#[test]
		fn one_letter() {
			assert_eq!(fuzzy_compare("a", "a"), 1.0f32)
		}
		#[test]
		fn utf8_one_letter_1() {
			assert_eq!(fuzzy_compare("ĉ", "ĉ"), 1.0f32)
		}
		#[test]
		fn utf8_one_letter_2() {
			assert_eq!(fuzzy_compare("ł", "ł"), 1.0f32)
		}
		#[test]
		fn utf8_no_match() {
			assert_eq!(fuzzy_compare("cgs", "ĉĝŝ"), 0.0f32)
		}
		#[test]
		fn test_fuzzy_search_1() {
			let s: &str = "bulko";
			let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo", "kolbasobulkejo"];
			let res: Vec<(&str, f32)> = fuzzy_search(s, &list);
			assert_eq!(res.into_iter().count(), 3);
		}
		#[test]
		fn test_fuzzy_search_owned() {
			let s: &str = "bulko";
			let list: Vec<String> = vec![
				String::from("kolbasobulko"),
				String::from("sandviĉo"),
				String::from("kolbasobulkejo"),
			];
			let res: Vec<(&str, f32)> = fuzzy_search(s, &list);
			assert_eq!(res.into_iter().count(), 3);
		}
		#[test]
		fn test_fuzzy_search_sorted() {
			let s: &str = "bulko";
			let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo", "kolbasobulkejo"];
			let res: Vec<(&str, f32)> = fuzzy_search_sorted(s, &list);
			assert_eq!(res.into_iter().count(), 3);
		}
		#[test]
		fn no_lowers() {
			let threshold = 0.5f32;
			let s: &str = "bulko";
			let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo", "kolbasobulkejo"];
			for (_word, score) in fuzzy_search_threshold(s, &list, threshold) {
				assert!(score > threshold)
			}
		}
		#[test]
		fn test_fuzzy_search_best_n() {
			let s: &str = "bulko";
			let list: Vec<&str> = vec!["kolbasobulko", "sandviĉo", "kolbasobulkejo"];
			let res: Vec<(&str, f32)> = fuzzy_search_best_n(s, &list, 2);
			assert_eq!(res.into_iter().count(), 2);
		}
	}

	#[wasm_bindgen]
	pub fn search(_input: &str) -> JsArray {
		JsArray::new()
	}
}
