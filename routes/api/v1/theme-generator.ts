import { Handlers } from '$fresh/server.ts';
import { random_tw_colors } from '@/wasm/wasm.js';
import { parseColors } from '@/rust/background_generator/typescript/parseColors.ts';

const handler: Handlers = {
	GET(_req, _ctx) {
		// parse the url params
		const { params } = _ctx;
		// see if params includes a number of colors
		const numColors = params.colors ? parseInt(params.colors) : 3;
		// see if params includes a tolerance level
		const tolerance = params.tolerance ? parseInt(params.tolerance) : 100;
		// see if params includes a color format
		const format = params.format ? params.format : 'tailwind';
		const colors = random_tw_colors(numColors, tolerance, format);
		// pass values into the wasm function and convert to object
		const body = parseColors(colors);

		if (body) {
			// return the response
			return new Response(
				JSON.stringify(body),
				{
					headers: {
						'content-type': 'application/json',
					},
					status: 200,
				},
			);
		} else {
			// return an error
			return new Response(
				JSON.stringify({ error: 'Something went wrong' }),
				{
					headers: {
						'content-type': 'application/json',
					},
					status: 500,
				},
			);
		}
	},
};

export { handler };

// used for testing
const body = parseColors(random_tw_colors(3, 200, 'tailwind'));
export { body };
