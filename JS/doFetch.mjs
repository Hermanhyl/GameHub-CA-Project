export async function doFetch(url, options = {}) {
    try {
        const headers = {
            'content-Type': 'application/json',
        };
        const combienedOptions = {headers, ...options };
        const response = await fetch(url, combienedOptions)
        const json =  await response.json();
        return json;
    } catch (error) {
        throw error;
    } finally {
        // remember to fix
    }
}