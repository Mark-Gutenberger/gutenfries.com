import { body } from '@/routes/api/v1/theme-generator.ts';
import { assert } from '$testing/asserts.ts';
import * as colors from 'twind/colors';

Deno.test({
	name: '`theme-generator` api unit test',
	permissions: { read: true },
	fn: () => {
		// TODO(@gutenfries): add tests
		assert(true);
	},
});
