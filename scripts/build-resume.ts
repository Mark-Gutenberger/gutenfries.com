import { html, tokens } from 'rusty_markdown';

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
const sanatizedResumeHTML = resumeHTML.replace(/’/g, '\'');

const resumeCSS = await Deno.readTextFile('./static/styles/resume.min.css');

const resumeHTMLWithCSS =
	`<!DOCTYPE html><style>${resumeCSS}</style><article>${sanatizedResumeHTML}</article>`;

await Deno.writeTextFile(
	'./static/resume/resume.min.html',
	resumeHTMLWithCSS,
);
