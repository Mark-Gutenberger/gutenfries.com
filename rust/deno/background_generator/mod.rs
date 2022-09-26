pub mod colors;
pub mod hex;
pub mod tests;

pub mod background_generator {
	use getrandom::getrandom;
	use wasm_bindgen::prelude::*;

	use super::{
		colors::colors::{methods::*, *},
		hex::hex::*,
	};

	// #[wasm_bindgen]
	/// returns a random color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = get_random_color();
	/// ```
	/// output: `blue`
	pub fn random_color() -> String {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_index = rng[0] as usize % COLORS_ARRAY.len();
		let color: String = COLORS_ARRAY[color_index].to_string();

		String::from(color)
	}

	// #[wasm_bindgen]
	/// returns a random shade from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let shade = get_random_shade();
	/// ```
	/// output: `600`
	pub fn random_shade() -> String {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY.len();
		let shade: String = COLOR_SHADES_ARRAY[color_shade_index].to_string();

		String::from(shade)
	}

	// #[wasm_bindgen]
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
	pub fn random_shade_dark() -> String {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY_DARK.len();
		let shade: String = COLOR_SHADES_ARRAY_DARK[color_shade_index].to_string();

		String::from(shade)
	}

	// #[wasm_bindgen]
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
	pub fn random_shade_light() -> String {
		let mut rng = [0u8; 1];
		getrandom(&mut rng).unwrap();

		let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY_LIGHT.len();
		let shade: String = COLOR_SHADES_ARRAY_LIGHT[color_shade_index].to_string();

		String::from(shade)
	}

	// #[wasm_bindgen]
	/// generates a random tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color() -> String {
		let color_string = format!("{}-{}", random_color(), random_shade());
		String::from(color_string)
	}

	// #[wasm_bindgen]
	/// generates a random dark tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color_dark();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color_dark() -> String {
		let color_string = format!("{}-{}", random_color(), random_shade_dark());
		String::from(color_string)
	}

	// #[wasm_bindgen]
	/// generates a random light tw color from the tailwind css v2 palette
	///
	/// ## Example:
	/// ```
	/// let color = random_tw_color_light();
	/// ```
	/// output: `blue-600`
	pub fn random_tw_color_light() -> String {
		let color_string = format!("{}-{}", random_color(), random_shade_light());
		String::from(color_string)
	}

	/// generates ```n``` random tw colors from the tailwind css v2 palette, where ```n``` is the
	/// first argument and return the a  String, where each color is separated by a semicolon
	/// Takes an optional third parameter to specify if the colors should be represented by their
	/// tailwind name or by hex hashes
	/// ## Arguments:
	/// * ```n``` - the number of colors to generate
	///
	/// * ```tol``` - the tolerance of the generated colors (1-255)
	///
	/// * ```format``` - the format of the generated colors, eg `hex | tailwind` defaults to
	///   `tailwind`
	///
	/// ## Example:
	/// ```
	/// let colors = random_tw_colors(3, 100);
	/// ```
	/// output: `blue-600;red-500;green-400`
	/// ## Example:
	/// ```
	/// let colors = random_tw_colors(1, 225);
	/// ```
	/// output: `blue-600`
	/// ## Example:
	/// ```
	/// let colors = random_tw_colors(3, 100, "hex");
	/// ```
	/// output: `#0000ff;#ff0000;#00ff00`
	pub fn random_tw_colors_internal(n: i32, tolerance: u32, format: &str) -> String {
		// determine what format to return the colors in
		let format = String::from(format);

		// initialize an empty String to hold the values
		let mut return_colors: String = String::new();

		let color_1: String = random_tw_color_dark(); // generate an initial value
		let color_1: &str = &color_1; // convert to &str
		let color_1_hex = color_to_hex(color_1); // and convert the &str to a hex value (String)
		let color_1_hex: &str = &color_1_hex; // convert the String to &str

		// add the first color to the return String
		if format == "hex" {
			return_colors.push_str(format!("{};", color_1_hex).as_str());
		} else {
			return_colors.push_str(format!("{};", color_1).as_str());
		}

		let mut i = 1;
		while i < n {
			let color: String = random_tw_color_dark(); // generate an initial value
			let color: &str = &color; // convert to &str
			let color_hex = color_to_hex(color); // and convert the &str to a hex value (String)
			let color_hex: &str = &color_hex; // convert the String to &str

			// check if the color clashes with the previous color in the array
			if compare_hex_tolerance(color_hex, color_1_hex, tolerance as u64) {
				// if the color passes, add it to the return value
				if format == "hex" {
					return_colors.push_str(format!("{};", color_hex).as_str());
				} else {
					return_colors.push_str(format!("{};", color).as_str());
				}
				i += 1;
			} else {
				// if the color doesn't pass, iterate through the loop again WITHOUT incrementing
				// `i`
				continue;
			}
		}

		return return_colors;
	}

	#[wasm_bindgen]
	/// wraps `random_tw_colors_internal` function
	pub fn random_tw_colors(n: i32, tolerance: u32, format: &str) -> String {
		random_tw_colors_internal(n, tolerance, format)
	}
}
