#[cfg(test)]
pub mod colors {
	pub use crate::background_generator::colors::colors::{methods::*, *};

	#[test]
	fn test_color_to_hex() {
		let color = "blue-500";
		let hex = color_to_hex(color);
		assert_eq!(hex, "#3b82f6");

		let color = "red-500";
		let hex = color_to_hex(color);
		assert_eq!(hex, "#ef4444");
	}
}
