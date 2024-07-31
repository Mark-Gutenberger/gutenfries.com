import { PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

export default function ResumePage(_PageProps: PageProps) {
	const file_id = '1SnkOFLDzzFl7p_kpuHCT31KraCFnVPit8J3Qcwm8YsE';

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
