/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from '@twind';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';
import { theme } from '../utils/theme.ts';

function Home(pageProps_: PageProps) {
	const route = pageProps_.url.pathname.slice(1);
	const description = 'Marcus Gutenberger is a software engineer and designer';
	return (
		<html>
			<MainLayout
				// title={title}
				description={description}
				pageProps_={pageProps_}
				theme={theme}
			>
				<br></br>
				<p>
					Are you all right? No. He's making the tie in the cab as they're flying up
					Madison. He finally gets there. He runs up the steps into the church. The
					wedding is on. And he says, "Watermelon? I thought you said Guatemalan. Why
					would I marry a watermelon?" Is that a bee joke?
				</p>
			</MainLayout>
		</html>
	);
}

export default Home;
