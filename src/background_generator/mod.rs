pub mod background_generator {

	use getrandom::getrandom;
	use js_sys::{Array, JsString, Object};
	use wasm_bindgen::prelude::*;

	use crate::macros::macros::printf;

	const COLORS_ARRAY: [&str; 19] = [
		"amber",
		// "black",
		"blue",
		"blueGray",
		// "coolGray",
		"cyan",
		"emerald",
		"fuchsia",
		// "gray",
		"green",
		"indigo",
		"lightBlue",
		"lime",
		"orange",
		"pink",
		"purple",
		"red",
		"rose",
		"sky",
		"teal",
		// "trueGray",
		"violet",
		// "warmGray",
		// "white",
		"yellow",
	];

	const COLOR_SHADES_ARRAY: [&str; 10] =
		["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

	const COLOR_SHADES_ARRAY_LIGHT: [&str; 4] = ["200", "300", "400", "500"];

	const COLOR_SHADES_ARRAY_DARK: [&str; 5] = ["500", "600", "700", "800", "900"];

	#[wasm_bindgen]
	/// returns a random color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = get_random_color();
	/// ```
	/// output: `blue`
	pub fn random_color() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_index = rng[0] as usize % COLORS_ARRAY.len();
		let color: String = COLORS_ARRAY[color_index].to_string();

		JsString::from(color)
	}

	#[wasm_bindgen]
	/// returns a random shade from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let shade = get_random_shade();
	/// ```
	/// output: `600`
	pub fn random_shade() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY.len();
		let shade: String = COLOR_SHADES_ARRAY[color_shade_index].to_string();

		JsString::from(shade)
	}

	#[wasm_bindgen]
	/// returns a random dark shade from the tailwind css v2 palette
	/// ## Example:
	/// ```
	/// let shade = random_shade_dark();
	/// ```
	/// output: `800`
	/// ## Example:
	/// ```
	/// let shade = random_shade_dark();
	/// ```
	/// output: `900`
	pub fn random_shade_dark() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY_DARK.len();
		let shade: String = COLOR_SHADES_ARRAY_DARK[color_shade_index].to_string();

		JsString::from(shade)
	}

	#[wasm_bindgen]
	/// returns a random light shade from the tailwind css v2 palette
	/// ## Example:
	/// ```
	/// let shade = random_shade_light();
	/// ```
	/// output: `200`
	/// ## Example:
	/// ```
	/// let shade = random_shade_light();
	/// ```
	/// output: `500`
	pub fn random_shade_light() -> JsString {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY_LIGHT.len();
		let shade: String = COLOR_SHADES_ARRAY_LIGHT[color_shade_index].to_string();

		JsString::from(shade)
	}

	#[wasm_bindgen]
	/// generates a random tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color() -> JsString {
		let color_string = format!("{}-{}", random_color(), random_shade());
		JsString::from(color_string)
	}

	#[wasm_bindgen]
	/// generates a random dark tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color_dark();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color_dark() -> JsString {
		let color_string = format!("{}-{}", random_color(), random_shade_dark());
		JsString::from(color_string)
	}

	#[wasm_bindgen]
	/// generates a random light tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color_light();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color_light() -> JsString {
		let color_string = format!("{}-{}", random_color(), random_shade_light());
		JsString::from(color_string)
	}

	#[wasm_bindgen]
	/// generates ```n``` random tw colors from the tailwind css v2 palette, where ```n``` is the
	/// first argument
	/// ## Example:
	/// ```
	/// let colors = random_tw_colors(5);
	/// ```
	/// output: `["blue-600", "indigo-700", "pink-800", "purple-900", "red-500"]`
	/// ## Example:
	/// ```
	/// let colors = random_tw_colors(1);
	/// ```
	/// output: `["blue-600"]`
	pub fn random_tw_colors(n: usize) -> Array {
		let colors_array = Array::new();

		for _ in 0..n {
			colors_array.push(&random_tw_color());
		}

		colors_array
	}
}
