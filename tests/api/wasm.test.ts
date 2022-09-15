import { body } from '@/routes/api/v1/wasm.ts';
import { assertEquals } from 'testing/asserts.ts';

Deno.test({
	name: '`wasm` api unit test',
	permissions: { read: true },
	fn: () => {
		const expected = '42';
		const actual = body;

		assertEquals(actual, expected);
	},
});
