/* tslint:disable */
/* eslint-disable */
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
