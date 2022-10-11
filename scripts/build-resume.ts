import { html, tokens } from 'rusty_markdown';
import init, { minify } from 'minify-html';

const resumeMarkdown = await Deno.readTextFile('./static/resume/resume.md');

// find any occurance of '/static' and remove it
const sanatizedResumeMarkdown = resumeMarkdown.replace(/\/static/g, '');

const resumeTokenized = tokens(sanatizedResumeMarkdown, {
	strikethrough: true,
	tables: true,
	tasklists: true,
	footnotes: true,
	smartPunctuation: true,
});

const resumeHTML = html(resumeTokenized);

const resumeCSS = await Deno.readTextFile('./static/resume/resume.css');

const resumeHTMLWithCSS = `<style>${resumeCSS}</style>${resumeHTML}`;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

await init();

// const resumeMinified = decoder.decode(
// 	minify(encoder.encode(resumeHTMLWithCSS), {
// 		keep_comments: false,
// 		do_not_minify_doctype: true,
// 		ensure_spec_compliant_unquoted_attribute_values: true,
// 		keep_spaces_between_attributes: true,
// 	}),
// );

await Deno.writeTextFile(
	'./static/resume/resume.min.html',
	resumeHTMLWithCSS,
);
