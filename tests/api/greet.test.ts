import Greet from '../../routes/api/greet/[name].tsx';
import { assertEquals } from 'testing/asserts.ts';

Deno.test('Greet unit test', () => {
	const name = 'Deno';
	const expected = `Hello ${name}`;

	const actual = Greet(name);

	assertEquals(actual, expected);
});
