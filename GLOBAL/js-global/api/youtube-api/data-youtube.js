import * as api from './api-youtube.js';

const channelId = 'UCS3ImmFAklu-KGOi7-Yn5EQ';
const maxResults = 5;
const query = '%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4';
const apiKey = 'AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY';

const search = `/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&q=${query}&type=video&key=${apiKey}&pageToken=`;
// ex. Query string: 'search?part=snippet&channelId=UCS3ImmFAklu-KGOi7-Yn5EQ&maxResults=100&order=date&q=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4&type=video&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken='

let nextPageToken = '';

// FUNCTIONS
export async function getYoutubeData() {
    if (nextPageToken === undefined) {
        return;
    }

    const data = await api.get(search + nextPageToken);

    nextPageToken = data.nextPageToken;

    const result = [];

    for (const item of data.items) {
        // console.log(item.id.videoId);
        // console.log(item.snippet.title);
        // console.log(item.snippet.description);
        // console.log(item.snippet.thumbnails.medium);
        // console.log(item.snippet.publishTime);

        const videoId = item.id.videoId;
        const title = item.snippet.title;
        const description = item.snippet.description;
        const thumbnail = item.snippet.thumbnails.medium;
        const publishTime = item.snippet.publishTime;

        result.push({ videoId, title, description, thumbnail, publishTime });
    }

    // console.log(data);

    console.log(result);
    return result;
}
