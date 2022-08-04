/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { MainLayout } from '../../../layouts/MainLayout.tsx';

function Greet(props: PageProps) {
	const { name } = props.params;

	return (
		// <MainLayout>
		<p>Greetings to you, {name}!</p>
		// </MainLayout>
	);
}

export default Greet;
