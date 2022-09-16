#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from '$fresh/dev.ts';
// import 'preact/debug';

await dev(import.meta.url, './main.ts');
