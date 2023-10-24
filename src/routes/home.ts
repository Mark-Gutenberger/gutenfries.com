import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
	GET(req: Request) {
		const path = req.url;
		// remove '/home' from the path
		const newPath = path.replace('/home', '');
		// redirect to the new path ('/')
		return new Response(`Redirecting from  ${path} to ${newPath}`, {
			headers: { 'Location': newPath },
			status: 307,
		});
	},
};
