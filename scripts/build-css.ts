import sass from 'denoscss';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

// compile sass to css

const compiler = sass(['styles']);

compiler.to_file({
	destDir: 'static/styles',
	format: 'compressed',
});

// autoprefix css

const instance = autoprefixer(
	{
		overrideBrowserslist: [
			'last 2 versions',
			'IE >= 10',
			'Firefox ESR',
			'Chrome > 19',
			'Opera 12',
			'Firefox > 19',
			'Android 2.3',
			'Android >= 4',
			'iOS >= 6',
			'Safari 16',
			'Safari 14',
			'Safari 15',
			'Edge 16',
			'Edge 17',
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
