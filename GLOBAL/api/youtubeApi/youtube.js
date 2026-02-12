const host = 'https://youtube.googleapis.com/youtube/v3/search';
const host_2 = 'https://www.googleapis.com/youtube/v3/search';
const channelId_NewChannel = 'UC2BiSiWSIhEQZ_lxiSuTWpw';
const channelId_OldChannel = 'UCS3ImmFAklu-KGOi7-Yn5EQ';

const maxResults = '50';
// const query = '%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4';
// const query = '%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7C%D0%BF%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4';
const query = '%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9';
const apiKey = 'AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY';

// ! publishedAfter
// ! publisheBefore
// ! The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).

const search_NewChannel = `?part=snippet&channelId=${channelId_NewChannel}&maxResults=${maxResults}&order=date&q=${query}&type=video&key=${apiKey}&pageToken=`;
const search_OldChannel = `?part=snippet&channelId=${channelId_OldChannel}&maxResults=${maxResults}&order=date&q=${query}&type=video&key=${apiKey}&pageToken=`;

// ex. Query string: 'search?part=snippet&channelId=UCS3ImmFAklu-KGOi7-Yn5EQ&maxResults=100&order=date&q=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4&type=video&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken='

// Refs
const lastYoutubeUpdateDiv = document.querySelector('#last-youtube-update');

// FUNCTIONS
async function updatingLastYoutubeUpdateDate() {

  const currentDate = getDateAsText();
  const dataObj = {
    'YouTubeLastUpdate': currentDate
  };

  try {
    const sentData = await updateRequest(dataObj);
    console.log(sentData);

    lastYoutubeUpdateDiv.style.color = 'initial';
    lastYoutubeUpdateDiv.textContent = `(Последно обновяване: ${currentDate})`;

  } catch (error) {
    console.log(error);

    alert('Date updating failed!');
  }
}

async function getYoutubeData(host, search) {
  // ! Dummy data
  // return dummyYoutubeData;

  let nextPageToken = '';
  const result = [];


  try {
    while (nextPageToken !== undefined) {

      const data = await makeHttpRequest(host + search + nextPageToken, 'GET');

      nextPageToken = data.nextPageToken;
      // !
      // console.log('Next token >>> ', nextPageToken);
      console.log('Next token >>> ', data);


      for (const item of data.items) {
        const videoId = item.id.videoId;
        const title = item.snippet.title;
        const description = item.snippet.description;
        const thumbnail = item.snippet.thumbnails.medium;
        const publishTime = item.snippet.publishTime;

        result.push({ videoId, title, description, thumbnail, publishTime });
      }

    }

    return result;

  } catch (error) {
    const errorObj = error.error;
    console.log(errorObj.code, errorObj.message);


    alert('Грешка при получаването на YouTube данните!');
    // ?
    throw error;
    // return null;
  }

}

export async function updateYoutubeData() {
  lastYoutubeUpdateDiv.textContent = `... Данните се синхронизират ...`;
  lastYoutubeUpdateDiv.style.color = 'rgb(218, 67, 67)';

  try {
    const data_NewChannel = await getYoutubeData(host_2, search_NewChannel);
    // !
    console.log('YouTube data - NEW >>>', data_NewChannel);

    const data_OldChannel = await getYoutubeData(host_2, search_OldChannel);
    // !
    console.log('YouTube data - OLD >>>', data_OldChannel);

    const data = data_NewChannel.concat(data_OldChannel);

    const dataObj = {
      Youtube: data
    };

    try {
      const sentData = await updateRequest(dataObj);
      // console.log(sentData);

      await updatingLastYoutubeUpdateDate();
      alert('... Данните са синхронизирани ...');

    } catch (error) {
      console.log(error);
      // alert('Проблем при синхронизиране на данните! Моля, опитайте отново ...');
      // sessionStorage.removeItem(back4appBrowserStorageItemName);
      // localStorage.removeItem(back4appBrowserStorageItemName);
      // window.location.reload();
      throw error;
    }

  } catch (error) {
    console.log(error);
    throw error
  }

}


// IMPORTS
import { getDateAsText } from '../../js-global/date.js';
// IMPORTS
import { makeHttpRequest, updateRequest } from "../../js-global/requests.js";
import { back4appBrowserStorageItemName } from '../back4appApi/back4app.js';
