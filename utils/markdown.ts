import { render as renderGFM } from 'gfm';
import { asset } from '$fresh/runtime.ts';

/**
 * Detects the languages of each code block in a markdown string
 * @param {string} markdown - The raw markdown to detect languages from
 * @returns {string[]} The detected languages, in respective order
 */
function detectLanguages(markdown: string): string[] {
	const languages: string[] = [];

	// regex to match opening code blocks (```lang)
	const codeBlockRegex = /```([a-zA-Z0-9]+)/g;
	let match;
	while ((match = codeBlockRegex.exec(markdown)) !== null) {
		languages.push(match[1]);
	}

	return languages;
}

/**
 * Renders markdown to HTML via GFM and speed_highlight.js
 * @param {string} markdown - Markdown to render
 * @returns {string} HTML
 */
export function renderMarkdown(markdown: string): string {
	let html = renderGFM(markdown);

	// if there are no code blocks, return early as we do not need to inject code highlighting
	if (!html.includes('<pre')) return html;

	html = `
<link rel="stylesheet" href="${asset('/styles/visual-studio-dark.css')}" />
<script type='module'>
	import { highlightAll } from 'https://unpkg.com/@speed-highlight/core@1.2.6/dist/index.js';
	highlightAll();
</script>${html}`;

	// inject language specifiers
	const languages = detectLanguages(markdown);
	const codeBlocks = html.match(/<pre>[\s\S]*?<\/pre>/g);
	const shjLanguages: string[] = [
		'asm',
		'bash',
		'bf',
		'c',
		'css',
		'csv',
		'diff',
		'docker',
		'git',
		'go',
		'html',
		'http',
		'ini',
		'java',
		'js',
		'jsdoc',
		'json',
		'leanpub-md',
		'log',
		'lua',
		'make',
		'md',
		'pl',
		'plain',
		'py',
		'regex',
		'rs',
		'sql',
		'todo',
		'toml',
		'ts',
		'uri',
		'xml',
		'yaml',
	]; //TODO(@gutenfries): make a PR for this to be an exported constant in speed_highlight_js

	if (codeBlocks) {
		codeBlocks.forEach((codeBlock, i) => {
			if (
				shjLanguages.includes(languages[i])
			) {
				html = html.replace(
					codeBlock,
					codeBlock.replace(
						'<pre>',
						`<div class='text-base shj-multiline shj-mode-header shj-lang-${
							languages[i]
						}'>`,
					),
				);
			} else {
				// if the language cannot be coerced, call it plaintext
				html = html.replace(
					codeBlock,
					codeBlock.replace(
						'<pre>',
						`<pre class='text-base shj-multiline shj-lang-plain'>`,
					),
				);
			}
		});
	}

	return html;
}
