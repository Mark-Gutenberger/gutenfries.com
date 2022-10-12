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

const resumeCSS = await Deno.readTextFile('./static/styles/resume.min.css');

const resumeHTMLWithCSS = `<style>${resumeCSS}</style>${resumeHTML}`;

await Deno.writeTextFile(
	'./static/resume/resume.min.html',
	resumeHTMLWithCSS,
);
