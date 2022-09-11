/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';

interface AboutPageProps {
	pageProps_: PageProps;
}

function AboutPage({ pageProps_ }: AboutPageProps) {
	return (
		<>
			<MainLayout
				pageProps_={pageProps_}
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
