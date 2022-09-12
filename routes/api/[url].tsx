/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Handlers, UnknownPageProps } from '$fresh/server.ts';
import { readJson } from '@/utils/json.ts';

const denoJson = await readJson('./deno.json');
const ApiVersion = denoJson.apiVersion;

const ErrorNoVersion = ({ url }: UnknownPageProps) => {
	const pathname = url.pathname.replace('/api/', '');

	try {
		const redirectUrl = `/api/${ApiVersion}/${pathname}?redirect=true`;

		return (
			<script>
				window.location.replace(`{redirectUrl}`);
			</script>
		);
	} catch (error) {
		return (
			<>
				<h1>Error 404: api version '{url.pathname}' not found</h1>
				<p>this is a versioned api</p>
				<p>
					did you mean{' '}
					<a href={`/api/${ApiVersion}/${pathname}?redirect=true`}>
						/api/{ApiVersion}/{pathname}?
					</a>
				</p>
				<p>Error other:</p>
				<pre>{error.message}</pre>
			</>
		);
	}
};

export default ErrorNoVersion;
