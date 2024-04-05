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
 *         "description": "example_description"
 *     },
 *     "example_id_2": {
 *         "title": "example_title_2",
 *         "description": "example_description_2"
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
 *     description: "example_description"
 * },
 * {
 *     id: "example_id_2",
 *     title: "example_title_2",
 *     description: "example_description_2"
 * }
 * ]
 * ```
 */
function parseSheets(json: string): Sheet[] {
	const sheets: Sheet[] = [];
	const obj = JSON.parse(json);
	for (const id in obj) {
		const sheet = obj[id];
		sheets.push({
			id,
			title: sheet.title,
			description: sheet.description,
		});
	}

	return sheets;
}

export { listSheets };
export type { Sheet };
