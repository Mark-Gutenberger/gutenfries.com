#![allow(dead_code)]

//! # Rust for gutenfries.com
//!
//! This is a collection of Rust code for the [gutenfries.com](https://gutenfries.com) website.
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
//!
//! ## Attribution
//!
//! This project is based on the [Rust for Rustaceans]() book by [Steve Klabnik]() and [Carol
//! Nichols]().
//!
//! [gutenfries.com]: https://gutenfries.com
//! [MIT license]: https://opensource.org/licenses/MIT
//! [contribution guidelines]:
//! [Rust Code of Conduct]: https://www.rust-lang.org/policies/code-of-conduct
//! [Rust for Rustaceans]: https://doc.rust-lang.org/book/
//! [Steve Klabnik]:
//! [Carol Nichols]:

mod background_generator;

pub mod rust {

	use deno_bindgen::deno_bindgen;

	#[deno_bindgen]
	pub fn greet(name: &str) {
		print!("Hello from {}!", name);
	}
}
