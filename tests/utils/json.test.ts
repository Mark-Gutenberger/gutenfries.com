import { readJson, writeJson } from '@/utils/json.ts';
import { assertEquals } from 'testing/asserts.ts';

Deno.test({
	name: '`readJson() && writeJson()` unit test',
	permissions: { read: true },
	fn: async () => {
		const actual = await readJson('./tests/utils/test.json');
		const expected: Record<string, unknown> = {
			'test': {
				'test': 'test',
			},
			'data': {
				'string': 'string',
				'number': 1,
				'boolean': true,
				'array': ['string', 1, true],
				'object': {
					'string': 'string',
					'number': 1,
					'boolean': true,
					'array': ['string', 1, true],
				},
				'float': 1.1,
			},
		};

		assertEquals(actual, expected);
	},
});
