/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';

function Greet(props: PageProps) {
	const { name } = props.params;

	return <p>Greetings to you, {name}!</p>;
}

export default Greet;
