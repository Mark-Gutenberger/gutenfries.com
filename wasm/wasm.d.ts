/* tslint:disable */
/* eslint-disable */
/**
 * returns a random color from the tailwind css v2 palette
 *
 * ## Example:
 * ```
 * let color = get_random_color();
 * ```
 * output: `blue`
 * @returns {string}
 */
export function random_color(): string;
/**
 * returns a random shade from the tailwind css v2 palette
 *
 * ## Example:
 * ```
 * let shade = get_random_shade();
 * ```
 * output: `600`
 * @returns {string}
 */
export function random_shade(): string;
/**
 * returns a random dark shade from the tailwind css v2 palette
 * ## Example:
 * ```
 * let shade = random_shade_dark();
 * ```
 * output: `800`
 * ## Example:
 * ```
 * let shade = random_shade_dark();
 * ```
 * output: `900`
 * @returns {string}
 */
export function random_shade_dark(): string;
/**
 * returns a random light shade from the tailwind css v2 palette
 * ## Example:
 * ```
 * let shade = random_shade_light();
 * ```
 * output: `200`
 * ## Example:
 * ```
 * let shade = random_shade_light();
 * ```
 * output: `500`
 * @returns {string}
 */
export function random_shade_light(): string;
/**
 * generates a random tw color from the tailwind css v2 palette
 *
 * ## Example:
 * ```
 * let color = random_tw_color();
 * ```
 * output: `blue-600`
 * @returns {string}
 */
export function random_tw_color(): string;
/**
 * generates a random dark tw color from the tailwind css v2 palette
 *
 * ## Example:
 * ```
 * let color = random_tw_color_dark();
 * ```
 * output: `blue-600`
 * @returns {string}
 */
export function random_tw_color_dark(): string;
/**
 * generates a random light tw color from the tailwind css v2 palette
 *
 * ## Example:
 * ```
 * let color = random_tw_color_light();
 * ```
 * output: `blue-600`
 * @returns {string}
 */
export function random_tw_color_light(): string;
/**
 * generates ```n``` random tw colors from the tailwind css v2 palette, where ```n``` is the
 * first argument
 * ## Arguments:
 * * ```n``` - the number of colors to generate
 *
 * * ```tol``` - the tolerance of the generated colors
 *
 * ## Example:
 * ```
 * let colors = random_tw_colors(5);
 * ```
 * output: `["blue-600", "indigo-700", "pink-800", "purple-900", "red-500"]`
 * ## Example:
 * ```
 * let colors = random_tw_colors(1);
 * ```
 * output: `["blue-600"]`
 * @param {number} n
 * @param {number} tolerance
 * @returns {Array<any>}
 */
export function random_tw_colors(n: number, tolerance: number): Array<any>;
/**
 * @param {string} name
 */
export function greet(name: string): void;
/** */
export function run(): void;
