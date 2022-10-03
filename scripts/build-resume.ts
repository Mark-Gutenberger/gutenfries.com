import { html, tokens } from 'rusty_markdown';
import init, { minify } from 'minify-html';

const resumeMarkdown = await Deno.readTextFile('./static/resume/resume.md');

const resumeTokenized = tokens(resumeMarkdown, {
	strikethrough: true,
	tables: true,
	tasklists: true,
	footnotes: true,
	smartPunctuation: true,
});

const resumeHTML = html(resumeTokenized);

const resumeCSS = await Deno.readTextFile('./static/resume/github-markdown.min.css');

const resumeCode =
	`<style>${resumeCSS}</style><article class='markdown-body' style='padding:30px 30px 30px 30px'>${resumeHTML}</article>`;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

await init();

const resumeMinified = decoder.decode(
	minify(encoder.encode(resumeCode), {
		// keep_comments: true,
		do_not_minify_doctype: true,
		ensure_spec_compliant_unquoted_attribute_values: true,
		keep_spaces_between_attributes: true,
	}),
);

await Deno.writeTextFile(
	'./static/resume/resume.min.html',
	resumeMinified,
);
