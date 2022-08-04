import { version } from '../../routes/api/version.ts';
import { version as version_ } from '../../utils/version.ts';
import { assertEquals } from 'testing/asserts.ts';

Deno.test({
	name: 'version api unit test',
	permissions: { read: true },
	fn: () => {
		const expected = version_;

		const actual = version;

		assertEquals(actual, expected);
	},
});
