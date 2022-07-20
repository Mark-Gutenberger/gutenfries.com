/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';

const GreetPage = (props: PageProps) => {
	const { name } = props.params;

	return (
		<main>
			<p>Greetings to you, {name}!</p>
		</main>
	);
};

export default GreetPage;
