import { PageProps } from '$fresh/server.ts';
import { html, tokens } from 'rustyMarkdown';
import { ensureFile } from '$std/fs/mod.ts';

function Markdown(props: PageProps): h.JSX.Element {
	// const { filepath } = props.params;
	// const content = await Deno.readTextFile(filepath);
	// const tokenized = tokens(content, { strikethrough: true });
	// const rendered = html(tokenized);

	return (
		<>
			{/* {rendered} */}
			{Deno.cwd()}
		</>
	);
}

export default Markdown;
