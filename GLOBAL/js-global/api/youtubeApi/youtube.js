const host = 'https://youtube.googleapis.com/youtube/v3';
const channelId = 'UCS3ImmFAklu-KGOi7-Yn5EQ';
const maxResults = 50;
const query = '%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4';
const apiKey = 'AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY';

const search = `/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&q=${query}&type=video&key=${apiKey}&pageToken=`;
// ex. Query string: 'search?part=snippet&channelId=UCS3ImmFAklu-KGOi7-Yn5EQ&maxResults=100&order=date&q=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4&type=video&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken='

// FUNCTIONS
export async function getYoutubeData() {
  let nextPageToken = '';
  const result = [];


  while (nextPageToken !== undefined) {

    const data = await makeHttpRequest(host + search + nextPageToken, 'GET');

    nextPageToken = data.nextPageToken;

    for (const item of data.items) {
      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const description = item.snippet.description;
      const thumbnail = item.snippet.thumbnails.medium;
      const publishTime = item.snippet.publishTime;

      result.push({ videoId, title, description, thumbnail, publishTime });
    }

  }

  // console.log(result);

  return result;
}

export async function updateYoutubeData() {
  // ! temporary disabled
  const data = await getYoutubeData();
  console.log(data);
  // !

  // ! temporary enabled
  // console.log('###########');
  // console.log(testYoutubeData);


  // const dataObj = {
  //   Youtube: testYoutubeData
  // };
  // !


  const dataObj = {
    Youtube: data
  };

  await updateRequest(dataObj);

  alert('... Данните са синхронизирани ...');
}


// IMPORTS
import { makeHttpRequest, updateRequest } from "../../requests.js";
import { testYoutubeData } from './test-youtube-data.js';
