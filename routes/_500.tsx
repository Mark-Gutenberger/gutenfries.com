import { PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

function ErrorPage(PageProps: PageProps) {
	return (
		<section>
			<link
				rel='stylesheet'
				href={asset('/styles/animations/glitch.css')}
			/>

			<span>
				<h2>Error 500:</h2>
				<h2>Error 500:</h2>
				<h2>Error 500:</h2>
			</span>
			<br />
			<br />
			<span>
				<h3>Server Error</h3>
				<h3>Server Error</h3>
				<h3>Server Error</h3>
			</span>

			{PageProps.error instanceof Error
				? (
					<>
						<br />
						<br />
						<span>
							<hr />
							<hr />
							<hr />
						</span>
						<br />
					</>
				)
				: null}
			<span>
				<p>
					{PageProps.error instanceof Error ? (PageProps.error as Error).message : null}
				</p>
				<p>
					{PageProps.error instanceof Error ? (PageProps.error as Error).message : null}
				</p>
				<p>
					{PageProps.error instanceof Error ? (PageProps.error as Error).message : null}
				</p>
			</span>
		</section>
	);
}

export default ErrorPage;
