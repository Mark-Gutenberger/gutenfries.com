import { readJson } from '@/utils/json.ts';

const denoJson = await readJson('./deno.json');
const version_ = denoJson.version;

const callback = (): string | unknown => {
	return version_;
};

callback();

export const version = callback();
