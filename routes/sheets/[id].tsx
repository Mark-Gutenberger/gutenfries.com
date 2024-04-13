import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

interface Data {
	id: string;
}

export const handler: Handlers<Data> = {
	GET(_req, ctx) {
		return ctx.render(
			{
				id: ctx.params.id,
			},
		);
	},
};

export default function ResumePage(props: PageProps<Data>) {
	return (
		<>
			<Head PageProps={props} />
			<Navbar
				active={Routes.sheets}
			/>
			<NoScript />

			<main
				id='main-content'
				className='flex justify-center bg-gray-100 dark:bg-gray-900 p-6 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<iframe
					className='z-20 rounded-b-lg w-full h-full aspect-[8.5/11] lg:aspect-[8.5/9] xl:aspect-[8.5/7] 2xl:aspect-[8.5/5]'
					src={asset(
						`https://drive.google.com/file/d/${props.data.id}/preview`,
					)}
				/>
			</main>
			<Footer />
		</>
	);
}
