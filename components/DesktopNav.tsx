import { Route, RoutesEnum } from '@/routes.ts';
import { classNames } from '@/utils/classNames.ts';

interface DesktopNavProps {
	routes: Route[];
	active: RoutesEnum;
}

function DesktopNav(props: DesktopNavProps) {
	return (
		<ul className='flex'>
			{props.routes.map((item: Route) => {
				// if the route has a displayName, render it
				if (item.showInNav) {
					return (
						<li className='flex justify-center items-center'>
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
	);
}

export { DesktopNav };
