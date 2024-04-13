import { ComparerToStoredComparer } from 'https://deno.land/x/ts_morph@21.0.1/common/ts_morph_common.js';

/**
 * Data type for a sheet
 */
interface Sheet {
	/**
	 * ID of the sheet
	 */
	id: string;
	/**
	 * The title of the sheet
	 */
	title: string;
	/**
	 * Brief description
	 */
	description: string;
	/**
	 * Relavant tags
	 */
	tags?: string[];
	/**
	 * Date of publish
	 */
	date: string;
}

/**
 * Reads sheets from json file and returns a `Promise<Sheet[]>`
 * If the file does not exist, returns [], and an error is thrown
 * @returns `Promise<Sheet[]>`
 */
async function listSheets(): Promise<Sheet[]> {
	let text: string;
	try {
		text = await Deno.readTextFile('./static/sheets.json');
	} catch (e) {
		if (e instanceof Deno.errors.NotFound) {
			return [];
		}
		console.error({ e });
		throw e;
	}
	try {
		return parseSheets(text);
	} catch (e) {
		console.error({ e });
		throw e;
	}
}

/**
 * Parses the JSON string and returns an array of `Sheet`
 * @param json JSON string
 * @returns `Sheet[]`
 * ```json
 * {
 *     "example_id": {
 *         "title": "example_title",
 *         "description": "example_description",
 *         "tags": ["example_tag_1", "example_tag_2"],
 *         "date": "12-31-2021"
 *     },
 *     "example_id_2": {
 *         "title": "example_title_2",
 *         "description": "example_description_2",
 *         "tags": ["example_tag_1", "example_tag_2"]
 *         "date": "1-29-1995"
 *     }
 * }
 * ```
 * ```ts
 * const sheets = parseSheets(_sheets);
 * console.log(sheets);
 * ```
 * ```ts
 * [
 * {
 *     id: "example_id",
 *     title: "example_title",
 *     description: "example_description",
 *     tags: ["example_tag_1", "example_tag_2"]
 *     date: "12-31-2021"
 * },
 * {
 *     id: "example_id_2",
 *     title: "example_title_2",
 *     description: "example_description_2",
 *     tags: ["example_tag_1", "example_tag_2"]
 *     date: "1-29-1995"
 * }
 * ]
 * ```
 */
function parseSheets(json: string): Sheet[] {
	const sheets: Sheet[] = [];
	const obj = JSON.parse(json);
	for (const id in obj) {
		sheets.push({
			id,
			title: obj[id].title,
			description: obj[id].description,
			tags: obj[id].tags,
			date: obj[id].date,
		});
	}

	return sheets;
}

export { listSheets };
export type { Sheet };
