import 'preact/debug';
import 'preact/devtools';

import dev from '$fresh/dev.ts';

// start dev server
await dev(import.meta.url, './main.ts');
