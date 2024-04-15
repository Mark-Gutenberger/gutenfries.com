import { PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

export default function ResumePage(_PageProps: PageProps) {
	const file_id = '1nL5QPLiHmbA9ELJ0_ia4eBLH_zy7mTee';

	return (
		<section>
			<iframe
				crossOrigin='true'
				rel='preload'
				className='z-20 rounded-b-lg w-full h-full aspect-[8.5/11] lg:aspect-[8.5/9] xl:aspect-[8.5/7] 2xl:aspect-[8.5/5]'
				src={asset(
					`https://drive.google.com/file/d/${file_id}/preview`,
				)}
			/>
		</section>
	);
}
