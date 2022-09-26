#[cfg(test)]

pub mod hex {
	use crate::background_generator::hex::hex::*;

	#[test]
	fn test_compare_hex_rgb() {
		let color_1 = "#3b82f6";
		let color_2 = "#3b82f6";
		assert!(compare_hex_rgb(color_1, color_2) == 0.0);

		let color_1 = "#000000";
		let color_2 = "#ffffff";
		assert!(compare_hex_rgb(color_1, color_2) == 255.0);
	}

	#[test]
	fn test_compare_hex_tolerance() {
		let color_1 = "#3b82f6";
		let color_2 = "#3b82f6";
		assert!(compare_hex_tolerance(color_1, color_2, 0) == true);

		let color_1 = "#000000";
		let color_2 = "#ffffff";
		assert!(compare_hex_tolerance(color_1, color_2, 255) == true);
	}
}
