#![allow(dead_code)]
extern crate wasm_bindgen;

mod macros;
mod theme_generator;

pub use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) {
	printf!("Hello from {}!", name);
}

#[wasm_bindgen(start)]
pub fn run() {
	greet("Rust");
}
