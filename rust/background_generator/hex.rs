pub mod hex {

	/// compares the r value of two hexidecimal (`base 16`) values and returns the difference `base
	/// 10`
	/// ## Example:
	/// ```
	/// let difference = hex_difference("#ff6969", "#006969");
	/// ```
	/// output: `255`
	fn compare_hex_r(hex1: &str, hex2: &str) -> f64 {
		let hex1 = hex1.trim_start_matches('#');
		let hex2 = hex2.trim_start_matches('#');

		let r1 = u8::from_str_radix(&hex1[0..2], 16).unwrap();
		let r2 = u8::from_str_radix(&hex2[0..2], 16).unwrap();

		let difference = (r1 as f64 - r2 as f64).abs();

		difference
	}

	/// compares the g value of two hexidecimal (`base 16`) values and returns the difference `base
	/// 10`
	/// ## Example:
	/// ```
	/// let difference = hex_difference("#69ff69", "#690069");
	/// ```
	/// output: `255`
	fn compare_hex_g(hex1: &str, hex2: &str) -> f64 {
		let hex1 = hex1.trim_start_matches('#');
		let hex2 = hex2.trim_start_matches('#');

		let g1 = u8::from_str_radix(&hex1[2..4], 16).unwrap();
		let g2 = u8::from_str_radix(&hex2[2..4], 16).unwrap();

		let difference = (g1 as f64 - g2 as f64).abs();

		difference
	}

	/// compares the b value of two hexidecimal (`base 16`) values and returns the difference `base
	/// 10`
	/// ## Example:
	/// ```
	/// let difference = hex_difference("#6969ff", "#696900");
	/// ```
	/// output: `255`
	fn compare_hex_b(hex1: &str, hex2: &str) -> f64 {
		let hex1 = hex1.trim_start_matches('#');
		let hex2 = hex2.trim_start_matches('#');

		let b1 = u8::from_str_radix(&hex1[4..6], 16).unwrap();
		let b2 = u8::from_str_radix(&hex2[4..6], 16).unwrap();

		let difference = (b1 as f64 - b2 as f64).abs();

		difference
	}

	/// compares two hexidecimal (`base 16`) values and returns the difference `base 10`
	/// ## Example:
	/// ```
	/// let difference = compare_hex_rgb("#ffffff", "#0000000");
	/// ```
	/// output: `255`
	pub fn compare_hex_rgb(hex1: &str, hex2: &str) -> f64 {
		let r = compare_hex_r(hex1, hex2);
		let g = compare_hex_g(hex1, hex2);
		let b = compare_hex_b(hex1, hex2);

		let difference = (r + g + b) / 3.0;

		difference
	}

	/// compares two hexidecimal (`base 16`) values and a tolerance value and returns a boolean
	/// ## Example:
	/// ```
	/// let difference = compare_hex_tolerance("#ffffff", "#0000000", 255);
	/// ```
	/// output: `true`
	/// ```
	/// let difference = compare_hex_tolerance("#ffffff", "#0000000", 254);
	/// ```
	/// output: `false`
	pub fn compare_hex_tolerance(hex1: &str, hex2: &str, tolerance: u64) -> bool {
		let difference = compare_hex_rgb(hex1, hex2).round() as u64;

		if difference <= tolerance { true } else { false }
	}
}
