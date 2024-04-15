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
		<section>
			<iframe
				crossOrigin='true'
				rel='preload'
				className='z-20 rounded-b-lg w-full h-full aspect-[8.5/11] lg:aspect-[8.5/9] xl:aspect-[8.5/7] 2xl:aspect-[8.5/5]'
				src={asset(
					`https://drive.google.com/file/d/${props.data.id}/preview`,
				)}
			/>
		</section>
	);
}
