/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';
import { theme } from '../utils/theme.ts';
import { Navbar } from '../components/Navbar.tsx';

function AboutPage(pageProps_: PageProps) {
	const route = pageProps_.url.pathname.slice(1);
	// const title = 'interesting things';
	const description = 'Marcus Gutenberger is a software engineer and designer';

	return (
		<>
			<MainLayout
				description={description}
				pageProps_={pageProps_}
				theme={theme}
			>
				<br></br>
				<p>
					How come you don't fly everywhere? It's exhausting. Why don't you run
					everywhere? It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You
					can just freeze live TV? That's insane! You don't have that? We have Hivo, but
					it's a disease. It's a horrible, horrible disease.
				</p>
			</MainLayout>
		</>
	);
}

export default AboutPage;
