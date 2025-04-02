const host = 'https://youtube.googleapis.com/youtube/v3';

export async function request(url) {
    try {
        const res = await fetch(host + url);

        if (res.ok !== true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        try {
            return await res.json();
        } catch (err) {
            return res;
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function get(url) {
    return request(url);
}
