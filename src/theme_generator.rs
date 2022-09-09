extern crate wasm_bindgen;

use getrandom::getrandom;
use js_sys::{Array, JsString};
use wasm_bindgen::prelude::*;

// use crate::macros::macros::printf;

const COLORS_ARRAY: [&str; 5] = ["red", "blue", "indigo", "purple", "pink"];

const COLOR_SHADES_ARRAY: [&str; 5] = ["500", "600", "700", "800", "900"];

#[wasm_bindgen]
/// generates a random tailwind v2 color
pub fn random_color() -> JsString {
	let mut rng = [0u8; 1];
	getrandom(&mut rng).unwrap();

	let color_index = rng[0] as usize % COLORS_ARRAY.len();
	let color_shade_index = rng[0] as usize % COLOR_SHADES_ARRAY.len();

	let color: String = COLORS_ARRAY[color_index].to_string();
	let color_shade: String = COLOR_SHADES_ARRAY[color_shade_index].to_string();

	let color_string = format!("{}-{}", color, color_shade);

	JsString::from(color_string)
}

#[wasm_bindgen]
/// generates multiple random tailwind v2 colors and returns them as an Array
pub fn random_colors(count: u32) -> Array {
	let colors = Array::new();

	for _ in 0..count {
		let color = random_color();
		// TODO(@gutenfries): impliment AI here to make colors always look good together
		colors.push(&color);
	}

	colors
}
