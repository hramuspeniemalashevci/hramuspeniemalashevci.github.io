const redirectPathOnError = '/admin';
const back4appBrowserStorageItemName = back4app.back4appBrowserStorageItemName;

// Execute functions
initialContentLoad();

// References
const textAreaElem = document.getElementById('notices');
const noticesSection = document.getElementById('notices-section');
const previewSection = document.getElementById('preview-section');
const noticesPreviewContainer = document.getElementById('notices-preview-container');
const loaderDiv = document.querySelector('.loader');

// Attach event-listeners
document.getElementById('logout-bottom-btn').addEventListener('click', logoutAllUserSessions);

document.getElementById('clear-btn').addEventListener('click', clearTextarea);
document.getElementById('preview-btn').addEventListener('click', renderPreview);
document.getElementById('back-to-form-btn').addEventListener('click', hidePreviewSection);
document.getElementById('confirm-send-btn').addEventListener('click', sendNewData);

// FUNCTIONS
async function initialContentLoad() {
    browserStorageValidation(back4appBrowserStorageItemName, redirectPathOnError, 'user');

    const serverData = await getRequest();

    // Back4App server
    const data = serverData.NoticesHome[0].content;

    loaderDiv.style.display = 'none';
    textAreaElem.value = data;
}

// LocalStorage & others functions
function clearTextarea(ev) {
    ev.preventDefault();
    textAreaElem.value = '';
}

function showPreviewSection() {
    noticesSection.style.display = 'none';
    previewSection.style.display = 'block';
    window.location.href = '#preview-section';
}

function hidePreviewSection() {
    noticesSection.style.display = 'block';
    previewSection.style.display = 'none';
    window.location.href = '#notices-section';
}

function renderPreview() {
    const enteredText = textAreaElem.value;
    const contentArr = enteredText.split('\n').map(el => el.trim());
    const fragmentTextContent = document.createDocumentFragment();

    contentArr.forEach(el => {
        if (el === '') {
            const br = elementCreate('br');
            fragmentTextContent.appendChild(br);
        } else {
            const span = elementCreate('span', { style: 'display:block;', class: 'li' }, el);
            fragmentTextContent.appendChild(span);
        }
    });

    noticesPreviewContainer.replaceChildren(fragmentTextContent);

    showPreviewSection()
}

async function sendNewData() {
    const enteredText = textAreaElem.value.trim();

    // Back4App server
    const requestBodyObj = {
        "NoticesHome": [
            {
                "content": enteredText
            }
        ]
    };

    try {
        await updateRequest(requestBodyObj);

        alert('... Данните са изпратени ...');
        // window.location.href = '/';

    } catch (error) {
        console.log(error);

        removeAllBack4appUsersessionData()
        window.location.replace('/admin');
    }
}


// IMPORTS
import * as back4app from "../../GLOBAL/api/back4appApi/back4app.js";
import { browserStorageValidation, removeAllBack4appUsersessionData } from "../../GLOBAL/js-global/browser-storage.js";
import { getRequest, updateRequest } from "../../GLOBAL/js-global/requests.js";
import { elementCreate } from "../../GLOBAL/js-global/dom.js";
import { logoutAllUserSessions } from '../../GLOBAL/js-global/requests-users.js';

