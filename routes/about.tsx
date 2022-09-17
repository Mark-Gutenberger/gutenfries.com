/** @jsx h */
import { h } from 'preact';
import { HomeLayout } from '@/layouts/HomeLayout.tsx';
import { PageProps } from '$fresh/server.ts';

function AboutPage(pageProps_: PageProps) {
	return (
		<HomeLayout
			pageProps_={pageProps_}
		>
			<br></br>
			<p>
				How come you don't fly everywhere? It's exhausting. Why don't you run everywhere?
				It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You can just freeze
				live TV? That's insane! You don't have that? We have Hivo, but it's a disease. It's
				a horrible, horrible disease.
			</p>
		</HomeLayout>
	);
}

export default AboutPage;
