import { version } from '@/utils/version.ts';
import { readJson } from '@/utils/json.ts';
import { assertEquals } from '$testing/asserts.ts';

Deno.test({
	name: '`version` unit test',
	permissions: { read: true },
	fn: async () => {
		const actual = version;
		const denoJson = await readJson('./deno.json');
		const expected = denoJson.version;

		assertEquals(actual, expected);
	},
});
