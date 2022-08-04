import { Handlers } from '$fresh/server.ts';
// import { Handlers } from '$fresh/server.ts';
import { version } from '../../utils/version.ts';

export const handler: Handlers = {
	GET(req) {
		return new Response(
			JSON.stringify(
				version,
			),
			{
				headers: { 'Content-Type': 'application/json' },
			},
		);
	},
};

export { version };
