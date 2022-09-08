extern crate wasm_bindgen;

use getrandom::getrandom;
use js_sys::JsString;
use wasm_bindgen::prelude::*;

use crate::macros::macros::printf;

const COLORS_ARRAY: [&str; 5] = ["red", "blue", "indigo", "purple", "pink"];

const COLOR_SHADES_ARRAY: [&str; 5] = ["300", "500", "600", "700", "800"];

#[wasm_bindgen]
/// generates a random tailwind v2 color
pub fn random_color() -> JsString {
	// use getrandom crate to generate random color
	let mut color = [0u8; 1];
	getrandom(&mut color).unwrap();
	let color = color[0] as usize;
	let color = COLORS_ARRAY[color % COLORS_ARRAY.len()];
	let mut shade = [0u8; 1];
	getrandom(&mut shade).unwrap();
	let shade = shade[0] as usize;
	let shade = COLOR_SHADES_ARRAY[shade % COLOR_SHADES_ARRAY.len()];
	let random_color = format!("{}-{}", color, shade);

	// printf!("random color: {}", random_color);

	return JsString::from(random_color);
}

// convert String to &str
