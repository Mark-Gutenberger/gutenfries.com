function NoScript() {
	return (
		<noscript>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-4xl font-bold text-center text-gray-200'>
					Please enable JavaScript for the best experience while using this website.
				</h1>
			</div>
		</noscript>
	);
}

export { NoScript };
