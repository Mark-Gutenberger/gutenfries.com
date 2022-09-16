import { UnknownPageProps } from '$fresh/server.ts';

function NotFoundPage({ url }: UnknownPageProps) {
	return <h1>404: {url.pathname} not found</h1>;
}

export default NotFoundPage;
