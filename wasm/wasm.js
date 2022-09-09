

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

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

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
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

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
* returns a random color from the tailwind css v2 palette
*
* ## Example:
* ```
* let color = get_random_color();
* ```
* output: `blue`
* @returns {string}
*/
export function random_color() {
    const ret = wasm.random_color();
    return takeObject(ret);
}

/**
* returns a random shade from the tailwind css v2 palette
*
* ## Example:
* ```
* let shade = get_random_shade();
* ```
* output: `600`
* @returns {string}
*/
export function random_shade() {
    const ret = wasm.random_shade();
    return takeObject(ret);
}

/**
* returns a random dark shade from the tailwind css v2 palette
* ## Example:
* ```
* let shade = random_shade_dark();
* ```
* output: `800`
* ## Example:
* ```
* let shade = random_shade_dark();
* ```
* output: `900`
* @returns {string}
*/
export function random_shade_dark() {
    const ret = wasm.random_shade_dark();
    return takeObject(ret);
}

/**
* returns a random light shade from the tailwind css v2 palette
* ## Example:
* ```
* let shade = random_shade_light();
* ```
* output: `200`
* ## Example:
* ```
* let shade = random_shade_light();
* ```
* output: `500`
* @returns {string}
*/
export function random_shade_light() {
    const ret = wasm.random_shade_light();
    return takeObject(ret);
}

/**
* generates a random tw color from the tailwind css v2 palette
*
* ## Example:
* ```
* let color = random_tw_color();
* ```
* output: `blue-600`
* @returns {string}
*/
export function random_tw_color() {
    const ret = wasm.random_tw_color();
    return takeObject(ret);
}

/**
* generates a random dark tw color from the tailwind css v2 palette
*
* ## Example:
* ```
* let color = random_tw_color_dark();
* ```
* output: `blue-600`
* @returns {string}
*/
export function random_tw_color_dark() {
    const ret = wasm.random_tw_color_dark();
    return takeObject(ret);
}

/**
* generates a random light tw color from the tailwind css v2 palette
*
* ## Example:
* ```
* let color = random_tw_color_light();
* ```
* output: `blue-600`
* @returns {string}
*/
export function random_tw_color_light() {
    const ret = wasm.random_tw_color_light();
    return takeObject(ret);
}

/**
* generates ```n``` random tw colors from the tailwind css v2 palette, where ```n``` is the
* first argument
* ## Example:
* ```
* let colors = random_tw_colors(5);
* ```
* output: `["blue-600", "indigo-700", "pink-800", "purple-900", "red-500"]`
* ## Example:
* ```
* let colors = random_tw_colors(1);
* ```
* output: `["blue-600"]`
* @param {number} n
* @returns {Array<any>}
*/
export function random_tw_colors(n) {
    const ret = wasm.random_tw_colors(n);
    return takeObject(ret);
}

/**
* @param {string} name
*/
export function greet(name) {
    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.greet(ptr0, len0);
}

/**
*/
export function run() {
    wasm.run();
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
        __wbindgen_object_drop_ref: function(arg0) {
            takeObject(arg0);
        },
        __wbg_log_db1469a1e6c25abd: function(arg0, arg1) {
            console.log(getStringFromWasm0(arg0, arg1));
        },
        __wbg_process_e56fd54cf6319b6c: function(arg0) {
            const ret = getObject(arg0).process;
            return addHeapObject(ret);
        },
        __wbindgen_is_object: function(arg0) {
            const val = getObject(arg0);
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg_versions_77e21455908dad33: function(arg0) {
            const ret = getObject(arg0).versions;
            return addHeapObject(ret);
        },
        __wbg_node_0dd25d832e4785d5: function(arg0) {
            const ret = getObject(arg0).node;
            return addHeapObject(ret);
        },
        __wbindgen_is_string: function(arg0) {
            const ret = typeof(getObject(arg0)) === 'string';
            return ret;
        },
        __wbg_require_0db1598d9ccecb30: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments) },
        __wbg_crypto_b95d7173266618a9: function(arg0) {
            const ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        },
        __wbg_msCrypto_5a86d77a66230f81: function(arg0) {
            const ret = getObject(arg0).msCrypto;
            return addHeapObject(ret);
        },
        __wbg_getRandomValues_b14734aa289bc356: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).getRandomValues(getObject(arg1));
        }, arguments) },
        __wbg_static_accessor_NODE_MODULE_26b231378c1be7dd: function() {
            const ret = module;
            return addHeapObject(ret);
        },
        __wbg_randomFillSync_91e2b39becca6147: function() { return handleError(function (arg0, arg1, arg2) {
            getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
        }, arguments) },
        __wbg_new_ee1a3da85465d621: function() {
            const ret = new Array();
            return addHeapObject(ret);
        },
        __wbg_newnoargs_971e9a5abe185139: function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg_call_33d7bcddbbfa394a: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments) },
        __wbindgen_string_new: function(arg0, arg1) {
            const ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        },
        __wbg_self_fd00a1ef86d1b2ed: function() { return handleError(function () {
            const ret = self.self;
            return addHeapObject(ret);
        }, arguments) },
        __wbg_window_6f6e346d8bbd61d7: function() { return handleError(function () {
            const ret = window.window;
            return addHeapObject(ret);
        }, arguments) },
        __wbg_globalThis_3348936ac49df00a: function() { return handleError(function () {
            const ret = globalThis.globalThis;
            return addHeapObject(ret);
        }, arguments) },
        __wbg_global_67175caf56f55ca9: function() { return handleError(function () {
            const ret = global.global;
            return addHeapObject(ret);
        }, arguments) },
        __wbindgen_is_undefined: function(arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        },
        __wbg_push_0bc7fce4a139a883: function(arg0, arg1) {
            const ret = getObject(arg0).push(getObject(arg1));
            return ret;
        },
        __wbg_buffer_34f5ec9f8a838ba0: function(arg0) {
            const ret = getObject(arg0).buffer;
            return addHeapObject(ret);
        },
        __wbg_new_cda198d9dbc6d7ea: function(arg0) {
            const ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_set_1a930cfcda1a8067: function(arg0, arg1, arg2) {
            getObject(arg0).set(getObject(arg1), arg2 >>> 0);
        },
        __wbg_length_51f19f73d6d9eff3: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_newwithlength_66e5530e7079ea1b: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_subarray_270ff8dd5582c1ac: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbindgen_object_clone_ref: function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        },
        __wbindgen_string_get: function(arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        },
        __wbindgen_throw: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_memory: function() {
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
    break
    case 'https:':
    case 'http:':
    wasmCode = await (await fetch(wasm_url)).arrayBuffer();
    break
    default:
    throw new Error(`Unsupported protocol: ${wasm_url.protocol}`);
}

const wasmInstance = (await WebAssembly.instantiate(wasmCode, imports)).instance;
const wasm = wasmInstance.exports;

wasm.__wbindgen_start();

