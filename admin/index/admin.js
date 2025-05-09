const redirectPathOnSuccess = '/admin/menu';
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
    browserStorageValidation(back4appBrowserStorageItemName, redirectPathOnSuccess, 'login');
    usernameInputElem.focus();
}

async function sendCredentials() {
    const credentialsObj = getFormData(formElem);

    try {
        const res = await loginRequest(credentialsObj);
        return res;

    } catch (error) {
        console.log(error);
        throw error
    }

}

async function onFormSubmit(ev) {
    ev.preventDefault();

    try {
        const res = await sendCredentials();

        const sessionToken = res.sessionToken;
        const objectId = res.objectId;

        const userResponse = confirm('Желаете ли Вашите потребителско име и парола да бъдат трайно запаметени?');
        const storageType = userResponse ? 'local' : 'session';

        setBrowserStorageItem(back4appBrowserStorageItemName, { sessionToken, objectId }, storageType);
        window.location.replace(redirectPathOnSuccess);

    } catch (error) {
        console.log(error);

        alert('Грешка в заявката:\n- Грешни потребителски данни ...\n- Моля, уверете се, че пишете на латиница и попълнете потребителските си данни отново ...');
        removeAllBack4appUsersessionData();

        location.reload();
    }

}


// IMPORTS
import * as back4app from "../../GLOBAL/api/back4appApi/back4app.js";
import { setBrowserStorageItem, browserStorageValidation, removeAllBack4appUsersessionData } from "../../GLOBAL/js-global/browser-storage.js";
import { getFormData } from "../../GLOBAL/js-global/forms.js";
import { loginRequest } from "../../GLOBAL/js-global/requests-users.js";
