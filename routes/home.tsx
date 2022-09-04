/** @jsx h */
import { h } from 'preact';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';

function Home(pageProps_: PageProps) {
	return (
		<MainLayout
			pageProps_={pageProps_}
		>
			<br></br>
			<p>
				Are you all right? No. He's making the tie in the cab as they're flying up Madison.
				He finally gets there. He runs up the steps into the church. The wedding is on. And
				he says, "Watermelon? I thought you said Guatemalan. Why would I marry a
				watermelon?" Is that a bee joke?
			</p>
		</MainLayout>
	);
}

export default Home;
