/**
 * Work around this problem: https://github.com/sveltejs/kit/issues/3638
 *
 *
 *
 *
 */
export async function get() {
    throw Error('errorInShadowEndpoint');
    return {status: 200, body: {data: 'ok'}};
}
