/**
 * Work around this problem: https://github.com/sveltejs/kit/issues/3638
 *
 *
 *
 *
 */
export function handleError({error, event}) {
    console.log(`handleError called with error ${error}`);
}
