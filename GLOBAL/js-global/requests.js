// Back4app requests
export async function getRequest() {
  const url = back4app.endpoints.crud;
  const headers = back4app.info.headers;

  const data = await makeHttpRequest(url, 'GET', headers);
  return data;
}

export async function updateRequest(bodyObj) {
  const url = back4app.endpoints.crud;
  const headers = back4app.info.headers;

  return makeHttpRequest(url, 'PUT', headers, bodyObj);
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
      throw new Error(error);
    }

    const data = await res.json();

    return data;

  } catch (err) {
    console.log(options.method);
    console.log('########');
    console.log(err);
    console.log(err.error);
    console.log(JSON.stringify(err));

    alert('Грешка! >>> F12 >>> View console log.');
  }
}

// IMPORTS
import * as back4app from "../js-global/api/back4appApi/back4app.js";
