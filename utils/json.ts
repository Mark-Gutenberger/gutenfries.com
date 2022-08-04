async function readJson(filePath: string): Promise<Record<string, unknown>> {
	try {
		return JSON.parse(await Deno.readTextFile(filePath));
	} catch (e) {
		console.log(filePath + ': ' + e.message);
		return e;
	}
}

// deno-lint-ignore no-explicit-any
async function writeJson(filePath: string, o: any): Promise<void> {
	try {
		await Deno.writeTextFile(filePath, JSON.stringify(o));
	} catch (e) {
		console.log(filePath + ': ' + e.message);
		return e;
	}
}

export { readJson, writeJson };
