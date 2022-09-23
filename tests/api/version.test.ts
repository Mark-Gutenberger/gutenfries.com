import { body } from '@/routes/api/v1/version.ts';
import { version } from '@/utils/version.ts';
import { assertEquals } from '$testing/asserts.ts';

Deno.test({
	name: '`version` api unit test',
	permissions: { read: true },
	fn: () => {
		const expected = version;
		const actual = body;

		assertEquals(actual, expected);
	},
});
