import { HandlerContext } from '$fresh/server.ts';
import { random_tw_colors } from '@/bindings/bindings.ts';

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
	// const ARR = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	// const randomIndex = Math.floor(Math.random() * ARR.length);
	// const body = ARR[randomIndex];
	return new Response(JSON.stringify(random_tw_colors(3, 200, 'tailwind')), {
		headers: { 'Content-Type': 'application/json' },
	});
};
