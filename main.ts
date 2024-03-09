/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import 'npm:@types/node';
import '$std/dotenv/load.ts';

import { start } from '$fresh/server.ts';
import manifest from '@/fresh.gen.ts';
import config from '@/fresh.config.ts';

await start(manifest, config);

const solution =
	'http://docs.google.com/gview?url=https://gutenfries.deno.dev/resume/resume-tech.pdf&embedded=true';
