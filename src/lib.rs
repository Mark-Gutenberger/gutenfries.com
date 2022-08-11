extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

mod macros;

#[wasm_bindgen]
pub fn greet(name: &str) {
	printf!("Hello from {}!", name); // should output "Hello from Rust!"
}
