#![allow(dead_code)]

//! # Rust for gutenfries.deno.dev
//!
//! This is a collection of Rust code for the [gutenfries.deno.dev](https://gutenfries.deno.dev) website.
//!
//! ## License
//!
//! This code is licensed under the [MIT license](https://opensource.org/licenses/MIT).
//!
//! ## Contributing
//!
//! Contributions are welcome! Please see the [contribution guidelines]() for more information.
//!
//! ## Code of Conduct
//!
//! This project adheres to the [Rust Code of Conduct](https://www.rust-lang.org/policies/code-of-conduct).
//! By participating, you are expected to uphold this code.

// import wasm_bindgen tooling
extern crate wasm_bindgen;
// declare modules here
pub mod background_generator;
// load printf macro for public use
mod printf;

/*
pub mod deno {
	extern crate wasm_bindgen;
	use wasm_bindgen::prelude::*;

	use crate::printf;

	// main entrypoint, if needed
	#[wasm_bindgen(start)]
	pub fn main() {
		printf!("main entrypoint");
	}
}
*/
