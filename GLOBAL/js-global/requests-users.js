// * Requests - users functions
export async function loginRequest(bodyObj) {
  const url = back4app.endpoints.users.logIn;
  const headers = back4app.info.headers;
  headers['X-Parse-Revocable-Session'] = '1';

  const data = await makeHttpRequest(url, 'POST', headers, bodyObj);
  return data;
}

export async function logoutRequest(sessionToken) {
  const url = back4app.endpoints.users.logout;
  const headers = back4app.info.headers;
  headers['X-Parse-Session-Token'] = sessionToken;

  const data = await makeHttpRequest(url, 'POST', headers);

  return data;
}

export async function logoutAllUserSessions() {
  const sessionToken = getUserSessionToken(back4app.back4appBrowserStorageItemName);
  const userSessionsData = await getAllUserSessions(sessionToken);

  if (userSessionsData) {
    for (const elem of userSessionsData.results) {
      const currentSessionToken = elem.sessionToken;

      try {
        await logoutRequest(currentSessionToken);

      } catch (error) {
        console.log(error);
        alert('Изтекла потребителска сесия! Моля, опитайте отново ...');
        removeBrowserStorageItem(back4app.back4appBrowserStorageItemName, 'session');
        removeBrowserStorageItem(back4app.back4appBrowserStorageItemName, 'local');

        // location.reload();
        window.location.replace('/admin');
        throw error;
      }

    }

  }

  removeBrowserStorageItem(back4app.back4appBrowserStorageItemName, 'session');
  removeBrowserStorageItem(back4app.back4appBrowserStorageItemName, 'local');

  // location.reload();
  window.location.replace('/admin');
}

export async function getAllUserSessions(sessionToken) {
  const url = back4app.endpoints.session;
  const headers = back4app.info.headers;
  headers['X-Parse-Session-Token'] = sessionToken;

  const data = await makeHttpRequest(url, 'GET', headers);
  return data;
}


// IMPORTS
import * as back4app from "../../GLOBAL/api/back4appApi/back4app.js";
import { makeHttpRequest } from "../../GLOBAL/js-global/requests.js";
import { getUserSessionToken, removeBrowserStorageItem } from './browser-storage.js';

