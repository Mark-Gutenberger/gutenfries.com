import { Handlers } from '$fresh/server.ts';

const uuid = crypto.randomUUID();
const body = uuid as string;

export const handler: Handlers = {
	GET() {
		return new Response(JSON.stringify(body), {
			headers: { 'Content-Type': 'application/json' },
		});
	},
};

export { body };
