const redirectPathOnError = '/admin';
const back4appBrowserStorageItemName = back4app.back4appBrowserStorageItemName;

// Refs
const noticesHomeEditBtn = document.querySelector('#noticesHome-edit-btn');

const noticesSectionEditBtn = document.querySelector('#noticesSection-edit-btn');

const scheduleEditBtn = document.querySelector('#schedule-edit-btn');
const youtubeSyncBtn = document.querySelector('#youtube-sync-btn');
const lastYoutubeUpdateDiv = document.querySelector('#last-youtube-update');
const logoutBtn = document.querySelector('#logout-btn');

// Event-listeners
noticesHomeEditBtn.addEventListener('click', onNoticesHomeEditClick);

noticesSectionEditBtn.addEventListener('click', onNoticesSectionEditClick);

scheduleEditBtn.addEventListener('click', onScheduleEditClick);
youtubeSyncBtn.addEventListener('click', onYoutubeSyncClick);
logoutBtn.addEventListener('click', () => logoutAllUserSessions());

// window.onload = onPageLoad;
onPageLoad();

// FUNCTIONS
// Event-Handlers
async function onPageLoad() {
  browserStorageValidation(back4appBrowserStorageItemName, redirectPathOnError, 'user');
  await getLastYoutubeUpdate();
}

function onNoticesHomeEditClick() {
  window.location.href = '../notices-homePage';
}

function onNoticesSectionEditClick() {
  window.location.href = '../notices-pageSection';
}

function onScheduleEditClick() {
  window.location.href = '../schedule';
}

async function getLastYoutubeUpdate() {
  const data = await getRequest();
  const dateObj = data.YoutubeLastUpdateObject;

  const nowObj = new Date();
  const lastUpdateDateObj = dateObj.DateObject;
  const lastUpdateDateString = dateObj.YouTubeLastUpdate;

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  // const diffInTime = date2.getTime() - date1.getTime();
  const diffInTime = nowObj - new Date(lastUpdateDateObj);

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  lastYoutubeUpdateDiv.style.color = 'initial';
  lastYoutubeUpdateDiv.textContent = `${lastUpdateDateString} (преди ${diffInDays} дни)`;
}

async function onYoutubeSyncClick() {
  // console.log('... Youtube sync ...');
  try {
    await updateYoutubeData();

  } catch (error) {
    throw error;
  }
}


// IMPORTS
import * as back4app from "../../GLOBAL/api/back4appApi/back4app.js";
import { browserStorageValidation } from "../../GLOBAL/js-global/browser-storage.js";
import { getRequest } from '../../GLOBAL/js-global/requests.js';
import { logoutAllUserSessions } from '../../GLOBAL/js-global/requests-users.js';
import { updateYoutubeData } from '../../GLOBAL/api/youtubeApi/youtube.js';
import { version } from '../version.js';