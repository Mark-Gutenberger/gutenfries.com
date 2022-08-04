import { IS_BROWSER } from '$fresh/runtime.ts';
import { readJson } from './json.ts';

const denoJson = await readJson('./deno.json');
const version_ = denoJson.version;

const callback = (): string | unknown => {
	return version_;
};

export const version = callback();

if (IS_BROWSER === false) {
	console.log(version_);
}
