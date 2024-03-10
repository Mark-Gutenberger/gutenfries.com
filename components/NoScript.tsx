function NoScript() {
	return (
		<noscript>
			<div className='flex flex-col justify-center items-center h-screen'>
				<h1 className='font-bold text-4xl text-center text-gray-200'>
					Please enable JavaScript for the best experience while using this website.
				</h1>
			</div>
		</noscript>
	);
}

export { NoScript };
