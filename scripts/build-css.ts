import sass from 'denoscss';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

const compiler = sass(['styles']);

compiler.to_file({
	destDir: 'static/styles',
	format: 'compressed',
});

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

// deno-lint-ignore prefer-const
let CSSFiles: string[] = [];

for await (const dirEntry of Deno.readDir('static/styles')) {
	if (dirEntry.isFile) {
		CSSFiles.push(`static/styles/${dirEntry.name}`);
	}
}

CSSFiles.map(async (file) => {
	const css = await Deno.readTextFile(file);
	const APCSS = postcss(
		[instance],
	).process(css);
	const result = await APCSS;
	await Deno.writeTextFile(file, result.toString());
});
