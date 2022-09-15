import { Handlers } from '$fresh/server.ts';
import { version } from '@/utils/version.ts';

const body = version;

export const handler: Handlers = {
	GET() {
		return new Response(
			JSON.stringify(
				body,
			),
			{
				headers: { 'Content-Type': 'application/json' },
			},
		);
	},
};

export { body };
