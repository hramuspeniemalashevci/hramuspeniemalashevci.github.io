// * Browser - sessionStorage functions
export function browserStorageValidation(browserStorageItemName, redirectTarget, pageType) {
  let browserStorageData = getBrowserStorageItem(browserStorageItemName, 'local');

  if (browserStorageData === null) {
    browserStorageData = getBrowserStorageItem(browserStorageItemName, 'session');
  }

  if (pageType === 'login') {

    if (browserStorageData !== null) {
      window.location.replace(redirectTarget);
      // return browserStorageData;
    }

  } else if (pageType === 'user') {

    if (browserStorageData === null) {
      window.location.replace(redirectTarget);
      // return null;
    }

  }

  if (getComputedStyle(document.body).display === 'none') {
    document.body.style.display = 'block';
  }

  return browserStorageData;
}

export function getUserSessionToken(browserStorageItemName) {
  let data = getBrowserStorageItem(browserStorageItemName, 'local');

  if (data === null) {
    data = getBrowserStorageItem(browserStorageItemName, 'session');
  }

  if (data) {
    return data['sessionToken'];

  } else {
    console.log('No user-session data!');
    return null;
  }

}

export function getBrowserStorageItem(itemName, storageType) {
  let itemData = null;

  if (storageType === 'session') {
    itemData = sessionStorage.getItem(itemName);

  } else if (storageType === 'local') {
    itemData = localStorage.getItem(itemName);
  }

  return itemData === null ? null : JSON.parse(itemData);
}

export function setBrowserStorageItem(itemName, dataObj, storageType) {
  if (storageType === 'session') {
    sessionStorage.setItem(itemName, JSON.stringify(dataObj));

  } else if (storageType === 'local') {
    localStorage.setItem(itemName, JSON.stringify(dataObj));
  }

}

export function removeBrowserStorageItem(itemName, storageType) {
  if (storageType === 'session') {
    sessionStorage.removeItem(itemName);

  } else if (storageType === 'local') {
    localStorage.removeItem(itemName);
  }

}
