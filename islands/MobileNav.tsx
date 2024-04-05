import { Route, Routes } from '@/routes.ts';
import { classNames } from '@/utils/classNames.ts';
import { JSX } from 'preact/jsx-runtime';

interface MobileNavProps {
	routes: Route[];
	active: Routes;
}

export default function MobileNav(props: MobileNavProps): JSX.Element {
	return (
		<>
			<button
				type='button'
				className='transition focus:outline-none relative flex bg-gray-200 dark:bg-gray-800 mx-3 p-3 rounded-md overflow-hidden group'
				onClick={() => {
					const el = document.getElementById('mobile-nav');

					if (el) {
						if (el.classList.contains('expanded')) {
							el.classList.remove('expanded');
						} else {
							el.classList.add('expanded');
						}
					}
				}}
			>
				<span
					className={'animation-gradient absolute w-52 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-52 group-hover:-translate-y-32 ease'}
				/>
				<span className='cursor-pointer'>
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
				</span>
			</button>

			<style>
				{`
				#mobile-nav {
					transition: height 400ms ease;
					height: 0rem;
					overflow-y: hidden;
				}

				#mobile-nav.expanded {
					height: ${
					props.routes.filter((route) => route.showInNav).length * 5
				}rem; // 5rem for each route
				}
				`}
			</style>

			<ul
				id='mobile-nav'
				className='top-20 fixed inset-0 flex-column justify-center bg-gray-800 w-screen'
			>
				{props.routes.map((item: Route) => {
					if (item.showInNav) {
						return (
							<li className='flex justify-center m-4'>
								<a
									key={item.id}
									href={item.pathName}
									className={classNames(
										props.active === item.id
											? 'animation-gradient'
											: 'dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-200',
										'transition rounded-md font-sedwick text-2xl font-bold p-3 mx-3 block overflow-hidden relative group cursor-pointer',
									)}
									aria-current={props.active === item.id ? 'page' : undefined}
								>
									<span
										className={classNames(
											props.active === item.id
												? 'bg-gray-800'
												: 'animation-gradient',
											'absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease',
										)}
									/>
									<span
										className={classNames(
											props.active === item.id
												? 'text-gray-200'
												: 'animation-gradient-text group-hover:text-gray-200',
											'relative transition duration-300 ease',
										)}
									>
										{item.displayName}
									</span>
								</a>
							</li>
						);
					}
				})}
			</ul>
		</>
	);
}
