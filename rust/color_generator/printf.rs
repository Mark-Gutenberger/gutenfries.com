use crate::wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
	#[wasm_bindgen(js_namespace = console)]
	/// wrapper for the ```console.log()``` javascript api
	pub fn log(s: &str);
}

/// prints a formatted string to the console (stdout equivalent)
/// first argument is a string literal (ex ```"Hi {}"```).
///
/// all of the remaining arguments are passed into the string literal
///
/// ## Example:
///
/// ```
/// printf!("Hi {}", "Bob");
/// ```
/// output: `Hi Bob`
///
/// ## Example:
/// ```
/// printf!("Hi {}! You are {} years old.", "Bob", 30);
/// ```
/// output: `Hi Bob! You are 30 years old.`
///
/// ## Example:
/// ```
/// printf!("Hi, my name is Robert");
/// ```
/// output: `Hi, my name is Robert`
#[macro_export]
#[allow(clippy::crate_in_macro_def)]
macro_rules! printf {
		// case 1: 1 argument; only a raw string is passed
		($a:expr) => {
			crate::printf::log($a.to_string().as_str());
		};
		// case 2: 2 arguments; a string literal and a raw variable is passed
		($a:expr, $b:expr$(,)?) => {
			crate::printf::log(&format!($a, $b));
		};
		// case 3: n arguments; a string literal and n raw variables are passed
		($a:expr, $($b:expr$(,)?),+) => {
			crate::printf::log(&format!($a, $($b),+));
		};
	}

pub use printf;
