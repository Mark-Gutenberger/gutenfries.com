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

// GFM CSS
const resumeCSS = await Deno.readTextFile('./static/resume/github-markdown.min.css');
// Global scrollbar CSS
const globalCSS =
	`* {scrollbar-color: #3b82f6 #d1d5db ;z-index: 100;}*::-webkit-scrollbar {width: 16px;z-index: 100;}*::-webkit-scrollbar-track {background: #d1d5db ;border-radius: 6px;z-index: 99;}*::-webkit-scrollbar-thumb {background-color: #3b82f6 ;border-radius: 6px;z-index: 100;}`;

const resumeCode =
	`<style>${globalCSS}${resumeCSS}</style><article class='markdown-body' style='padding:30px 30px 30px 30px'>${resumeHTML}</article>`;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

await init();

const resumeMinified = decoder.decode(
	minify(encoder.encode(resumeCode), {
		keep_comments: false,
		do_not_minify_doctype: true,
		ensure_spec_compliant_unquoted_attribute_values: true,
		keep_spaces_between_attributes: true,
	}),
);

await Deno.writeTextFile(
	'./static/resume/resume.min.html',
	`<html class='markdown-body'>${resumeMinified}</hmtl>`,
);
