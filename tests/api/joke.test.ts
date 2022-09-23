import { assert } from '$testing/asserts.ts';
import { body, JOKES } from '@/routes/api/v1/joke.ts';

Deno.test({
	name: '`joke` api unit test',
	permissions: { read: true },
	fn: () => {
		const actual = body;
		const includes = JOKES.includes(actual);

		assert(includes);
	},
});
