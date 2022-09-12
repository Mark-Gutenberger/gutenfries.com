/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from '$fresh/server.ts';
import manifest from '@/fresh.gen.ts';

import { config, setup } from '@twind';
import { virtualSheet } from 'twind/sheets';

import { version } from '@/utils/version.ts';

// load the environment
import 'dotenv/load.ts';

// setup twind
const sheet = virtualSheet();
sheet.reset();
setup({ ...config, sheet });

function render(ctx: RenderContext, render: InnerRenderFunction) {
	const snapshot = ctx.state.get('twind') as unknown[] | null;
	sheet.reset(snapshot || undefined);
	render();
	ctx.styles.splice(0, ctx.styles.length, ...(sheet).target);
	const newSnapshot = sheet.reset();
	ctx.state.set('twind', newSnapshot);
}

/**
 * log valuable info to the server
 * @param version_  pass `version`, provided by `utils/version.ts`
 */
const debugLog = (version_: unknown): void => {
	console.log('\n-------------------------------------------------------------\n');
	// spit out the program version
	console.log(`gutenfries.com version: ${version_}\n`);

	// cwd
	console.log(`Deno CWD: ${Deno.cwd()}\n`);

	// do a quick checky check for potential issues from the `PORT` env var
	if (Deno.env.get('PORT') !== undefined) {
		console.warn(
			`WARN: \`PORT\` env var is set to \`${
				Deno.env.get('PORT')
			}\`. This MAY present issues, proceed with caution.\n`,
		);
	}

	// print the rest of the enviroment
	console.log(`Deno Env:\n`);
	console.table(Deno.env.toObject());

	console.log('-------------------------------------------------------------\n');
};

if (
	Deno.args.includes('--log') ||
	Deno.args.includes('--debug') ||
	Deno.args.includes('--verbose')
) {
	debugLog(version);
}

await start(manifest, { render, port: 80 });
