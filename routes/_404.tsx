/** @jsx h */
import { h } from 'preact';
import { UnknownPageProps } from '$fresh/server.ts';

const NotFoundPage = ({ url }: UnknownPageProps) => <p>404 not found: {url.pathname}</p>;

export default NotFoundPage;
