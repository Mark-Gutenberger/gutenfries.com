export async function readFile(path: string): Promise<string | null> {
	let text: string;
	try {
		text = await Deno.readTextFile(path);
	} catch (err) {
		if (err instanceof Deno.errors.NotFound) {
			return null;
		}
		throw err;
	}
	return text;
}
