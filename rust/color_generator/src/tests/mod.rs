// include sibling files
pub mod colors;
pub mod hex;

#[cfg(test)]
pub mod color_generator_tests {

	// import color_generator
	pub use crate::src::{color_generator::*, colors::*, hex::*};

	// methods in color_generator/mod.rs
	#[test]
	fn test_random_color() {
		let color = random_color();
		assert!(COLORS_ARRAY.contains(&color.as_str()));
	}

	#[test]
	fn test_random_shade() {
		let shade = random_shade();
		assert!(COLOR_SHADES_ARRAY.contains(&shade.as_str()));
	}

	#[test]
	fn test_random_shade_dark() {
		let shade = random_shade_dark();
		assert!(COLOR_SHADES_ARRAY_DARK.contains(&shade.as_str()));
	}

	#[test]
	fn test_random_shade_light() {
		let shade = random_shade_light();
		assert!(COLOR_SHADES_ARRAY_LIGHT.contains(&shade.as_str()));
	}

	#[test]
	fn test_random_tw_color() {
		let tw_color = random_tw_color();

		let tw_color_split: Vec<&str> = tw_color.split('-').collect();
		let color = tw_color_split[0];
		let shade = tw_color_split[1];

		assert!(COLORS_ARRAY.contains(&color));
		assert!(COLOR_SHADES_ARRAY.contains(&shade));
	}

	#[test]
	fn test_random_tw_color_dark() {
		let tw_color = random_tw_color_dark();

		let tw_color_split: Vec<&str> = tw_color.split('-').collect();
		let color = tw_color_split[0];
		let shade = tw_color_split[1];

		assert!(COLORS_ARRAY.contains(&color));
		assert!(COLOR_SHADES_ARRAY_DARK.contains(&shade));
	}

	#[test]
	fn test_random_tw_color_light() {
		let tw_color = random_tw_color_light();

		let tw_color_split: Vec<&str> = tw_color.split('-').collect();
		let color = tw_color_split[0];
		let shade = tw_color_split[1];

		assert!(COLORS_ARRAY.contains(&color));
		assert!(COLOR_SHADES_ARRAY_LIGHT.contains(&shade));
	}

	#[test]
	fn test_random_tw_colors() {
		// test in hex format
		const NUM_COLORS: i32 = 5;
		const TOLERANCE: u32 = 100;
		const FORMAT: &str = "hex";

		let tw_colors = random_tw_colors(NUM_COLORS, TOLERANCE, FORMAT);

		///Parses a string of colors, separated by semi-colons, into an array.
		/// ## Arguments:
		/// * `colors_` - A string of colors, separated by semi-colons.
		///
		/// ## Example:
		/// ```
		/// let colors = parse_colors("red-500;blue-500;green-500");
		/// ```
		/// output: `["red-500", "blue-500", "green-500"]`
		fn parse_colors(colors_: String) -> Vec<String> {
			// initialize the return value
			let colors_: Vec<&str> = colors_.split(';').collect();

			// convert colors_: Vec<&str> to parsed_colors: Vec<String>
			let mut parsed_colors: Vec<String> = Vec::new();
			for color in colors_ {
				parsed_colors.push(color.to_string());
			}

			// remove the last entry, which is an empty string
			parsed_colors.pop();

			// return the parsed colors
			parsed_colors
		}

		// parse the colors
		let parsed_colors = parse_colors(tw_colors);

		// assert that the number of colors is correct
		assert_eq!(parsed_colors.len(), NUM_COLORS as usize);

		// assert that the colors are valid, and in hex format
		for color in parsed_colors {
			print!("{} ", color);
			// assert that the colors are in hex format
			// kind of a pathetic way to do this, but chances are that if it passes, it;s in hex
			// format.
			// NOTE: see tests for colors.rs
			assert!(color.starts_with('#'));
			assert!(color.len() == 7);
		}

		// test again in tailwind format
		const NUM_COLORS_2: i32 = 10;
		const TOLERANCE_2: u32 = 200;
		const FORMAT_2: &str = "tailwind";

		let tw_colors_2 = random_tw_colors(NUM_COLORS_2, TOLERANCE_2, FORMAT_2);

		let parsed_colors_2 = parse_colors(tw_colors_2);

		// assert that the number of colors is correct
		assert_eq!(parsed_colors_2.len(), NUM_COLORS_2 as usize);

		// assert that the colors are valid, and in tailwind format
		for color_2 in parsed_colors_2 {
			print!("{} ", color_2);
			// assert that the colors are in tailwind format
			let color_2_split: Vec<&str> = color_2.split('-').collect();
			let color_2 = color_2_split[0];
			let shade_2 = color_2_split[1];

			assert!(COLORS_ARRAY.contains(&color_2));
			assert!(COLOR_SHADES_ARRAY.contains(&shade_2));
		}
	}
}
