import { parseColors } from '@/rust/color_generator/src/typescript/parseColors.ts';
import { assert, assertEquals } from '$testing/asserts.ts';

Deno.test({
	name: '`parseColors()` unit test',
	permissions: { read: true },
	fn: () => {
		const exampleInput = 'blue-500;red-500;green-500;';
		const expected = ['blue-500', 'red-500', 'green-500'];

		assertEquals(parseColors(exampleInput), expected);

		const exampleInput2 = 'blue-500;red-500;green-500;';
		assert(parseColors(exampleInput2).length === 3);
	},
});
