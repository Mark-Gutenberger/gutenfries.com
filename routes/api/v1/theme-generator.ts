import { HandlerContext } from '$fresh/server.ts';
import * as rust from '@/wasm/wasm.js';

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
	// const ARR = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	// const randomIndex = Math.floor(Math.random() * ARR.length);
	// const body = ARR[randomIndex];
	return new Response(JSON.stringify(rust.random_color()), {
		headers: { 'Content-Type': 'application/json' },
	});
};
