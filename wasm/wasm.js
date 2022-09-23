const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) {
	return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
	if (idx < 36) return;
	heap[idx] = heap_next;
	heap_next = idx;
}

function takeObject(idx) {
	const ret = getObject(idx);
	dropObject(idx);
	return ret;
}

function addHeapObject(obj) {
	if (heap_next === heap.length) heap.push(heap.length + 1);
	const idx = heap_next;
	heap_next = heap[idx];

	heap[idx] = obj;
	return idx;
}

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
	if (cachedUint8Memory0.byteLength === 0) {
		cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
	}
	return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
	return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = function (arg, view) {
	return cachedTextEncoder.encodeInto(arg, view);
};

function passStringToWasm0(arg, malloc, realloc) {
	if (realloc === undefined) {
		const buf = cachedTextEncoder.encode(arg);
		const ptr = malloc(buf.length);
		getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
		WASM_VECTOR_LEN = buf.length;
		return ptr;
	}

	let len = arg.length;
	let ptr = malloc(len);

	const mem = getUint8Memory0();

	let offset = 0;

	for (; offset < len; offset++) {
		const code = arg.charCodeAt(offset);
		if (code > 0x7F) break;
		mem[ptr + offset] = code;
	}

	if (offset !== len) {
		if (offset !== 0) {
			arg = arg.slice(offset);
		}
		ptr = realloc(ptr, len, len = offset + arg.length * 3);
		const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
		const ret = encodeString(arg, view);

		offset += ret.written;
	}

	WASM_VECTOR_LEN = offset;
	return ptr;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
	if (cachedInt32Memory0.byteLength === 0) {
		cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
	}
	return cachedInt32Memory0;
}
/**
 * wraps `random_tw_colors_internal` function
 * @param {number} n
 * @param {number} tolerance
 * @param {string} format
 * @returns {string}
 */
export function random_tw_colors(n, tolerance, format) {
	try {
		const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
		const ptr0 = passStringToWasm0(format, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
		const len0 = WASM_VECTOR_LEN;
		wasm.random_tw_colors(retptr, n, tolerance, ptr0, len0);
		var r0 = getInt32Memory0()[retptr / 4 + 0];
		var r1 = getInt32Memory0()[retptr / 4 + 1];
		return getStringFromWasm0(r0, r1);
	} finally {
		wasm.__wbindgen_add_to_stack_pointer(16);
		wasm.__wbindgen_free(r0, r1);
	}
}

function handleError(f, args) {
	try {
		return f.apply(this, args);
	} catch (e) {
		wasm.__wbindgen_exn_store(addHeapObject(e));
	}
}

function getArrayU8FromWasm0(ptr, len) {
	return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

const imports = {
	__wbindgen_placeholder__: {
		__wbindgen_object_drop_ref: function (arg0) {
			takeObject(arg0);
		},
		__wbg_process_0cc2ada8524d6f83: function (arg0) {
			const ret = getObject(arg0).process;
			return addHeapObject(ret);
		},
		__wbindgen_is_object: function (arg0) {
			const val = getObject(arg0);
			const ret = typeof (val) === 'object' && val !== null;
			return ret;
		},
		__wbg_versions_c11acceab27a6c87: function (arg0) {
			const ret = getObject(arg0).versions;
			return addHeapObject(ret);
		},
		__wbg_node_7ff1ce49caf23815: function (arg0) {
			const ret = getObject(arg0).node;
			return addHeapObject(ret);
		},
		__wbindgen_is_string: function (arg0) {
			const ret = typeof (getObject(arg0)) === 'string';
			return ret;
		},
		__wbg_require_a746e79b322b9336: function () {
			return handleError(function (arg0, arg1, arg2) {
				const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_crypto_2036bed7c44c25e7: function (arg0) {
			const ret = getObject(arg0).crypto;
			return addHeapObject(ret);
		},
		__wbg_msCrypto_a21fc88caf1ecdc8: function (arg0) {
			const ret = getObject(arg0).msCrypto;
			return addHeapObject(ret);
		},
		__wbg_getRandomValues_b99eec4244a475bb: function () {
			return handleError(function (arg0, arg1) {
				getObject(arg0).getRandomValues(getObject(arg1));
			}, arguments);
		},
		__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e: function () {
			const ret = module;
			return addHeapObject(ret);
		},
		__wbg_randomFillSync_065afffde01daa66: function () {
			return handleError(function (arg0, arg1, arg2) {
				getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
			}, arguments);
		},
		__wbg_newnoargs_b5b063fc6c2f0376: function (arg0, arg1) {
			const ret = new Function(getStringFromWasm0(arg0, arg1));
			return addHeapObject(ret);
		},
		__wbg_call_97ae9d8645dc388b: function () {
			return handleError(function (arg0, arg1) {
				const ret = getObject(arg0).call(getObject(arg1));
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_self_6d479506f72c6a71: function () {
			return handleError(function () {
				const ret = self.self;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_window_f2557cc78490aceb: function () {
			return handleError(function () {
				const ret = window.window;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_globalThis_7f206bda628d5286: function () {
			return handleError(function () {
				const ret = globalThis.globalThis;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbg_global_ba75c50d1cf384f4: function () {
			return handleError(function () {
				const ret = global.global;
				return addHeapObject(ret);
			}, arguments);
		},
		__wbindgen_is_undefined: function (arg0) {
			const ret = getObject(arg0) === undefined;
			return ret;
		},
		__wbg_buffer_3f3d764d4747d564: function (arg0) {
			const ret = getObject(arg0).buffer;
			return addHeapObject(ret);
		},
		__wbg_new_8c3f0052272a457a: function (arg0) {
			const ret = new Uint8Array(getObject(arg0));
			return addHeapObject(ret);
		},
		__wbg_set_83db9690f9353e79: function (arg0, arg1, arg2) {
			getObject(arg0).set(getObject(arg1), arg2 >>> 0);
		},
		__wbg_length_9e1ae1900cb0fbd5: function (arg0) {
			const ret = getObject(arg0).length;
			return ret;
		},
		__wbg_newwithlength_f5933855e4f48a19: function (arg0) {
			const ret = new Uint8Array(arg0 >>> 0);
			return addHeapObject(ret);
		},
		__wbg_subarray_58ad4efbb5bcb886: function (arg0, arg1, arg2) {
			const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
			return addHeapObject(ret);
		},
		__wbindgen_object_clone_ref: function (arg0) {
			const ret = getObject(arg0);
			return addHeapObject(ret);
		},
		__wbindgen_throw: function (arg0, arg1) {
			throw new Error(getStringFromWasm0(arg0, arg1));
		},
		__wbindgen_memory: function () {
			const ret = wasm.memory;
			return addHeapObject(ret);
		},
	},
};

const wasm_url = new URL('wasm_bg.wasm', import.meta.url);
let wasmCode = '';
switch (wasm_url.protocol) {
	case 'file:':
		wasmCode = await Deno.readFile(wasm_url);
		break;
	case 'https:':
	case 'http:':
		wasmCode = await (await fetch(wasm_url)).arrayBuffer();
		break;
	default:
		throw new Error(`Unsupported protocol: ${wasm_url.protocol}`);
}

const wasmInstance = (await WebAssembly.instantiate(wasmCode, imports)).instance;
const wasm = wasmInstance.exports;
