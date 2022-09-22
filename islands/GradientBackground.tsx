/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// TODO(@gutenfries): add global implimentation of API_VERSION
const API_VERSION = 'v1';

function GradientBackground() {
	const [theme, setTheme] = useState<string[]>([]);

	useEffect(() => {
		const getTheme = async () => {
			const url = `/api/${API_VERSION}/theme-generator`;
			const response = await fetch(url);

			try {
				const data: string[] = await response.json();
				setTheme(data);
			} catch (e) {
				console.log(e);
			}
		};
		getTheme();
	}, []);

	return (
		<div className='bg-gray-800'>
			<div
				className={`${`background-animate`} bg-gradient-to-r
							from-${theme[0]} via-${theme[1]} to-${theme[2]}
							flex items-center place-content-center p-5 pt-[6.25rem] h-screen w-screen`}
			/>
		</div>
	);
}

export default GradientBackground;
