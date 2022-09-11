/** @jsx h */
import { h } from 'preact';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';

function Index(pageProps_: PageProps) {
	return (
		<MainLayout
			pageProps_={pageProps_}
		>
			<br />
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
				{
					/* 	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid aspernatur
				accusantium, earum consequuntur asperiores exercitationem nulla iure quibusdam
				perferendis vel laudantium cupiditate, ea voluptatibus delectus placeat esse.
				Deserunt, odit eaque? Mollitia laboriosam hic commodi dolorum doloremque numquam
				minima. Libero laboriosam beatae sapiente dignissimos quaerat itaque odio at eaque
				in eum cumque, ullam reiciendis quas nobis minima enim nisi iure molestias. Tempore
				et unde maxime, fugiat vel deserunt animi recusandae quos mollitia est esse eos
				optio, sequi quisquam reiciendis corrupti voluptatibus similique impedit eius.
				Recusandae, animi enim ab sit autem temporibus. Aliquam quidem deleniti temporibus
				consequatur doloribus. Eum quo, iure ex earum porro dolore quibusdam quasi ea
				obcaecati, repellendus veritatis culpa quidem! Consequuntur commodi possimus
				perferendis quae amet nobis sunt id. Dicta, quae iusto laborum molestias praesentium
				eligendi architecto, ipsa repudiandae rerum in vel, recusandae eaque? Iste ipsam
				blanditiis, esse excepturi ducimus non veniam labore quo, asperiores possimus totam
				nobis ullam. */
				}
			</p>
		</MainLayout>
	);
}

export default Index;
