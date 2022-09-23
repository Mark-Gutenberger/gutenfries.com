import { assert } from '$testing/asserts.ts';
import { body } from '@/routes/api/v1/random-uuid.ts';
import { v4 } from '$std/uuid/mod.ts';

Deno.test({
	name: '`random-uuid` api unit test',
	permissions: { read: true },
	fn: () => {
		const actual = body;

		assert(v4.validate(actual));
	},
});
