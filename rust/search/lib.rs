#![allow(dead_code)]

// import wasm_bindgen tooling
extern crate wasm_bindgen;
// declare modules here
pub mod src;
// load printf macro for public use
mod printf;

pub mod search {
	extern crate wasm_bindgen;
	// use wasm_bindgen::prelude::*;

	// use crate::printf;

	// main entrypoint, if needed
	// #[wasm_bindgen(start)]
	// pub fn main() {
	// printf!("main entrypoint");
	// }
}
