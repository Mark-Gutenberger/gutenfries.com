import dev from '$fresh/dev.ts';
// import 'preact/debug';

// execute `deno task build-resume`
/**
await Deno.run({
	cmd: ['deno', 'task', 'build-resume'],
	stdout: 'inherit',
	stderr: 'inherit',
}).status();
 */

// execute `deno task build-css`
/**
await Deno.run({
	cmd: ['deno', 'task', 'build-css'],
	stdout: 'inherit',
	stderr: 'inherit',
}).status();
*/

// start dev server
await dev(import.meta.url, './main.ts');
