// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from 'https://deno.land/x/plug@0.5.2/plug.ts';

function encode(v: string | Uint8Array): Uint8Array {
	if (typeof v !== 'string') return v;
	return new TextEncoder().encode(v);
}

function decode(v: Uint8Array): string {
	return new TextDecoder().decode(v);
}

function readPointer(v: any): Uint8Array {
	const ptr = new Deno.UnsafePointerView(v as bigint);
	const lengthBe = new Uint8Array(4);
	const view = new DataView(lengthBe.buffer);
	ptr.copyInto(lengthBe, 0);
	const buf = new Uint8Array(view.getUint32(0));
	ptr.copyInto(buf, 4);
	return buf;
}

const url = new URL('../target/debug', import.meta.url);
let uri = url.toString();
if (!uri.endsWith('/')) uri += '/';

let darwin: string | { aarch64: string; x86_64: string } = uri + 'librust.dylib';

if (url.protocol !== 'file:') {
	// Assume that remote assets follow naming scheme
	// for each macOS artifact.
	darwin = {
		aarch64: uri + 'librust_arm64.dylib',
		x86_64: uri + 'librust.dylib',
	};
}

const opts = {
	name: 'rust',
	urls: {
		darwin,
		windows: uri + 'rust.dll',
		linux: uri + 'librust.so',
	},
	policy: CachePolicy.NONE,
};
const _lib = await prepare(opts, {
	greet: {
		parameters: ['pointer', 'usize'],
		result: 'void',
		nonblocking: false,
	},
	random_tw_colors: {
		parameters: ['i32', 'u32', 'pointer', 'usize'],
		result: 'pointer',
		nonblocking: false,
	},
});

export function greet(a0: string) {
	const a0_buf = encode(a0);
	const a0_ptr = Deno.UnsafePointer.of(a0_buf);
	let rawResult = _lib.symbols.greet(a0_ptr, a0_buf.byteLength);
	const result = rawResult;
	return result;
}
export function random_tw_colors(a0: number, a1: number, a2: string) {
	const a2_buf = encode(a2);
	const a2_ptr = Deno.UnsafePointer.of(a2_buf);
	let rawResult = _lib.symbols.random_tw_colors(
		a0,
		a1,
		a2_ptr,
		a2_buf.byteLength,
	);
	const result = readPointer(rawResult);
	return decode(result);
}
