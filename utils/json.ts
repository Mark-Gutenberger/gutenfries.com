/**
 * Reads JSON from a given file path and returns it as a parsed `Promise<Record<string, unknown>>`
 */
async function readJson(filePath: string): Promise<Record<string, unknown>> {
	try {
		return JSON.parse(await Deno.readTextFile(filePath));
	} catch (e) {
		console.error({ e });
		return e as Record<string, unknown>;
	}
}

/**
 * Writes JSON to a given file path, given a file path and an object to write
 */
async function writeJson(filePath: string, content: Record<string, unknown>): Promise<void> {
	try {
		await Deno.writeTextFile(filePath, JSON.stringify(content));
	} catch (e) {
		console.error({ e });
	}
}

export { readJson, writeJson };
