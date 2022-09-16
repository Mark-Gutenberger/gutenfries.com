/** @jsx h */
import { h } from 'preact';
import { ErrorPageProps } from '$fresh/server.ts';

function ErrorPage({ error }: ErrorPageProps) {
	<p>500 internal error: {(error as Error).message}</p>;
}

export default ErrorPage;
