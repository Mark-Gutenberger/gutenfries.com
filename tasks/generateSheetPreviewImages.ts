import { listSheets } from '@/utils/sheets.ts';
import { Sheet } from '@/utils/sheets.ts';
import puppeteer from 'pptr';
import { Image } from 'imagescript';

/**
 * generates the images for the sheet previews
 * ONLY runs server-side, before the page is rendered
 * @param sheets
 * @returns `Promise<void>`
 */
async function generateSheetPreviewImages(sheets: Sheet[]): Promise<void> {
	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/google-chrome',
	});

	console.log('Generating sheet preview images...');

	let i = 0;
	for (const sheet of sheets) {
		const xofy = `[image ${i + 1} of ${sheets.length}]`;

		const page = await browser.newPage();
		// set page size to 8.5 x 11 aspect (PDF)
		await page.setViewport({
			width: 8.5 * 112,
			height: 11 * 112,
		});

		console.log(`${xofy} Rendering page...`);
		await page.goto(
			`https://drive.google.com/file/d/${sheet.id}/preview`,
		);

		console.log(`${xofy} Taking screenshot...`);
		await page.screenshot({
			path: `./static/images/sheet_images/${sheet.id}.png`,
		});

		// crop & adjust the image
		console.log(`${xofy} Cropping image...`);
		const imgBin = await Deno.readFile(`./static/images/sheet_images/${sheet.id}.png`);
		const img = await Image.decode(imgBin);
		// crop to size
		const cropped_rough = img.crop(
			// remove (x, y): 136, 176
			136 / 2, /* (EXCESS_WIDTH / 2) */
			12 / 2, /* (EXCESS_HEIGHT / 2) */
			8.5 * 96, /* (ASPECT * WIDTH_MULT) */
			(11 * 96) - 8, /* (( ASPECT * HEIGHT_MULT ) - EXCESS_PADDING ) */
		);
		// remove pading from all sides
		const cropped = cropped_rough.crop(
			16 / 2, /* (EXCESS_PADDING / 2) */
			12 / 2, /* (EXCESS_PADDING / 2) */
			(8.5 * 96) - 16, /* (( ASPECT * WIDTH_MULT ) - EXCESS_PADDING ) */
			(11 * 96) - 24, /* (( ASPECT * HEIGHT_MULT ) - EXCESS_PADDING ) */
		);

		const resized = cropped.resize(8.5 * 96, 11 * 96);

		console.log(`${xofy} Saving image...`);
		const encoded = await resized.encode();
		await Deno.writeFile(`./static/images/sheet_images/${sheet.id}.png`, encoded);

		i += 1;
	}

	await browser.close();

	return;
}

const sheets = await listSheets();
generateSheetPreviewImages(sheets);
