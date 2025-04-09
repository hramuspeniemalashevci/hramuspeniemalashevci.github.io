// Execute functions
localStorageCheck();
initialContentLoad();

// References
const textAreaElem = document.getElementById('notices');
const noticesSection = document.getElementById('notices-section');
const previewSection = document.getElementById('preview-section');
const noticesPreviewContainer = document.getElementById('notices-preview-container');

// Attach event-listeners
// document.getElementById('logout-top-btn').addEventListener('click', onLogout);
document.getElementById('logout-bottom-btn').addEventListener('click', onLogout);
document.getElementById('clear-btn').addEventListener('click', clearTextarea);
document.getElementById('preview-btn').addEventListener('click', renderPreview);
document.getElementById('back-to-form-btn').addEventListener('click', hidePreviewSection);
document.getElementById('confirm-send-btn').addEventListener('click', sendNewData);

// FUNCTIONS

// OnInitialLoad functions
function localStorageCheck() {
    const authData = localStorage.getItem('authData');

    if (authData !== '733fa9a1-26b6-490d-b299-21f120b2f53a') {
        window.location.replace('/admin-pages');
    }
}

async function initialContentLoad() {
    const serverData = await getRequest();

    // Back4App server
    const data = serverData.NoticesHome[0].content;

    textAreaElem.value = data;
}

// LocalStorage & others functions
function onLogout() {
    localStorage.removeItem('authData');
    window.location.replace('/admin-pages');
}

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

function sendNewData() {
    const enteredText = textAreaElem.value.trim();

    // Back4App server
    const requestBodyObj = {
        "NoticesHome": [
            {
                "content": enteredText
            }
        ]
    };

    updateRequest(requestBodyObj);
    alert('... Данните са изпратени ...');
    window.location.href = '/index.html';
}


// IMPORTS
import { getRequest, updateRequest } from "../../GLOBAL/js-global/requests.js";
import { elementCreate } from "../../GLOBAL/js-global/dom.js";
