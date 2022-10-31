/** @jsx h */
import { h } from 'preact';

import { asset } from '$fresh/runtime.ts';

function Footer() {
	return (
		<footer className='text-gray-800 dark:text-gray-100'>
			<div className='container px-5 py-32 mx-auto'>
				<div className='flex flex-wrap md:text-left text-center -mb-10 -mx-4'>
					<section className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h2 className='font-bold text-lg text-blue-500 tracking-widest mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<ul>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										First Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Second Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Third Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Fourth Link
									</a>
								</li>
							</ul>
						</nav>
					</section>
					<section className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h2 className='font-bold text-lg text-blue-500 tracking-widest mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<ul>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										First Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Second Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Third Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Fourth Link
									</a>
								</li>
							</ul>
						</nav>
					</section>
					<section className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h2 className='font-bold text-lg text-blue-500 tracking-widest mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<ul>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										First Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Second Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Third Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Fourth Link
									</a>
								</li>
							</ul>
						</nav>
					</section>
					<section className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h2 className='font-bold text-lg text-blue-500 tracking-widest mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<ul>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										First Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Second Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Third Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Fourth Link
									</a>
								</li>
							</ul>
						</nav>
					</section>
					<section className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h2 className='font-bold text-lg text-blue-500 tracking-widest mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<ul>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										First Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Second Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Third Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Fourth Link
									</a>
								</li>
							</ul>
						</nav>
					</section>
					<section className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h2 className='font-bold text-lg text-blue-500 tracking-widest mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<ul>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										First Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Second Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Third Link
									</a>
								</li>
								<li>
									<a className='hover:text-underline cursor-pointer'>
										Fourth Link
									</a>
								</li>
							</ul>
						</nav>
					</section>
				</div>
			</div>

			<section className='p-4 bg-gray-800 rounded-lg'>
				<div className='container mx-auto py-4 px-5 flex flex-wrap flex-row sm:flex-row'>
					<p className='text-lg text-sm text-center sm:text-left'>
						<a
							href='https://github.com/gutenfries/gutenfries.deno.dev/blob/main/LICENSE.md'
							className='ml-1'
							target='_blank'
							rel='noopener noreferrer'
						>
							© {new Date().getFullYear()} Mark Gutenberger - @gutenfries
						</a>
					</p>
					{/* centered made with deno badge */}
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						<a
							href='https://fresh.deno.dev/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='sr-only'>
								Made with Fresh
							</span>
							<img
								src={asset('images/made-with-fresh.svg')}
								alt='Made with Fresh'
							/>
						</a>
					</span>
					<span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm'>
						Created with {'<'}3 and
						<a
							href='https://deno.land'
							className='ml-1'
							target='_blank'
							rel='noopener noreferrer'
						>
							Deno
						</a>
					</span>
				</div>
			</section>
		</footer>
	);
}

export { Footer };
