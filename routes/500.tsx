import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
	GET(_req, ctx) {
		return ctx.render(null);
	},
};
