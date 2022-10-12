import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

const instance = autoprefixer(
	{
		overrideBrowserslist: [
			'last 2 versions',
			'ie >= 11',
			'Firefox ESR',
			'not dead',
		],
	},
);

const CSSFiles: string[] = [
	'./static/styles/global.css',
	'./static/resume/resume.css',
];

CSSFiles.map(async (file) => {
	const css = await Deno.readTextFile(file);
	const APCSS = postcss(
		[instance],
	).process(css);
	const result = await APCSS;
	// remove file extension
	const fileName = file.split('.').slice(0, -1).join('.');
	// minify
	const minified = result.css.replace(/\s+/g, ' ').trim();
	// write to file
	await Deno.writeTextFile(`${fileName}.min.css`, minified);
});
