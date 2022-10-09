#![allow(dead_code)]

// import wasm_bindgen tooling
extern crate wasm_bindgen;
// declare modules here
pub mod src;
// load printf macro for public use
mod printf;

pub mod color_generator {
	extern crate wasm_bindgen;

	// use wasm_bindgen::prelude::*;
	// use crate::printf;

	// main entrypoint, if needed
	// #[wasm_bindgen(start)]
	// pub fn main() {
	// 	printf!("main entrypoint");
	// 	use wkhtmltopdf::*;

	// 	let html = r#"<html><body><div>foo</div></body></html>"#;
	// 	let mut pdf_app = PdfApplication::new().expect("Failed to init PDF application");
	// 	let mut pdfout = pdf_app
	// 		.builder()
	// 		.orientation(Orientation::Landscape)
	// 		.margin(Size::Inches(2))
	// 		.title("Awesome Foo")
	// 		.build_from_html(&html)
	// 		.expect("failed to build pdf");

	// 	pdfout.save("foo.pdf").expect("failed to save foo.pdf");
	// }
}
