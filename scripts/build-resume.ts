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

const sanatizedResumeHTML = resumeHTML.replace(
	/<img /g,
	'<img loading="lazy" style="width: 80vw; max-width: 50rem;" ',
);

// GFM CSS
const resumeCSS = await Deno.readTextFile('./static/resume/github-markdown.min.css');
// Global scrollbar CSS
const globalCSS =
	`:root, *, html {scrollbar-color: #27272a #d1d5db;z-index: 100;}*::-webkit-scrollbar {width: 0.666rem;z-index: 100;}*::-webkit-scrollbar-track {background: #d1d5db;border-radius: 6px;z-index: 99;}*::-webkit-scrollbar-thumb {background-color: #27272a;border-radius: 6px;z-index: 100;}img:before {display: none;}img:after {content: 'Uh Oh! Image not found: "' attr(alt) '"';display: block;position: absolute;padding: 5%;top: 50%;left: 50%;text-align: center;transform: translate(-50%, -50%);background-color: #27272a;z-index: 10;border-radius: 0.5rem;}`;

const resumeCode =
	`<style>${globalCSS}${resumeCSS}</style><article class='markdown-body' style='padding:30px 30px 30px 30px'>${sanatizedResumeHTML}</article>`;

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
