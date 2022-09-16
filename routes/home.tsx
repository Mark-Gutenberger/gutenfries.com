/** @jsx h */
import { h } from 'preact';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';

function Home(pageProps_: PageProps) {
	return (
		<MainLayout
			pageProps_={pageProps_}
		>
			<p>
				Are you all right? No. He's making the tie in the cab as they're flying up Madison.
				He finally gets there. He runs up the steps into the church. The wedding is on. And
				he says, "Watermelon? I thought you said Guatemalan. Why would I marry a
				watermelon?"
				<br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ad amet
				repudiandae perferendis, ipsum cumque vel similique dicta eaque nobis accusamus
				culpa, aliquid quibusdam id fugiat numquam! Consectetur, ad dignissimos.
				<br />
			</p>
		</MainLayout>
	);
}

export default Home;
