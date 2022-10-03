export function handler(req: Request): Response {
	return new Response('', {
		status: 301,
		headers: { Location: '/home' },
	});
}
