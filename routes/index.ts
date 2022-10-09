export function handler(): Response {
	return new Response('', {
		status: 301,
		headers: { Location: '/home' },
	});
}
