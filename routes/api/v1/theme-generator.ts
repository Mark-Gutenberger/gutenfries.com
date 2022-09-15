import { HandlerContext } from '$fresh/server.ts';
import { random_tw_colors } from '@/bindings/bindings.ts';
import { parseColors } from '@/rust/background_generator/typescript/parseColors.ts';

const body = parseColors(random_tw_colors(3, 200, 'tailwind'));

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
	const body = parseColors(random_tw_colors(3, 200, 'tailwind'));

	return new Response(JSON.stringify(body), {
		headers: { 'Content-Type': 'application/json' },
	});
};

export { body };
