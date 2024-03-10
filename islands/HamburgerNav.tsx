import { useSignal } from '@preact/signals';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { JSX } from 'preact/jsx-runtime';
import { Route, Routes } from '@/routes.ts';

interface HamburgerNavProps {
	routes: Route[];
	active: Routes;
}

export default function HamburgerNav(_props: HamburgerNavProps): JSX.Element {
	const count = useSignal(0);

	if (!IS_BROWSER) {
		return <button />;
	}

	return (
		<>
			<button
				type='button'
				className='transition focus:outline-none block relative bg-gray-200 dark:bg-gray-800 mx-3 p-3 rounded-md cursor-pointer overflow-hidden group'
				onClick={() => {
					// TODO(@gutenfries)
				}}
			>
				<span
					className={'animation-gradient absolute w-52 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-52 group-hover:-translate-y-32 ease'}
				/>
				{/* This approach is super mickey-mouse, but it's the the way 2:00am me decided this should work...*/}
				<i
					className={'h-8 w-8 p-0.5 hidden group-hover:flex flex-col justify-around relative'}
				>
					<span
						className={'bg-gray-200 rounded-lg w-full h-0.5 ransition duration-300 ease'}
					/>
					<span
						className={'bg-gray-200 rounded-lg w-full h-0.5 ransition duration-300 ease'}
					/>
					<span
						className={'bg-gray-200 rounded-lg w-full h-0.5 ransition duration-300 ease'}
					/>
				</i>
				<i
					className={'h-8 w-8 p-0.5 group-hover:hidden flex flex-col justify-around relative'}
				>
					<span
						className={'animation-gradient rounded-lg w-full h-0.5 ransition duration-300 ease'}
					/>
					<span
						className={'animation-gradient rounded-lg w-full h-0.5 ransition duration-300 ease'}
					/>
					<span
						className={'animation-gradient rounded-lg w-full h-0.5 ransition duration-300 ease'}
					/>
				</i>
			</button>
			<span className={'absolute'}>
			</span>
		</>
	);
}
