import { Link, routes } from '@redwoodjs/router';
import { useAuth } from '@redwoodjs/auth';
import { Toaster } from '@redwoodjs/web/toast';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

type BlogLayoutProps = {
	children?: React.ReactNode;
};

export interface IButtonExampleProps {
	// These are set based on the toggles shown above the examples (not needed in real code)
	disabled?: boolean;
	checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

const BlogLayout: React.FunctionComponent<IButtonExampleProps> = ({ children }: BlogLayoutProps, props) => {
	const { logOut, isAuthenticated, currentUser } = useAuth();
	const { disabled, checked } = props;

	return (
		<>
			<Toaster />
			<header className='relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white'>
				<h1 className='text-5xl font-semibold tracking-tight'>
					<Link className='text-blue-400 hover:text-blue-100 transition duration-100' to={routes.home()}>
						Redwood Blog
					</Link>
				</h1>
				<nav>
					<ul className='relative flex items-center font-light'>
						<li>
							<Link
								className='py-2 px-4 hover:bg-blue-600 transition duration-100 rounded'
								to={routes.about()}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className='py-2 px-4 hover:bg-blue-600 transition duration-100 rounded'
								to={routes.contact()}
							>
								Contact
							</Link>
						</li>
						<li>
							{isAuthenticated ? (
								// <div>
								// 	<button type='button' onClick={logOut} className='py-2 px-4'>
								// 		Logout
								// 	</button>
								// </div>
								// <Stack horizontal tokens={stackTokens}>
								<PrimaryButton
									className='py-2 px-4'
									onClick={logOut}
									allowDisabledFocus
									disabled={disabled}
									checked={checked}
								>
									Logout
								</PrimaryButton>
							) : (
								// </Stack>
								<Link to={routes.login()} className='py-2 px-4'>
									Login
								</Link>
							)}
						</li>
					</ul>
					{isAuthenticated && (
						<div className='absolute bottom-1 right-0 mr-12 text-xs text-blue-300'>{currentUser.email}</div>
					)}
				</nav>
			</header>
			<main className='max-w-4xl mx-auto p-12 bg-white shadow rounded-b'>{children}</main>
		</>
	);
};

export default BlogLayout;
