const hosts = [
  'https://youtube.googleapis.com/youtube/v3/search',
  'https://www.googleapis.com/youtube/v3/search'
];
const queries = [
  '%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4',
  '%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7C%D0%BF%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4',
  '%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9'
];

// TODO Hide api keys / Get api keys from Back4app
const apiKeys = [
  'AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY',
  'AIzaSyAcAar2-11JPi8NcfjgMn0w7gnJUdeyCsU',
  'AIzaSyAZcY1abBw3emPWEFzuoEwwgfUbAuRUsuw',
  'AIzaSyD6E_bTF4qvBn3dLMhf57tr8EaqaYl9n_s'
];

const host = hosts[1];
const channelId_NewChannel = 'UC2BiSiWSIhEQZ_lxiSuTWpw';
const channelId_OldChannel = 'UCS3ImmFAklu-KGOi7-Yn5EQ';
const maxResults = '25';
const publishedAfter = getDate_n_DaysBeforeAsRFC339(10);
const query = queries[0];
const apiKey = apiKeys[1];

const search_NewChannel = `?part=snippet&channelId=${channelId_NewChannel}&maxResults=${maxResults}&publishedAfter=${publishedAfter}&order=date&q=${query}&type=video&key=${apiKey}&pageToken=`;
const search_OldChannel = `?part=snippet&channelId=${channelId_OldChannel}&maxResults=${maxResults}&publishedAfter=${publishedAfter}&order=date&q=${query}&type=video&key=${apiKey}&pageToken=`;

// * ex. Query string: 's?part=snippet&channelId=UCS3ImmFAklu-KGOi7-Yn5EQ&maxResults=50&publishedBefore=2026-07-10T18:56:02.742Z&order=date&q=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4&type=video&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken='

// Refs
const lastYoutubeUpdateDiv = document.querySelector('#last-youtube-update');

// FUNCTIONS
async function getNewChannelData() {
  try {
    const data_NewChannel = await getYoutubeData(host, search_NewChannel);
    // !
    console.log('YouTube data - NEW channel >>>', data_NewChannel);
    return data_NewChannel;

  } catch (error) {
    console.log('New channel request error:');
    throw error;
  }
}

async function getOldChannelData() {
  try {
    const data_OldChannel = await getYoutubeData(host, search_OldChannel);
    // !
    console.log('YouTube data - OLD channel >>>', data_OldChannel);
    return data_OldChannel;

  } catch (error) {
    console.log('Old channel request error:');
    throw error;
  }
}


async function getYoutubeData(host, search) {
  // ! Dummy data
  // ! return dummyYoutubeData;

  let nextPageToken = '';
  const result = [];
  // let counter_onRequesterror = 0;


  try {
    while (nextPageToken !== undefined) {

      const data = await makeHttpRequest(host + search + nextPageToken, 'GET');

      if (data) {
        nextPageToken = data.nextPageToken;
      }

      // !
      console.log('Next token >>> ', nextPageToken);
      // console.log('Next token >>> ', data);


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
    console.log(error);
    const errorCode = error.error.code;
    console.log('Error code >>> ', errorCode);

    // alert('Грешка при получаването на YouTube данните!');
    throw error;
  }

}

async function getCloudlData() {
  try {
    const data_Cloud = await getRequest();
    // !
    // console.log('Cloud data >>>', data_Cloud.Youtube);
    return data_Cloud.Youtube;

  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function updateYoutubeData() {
  lastYoutubeUpdateDiv.textContent = `... Данните се синхронизират ...`;
  lastYoutubeUpdateDiv.style.color = 'rgb(218, 67, 67)';

  let counterNewVideosInsertions = 0;

  try {
    // Back4app cloud request
    const cloudData = await getCloudlData();
    const cloudUniquePropsObj = setUniqueKeysObject(cloudData);

    // *  Manual data
    // const data_NewChannel = newChannelManualData;
    // const data_OldChannel = oldChannelManualData;

    // * Youtube fresh data request
    const data_NewChannel = await getNewChannelData();
    // ! Temporary excluded
    // const data_OldChannel = await getOldChannelData();

    // ! Temporary excluded
    // const data_YoutubeFinal = data_NewChannel.concat(data_OldChannel);
    const data_YoutubeFinal = data_NewChannel;

    // Loop over Youtube fresh final data and fill missing data to cloudData array
    data_YoutubeFinal.forEach(el => {
      if (cloudUniquePropsObj.hasOwnProperty(el.videoId) === false) {
        cloudData.push(el);
        counterNewVideosInsertions++;
      }
    });

    // Sort final data
    const finalSortedData = sortArrByDate(cloudData, 'descending');

    const dataObj = {
      Youtube: finalSortedData
    };

    try {
      const sentData = await updateRequest(dataObj);
      // console.log(sentData);

      await updatingLastYoutubeUpdateDate();
      alert(`... Данните са синхронизирани ...\nДобавени нови видеа (брой): ${counterNewVideosInsertions}\nНалични видеа (брой): ${cloudData.length}`);

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

async function updatingLastYoutubeUpdateDate() {

  const currentDate = getDateAsText();
  const dataObj = {
    'YouTubeLastUpdate': currentDate
  };

  try {
    const sentData = await updateRequest(dataObj);
    // console.log(sentData);

    lastYoutubeUpdateDiv.style.color = 'initial';
    lastYoutubeUpdateDiv.textContent = `${currentDate}`;

  } catch (error) {
    console.log(error);

    alert('Date updating failed!');
    throw error;
  }
}

// Helper FUNCTIONS
function getDate_n_DaysBeforeAsRFC339(numberOfDaysBefore) {
  const todayDate = new Date()
  todayDate.setDate(todayDate.getDate() - numberOfDaysBefore)
  const rfc339 = todayDate.toISOString();
  console.log(rfc339);
  return rfc339;
}

function sortArrByDate(arr, sortType) {
  // sortType >>> 'ascending' OR 'descending'
  const mappedArr = arr.map(el => {
    el.publishTime = new Date(el.publishTime)
    return el;
  });

  if (sortType === 'ascending') {
    return mappedArr.sort((a, b) => {
      return a.publishTime - b.publishTime;
    });

  } else if (sortType === 'descending') {
    return mappedArr.sort((a, b) => {
      return b.publishTime - a.publishTime;
    });

  } else {
    return null;
  }
}

function setUniqueKeysObject(arr) {
  const obj = {};

  for (const el of arr) {
    obj[el.videoId] = el;
  }

  return obj;
}


// IMPORTS
import { getDateAsText } from '../../js-global/date.js';
// IMPORTS
import { makeHttpRequest, updateRequest } from "../../js-global/requests.js";
import { back4appBrowserStorageItemName } from '../back4appApi/back4app.js';
import { getRequest } from '../../js-global/requests.js';
import { default as newChannelManualData } from "./newYoutubeChannel_staticData.js";
import { default as oldChannelManualData } from "./oldYoutubeChannel_staticData.js";