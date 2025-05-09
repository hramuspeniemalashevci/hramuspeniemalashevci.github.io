// Back4app requests
export async function getRequest() {
  const url = back4app.endpoints.crud;
  const headers = back4app.info.headers;

  try {
    const data = await makeHttpRequest(url, 'GET', headers);
    return data;

  } catch (error) {
    console.log(error);
    console.log(JSON.parse(error));

    alert('"GET" request failed!');

    throw error;
  }

}

export async function updateRequest(bodyObj) {
  const url = back4app.endpoints.crud;
  const headers = back4app.info.headers;

  const browserStorageItemName = back4app.back4appBrowserStorageItemName;
  headers['X-Parse-Session-Token'] = getUserSessionToken(browserStorageItemName);

  try {
    const data = await makeHttpRequest(url, 'PUT', headers, bodyObj);
    return data;

  } catch (error) {
    console.log(error);

    alert('Изтекла потребителска сесия ...\nМоля, попълнете потребителските си данни отново ...');

    throw error;
  }

}


// General requests
export async function makeHttpRequest(url, methodStr, headersObj, bodyObj) {
  const options = {
    method: methodStr,
    headers: headersObj
  };

  if (bodyObj) {
    options['body'] = JSON.stringify(bodyObj);
  }

  try {
    const res = await fetch(url, options);

    if (res.ok !== true) {
      const error = await res.json();
      throw error;
    }

    const data = await res.json();

    return data;

  } catch (error) {

    if (error.error) {
      const errorObj = error.error;
      console.log('YouTube >>> ', errorObj.code, errorObj.message);

    } else {
      console.log(error);
    }

    throw error;
  }
}

// IMPORTS
import * as back4app from "../api/back4appApi/back4app.js"; import { getUserSessionToken } from './browser-storage.js';

