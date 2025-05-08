const redirectPath = './menu';
const back4appBrowserStorageItemName = back4app.back4appBrowserStorageItemName;

// Refs
const formElem = document.querySelector('#login-form');
const usernameInputElem = document.querySelector('#username-input');

// Event-listeners
formElem.addEventListener('submit', onFormSubmit);

window.onload = onPageLoad;

// FUNCTIONS
// Event-Handlers
function onPageLoad() {
    browserStorageValidation(back4appBrowserStorageItemName, redirectPath, 'login');
    usernameInputElem.focus();
}

async function onFormSubmit(ev) {
    ev.preventDefault();

    const credentialsObj = getFormData(formElem);

    const res = await loginRequest(credentialsObj);

    if (res === null) {
        alert('Грешка в заявката. Моля, уверете се, че пишете на латиница и попълнете потребителските си данни отново ...');
        removeBrowserStorageItem(back4appBrowserStorageItemName, 'session');
        removeBrowserStorageItem(back4appBrowserStorageItemName, 'local');
        location.reload();
    }

    const sessionToken = res.sessionToken;
    const objectId = res.objectId;

    const userResponse = confirm('Желаете ли Вашите потребителско име и парола да бъдат трайно запаметени?');
    const storageType = userResponse ? 'local' : 'session';

    setBrowserStorageItem(back4appBrowserStorageItemName, { sessionToken, objectId }, storageType);
    window.location.replace(redirectPath);
}


// IMPORTS
import * as back4app from "../../GLOBAL/api/back4appApi/back4app.js";
import { setBrowserStorageItem, removeBrowserStorageItem, browserStorageValidation } from "../../GLOBAL/js-global/browser-storage.js";
import { getFormData } from "../../GLOBAL/js-global/forms.js";
import { loginRequest } from "../../GLOBAL/js-global/requests-users.js";