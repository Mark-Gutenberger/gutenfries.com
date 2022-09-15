import { readJson, writeJson } from '@/utils/json.ts';
import { assertEquals } from 'testing/asserts.ts';

Deno.test({
	name: '`readJson()` unit test',
	permissions: { read: true },
	fn: async () => {
		const actual = await readJson('./tests/utils/read.test.json');
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

Deno.test({
	name: '`writeJson()` unit test',
	permissions: { write: true, read: true },
	fn: async () => {
		// generate random slug and remember it
		const randomSlug = (): string => {
			return Math.random().toString(36).substring(2, 15) +
				Math.random().toString(36).substring(2, 15);
		};

		const slug = randomSlug();

		const json: Record<string, unknown> = {
			'slug': slug,
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

		// write json to file
		await writeJson('./tests/utils/write.test.json', json);

		// read the json back again
		const actual = await readJson('./tests/utils/write.test.json');

		const expected = json;

		assertEquals(actual, expected);
	},
});
