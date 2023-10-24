/**
 * Reads a file from a given file path and returns it as `Promise<string>`
 * If the file does not exist, it returns `Promise<null>` and an error is thrown
 */
async function readFile(path: string): Promise<string | null> {
	let text: string;
	try {
		text = await Deno.readTextFile(path);
	} catch (e) {
		if (e instanceof Deno.errors.NotFound) {
			return null;
		}
		console.error({ e });
		throw e;
	}
	return text;
}

export { readFile };
