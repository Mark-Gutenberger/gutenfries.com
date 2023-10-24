import { render as renderGFM } from 'gfm';
import { asset } from '$fresh/runtime.ts';
import { detectLanguage } from 'speed_highlight_js/detect.js';
/**
 * Renders markdown to HTML via GFM and speed_highlight.js
 * @param {string} markdown - Markdown to render
 * @returns {string} HTML
 */
export function renderMarkdown(markdown: string): string {
	let html = renderGFM(markdown);

	// if there are no code blocks, return early as we do not need to inject code highlighting
	if (!html.includes('<code')) return html;

	// inject speed_highlight.js
	html = `<link rel='stylesheet' href=${asset('/styles/10x-dark.css')} />
<script type='module'>
import { highlightAll } from 'https://unpkg.com/@speed-highlight/core@1.2.4/dist/index.js';
highlightAll();
</script>${html}`;

	// replace <pre> with <pre class=shj-lang-{{lang}}
	const lang = detectLanguage(markdown);
	html = html.replace(/<pre>/g, `<pre class='shj-lang-${lang}'>`);

	return html;
}
