import * as api from './api-internal.js';

const endpoints = {
    prophets: '/site/static/data-static/data-prophet.json',
};

// videoId, title, description, thumbnail, publishTime


export async function getProphetStaticData() {
    return api.get(endpoints.prophets);
}
