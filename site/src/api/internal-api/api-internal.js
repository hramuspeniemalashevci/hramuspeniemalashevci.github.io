export async function get(url) {
    try {
        const res = await fetch(url)

        if (res.ok !== true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        return res.json();

    } catch (err) {
        alert(err.message);
        throw err;
    }
}
