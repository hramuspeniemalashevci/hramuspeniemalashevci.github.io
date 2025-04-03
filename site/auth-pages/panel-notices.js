// Execute functions
localStorageCheck();
initialContentLoad();

// References
const textAreaElem = document.getElementById('notices');
const noticesSection = document.getElementById('notices-section');
const previewSection = document.getElementById('preview-section');
const noticesPreviewContainer = document.getElementById('notices-preview-container');

// Attach event-listeners
document.getElementById('logout-top-btn').addEventListener('click', onLogout);
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
        window.location.replace('/site/auth-pages/login.html');
    }
}

async function initialContentLoad() {
    const serverData = await getRequest();

    // SoftUni server
    // const data = serverData[0].content;

    // Back4App server
    const data = serverData.NoticesArr[0].content;

    textAreaElem.value = data;
}

// LocalStorage & others functions
function onLogout() {
    localStorage.removeItem('authData');
    window.location.replace('/site/auth-pages/login.html');
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

    // SoftUni server
    // const requestBodyObj = [
    //     {
    //         content: enteredText
    //     }
    // ];

    // Back4App server
    const requestBodyObj = {
        "NoticesArr": [
            {
                "content": enteredText
            }
        ]
    };

    updateRequest(requestBodyObj);
    alert('Данните са изпратени!');
    window.location.href = '/index.html';
}

// DOM functions
function elementCreate(elemType, attrObj, text) {
    const elem = document.createElement(elemType);

    for (const attr in attrObj) {
        elem.setAttribute(attr, attrObj[attr]);
    }

    elem.textContent = text;
    return elem;
}

// Requests functions
async function updateRequest(bodyObj) {
    // SoftUni server
    // const url = 'http://localhost:3030/jsonstore/notices/storage';

    // Back4App server
    const url = 'https://parseapi.back4app.com/classes/Notices/Eah1g4UkkD';

    return makeRequest(url, 'put', bodyObj);
}

async function getRequest() {
    // SoftUni server
    // const url = 'http://localhost:3030/jsonstore/notices/storage';

    // Back4App server
    const url = 'https://parseapi.back4app.com/classes/Notices/Eah1g4UkkD';

    const data = await makeRequest(url, 'get');
    return data;
}

async function makeRequest(url, methodStr, bodyObj) {
    const options = {
        method: methodStr,
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': 'wlZezVWuR0xG3VDM2SPqvEuSPE66bKspj5iKigGL',
            'X-Parse-REST-API-Key': 'a0cX24dr7zCbVXCMWWmC8OQrDtKXvBsQ4AOd4bNA'
        }
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
        alert(err);
    }
}