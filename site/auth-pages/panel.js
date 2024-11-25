// Associative arrays
const daysObj = {
    'Mon': 'Понеделник',
    'Tue': 'Вторник',
    'Wed': 'Сряда',
    'Thu': 'Четвъртък',
    'Fri': 'Петък',
    'Sat': 'Събота',
    'Sun': 'Неделя'
};

const monthsObj = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12',
};

// Execute functions
localStorageCheck();
initialContentLoad();

// References
const allCardsArr = Array.from(document.querySelectorAll('article.card'));
const firstDateInput = document.getElementById('first-date-input');
const previewSection = document.getElementById('preview-section');
const weekRangeContainer = document.getElementById('week-range-container');
const previewContainer = document.getElementById('preview-container');

// Attach event-listeners
document.getElementById('logout-top-btn').addEventListener('click', onLogout);
document.getElementById('logout-bottom-btn').addEventListener('click', onLogout);
document.getElementById('clear-all-btn').addEventListener('click', clearAllFields);
document.getElementById('confirm-first-date-btn').addEventListener('click', refreshAllDates);
document.getElementById('articles-container').addEventListener('click', clearCardTextarea);
document.getElementById('preview-btn').addEventListener('click', renderPreview);
document.getElementById('back-to-form-btn').addEventListener('click', hidePreviewSection);
document.getElementById('confirm-send-btn').addEventListener('click', sendNewData);

// FUNCTIONS
function sendNewData() {
    const dataArr = getCurrentData();

    // SoftUni server
    // const requestBodyObj = dataArr;

    // Back4App server
    const requestBodyObj = {
        ScheduleArr: dataArr
    };

    updateRequest(requestBodyObj);
    alert('Данните са изпратени!');
    window.location.replace('/schedule.html');
}

function renderPreview() {
    const dataArr = getCurrentData();

    const title = elementCreate('h3', {}, `${dataArr[0].date} – ${dataArr[dataArr.length - 1].date} г.`);
    weekRangeContainer.replaceChildren(title);

    const fragment = document.createDocumentFragment();
    for (const el of dataArr) {
        if (el.description === '') {
            continue;
        }

        const currArticle = createArticle(el.date, el.day, el.description)

        fragment.appendChild(currArticle);
    }

    previewContainer.replaceChildren(fragment);
    showPreviewSection();
}

function getCurrentData() {
    const dataArr = [];
    const allCardsArr = Array.from(document.querySelectorAll('article.card'));

    allCardsArr.forEach(el => {
        const date = el.querySelector('span.full-date-span').textContent;
        const day = el.querySelector('span.weekday-span').textContent;
        const description = el.querySelector('textarea').value;

        dataArr.push({ date, day, description });
    });

    return dataArr;
}

function showPreviewSection() {
    document.getElementById('articles-section').style.display = 'none';
    previewSection.style.display = 'block';
    window.location = '#preview-section';
}

function hidePreviewSection() {
    document.getElementById('articles-section').style.display = 'block';
    previewSection.style.display = 'none';
    window.location = '#articles-section';
}

function refreshAllDates(ev) {
    ev.preventDefault();
    const output = [];
    const initialDate = firstDateInput.value;

    if (initialDate === '') {
        alert('Датата не е попълнена!');
        return;
    }

    const tokens = initialDate.split('-');
    let year = Number(tokens[0]);
    let month = Number(tokens[1] - 1);
    let date = Number(tokens[2]);

    Array.from(allCardsArr).forEach(el => {
        const newDate = new Date(year, month, date);
        const [dayName, monthName, dateNum, yearNum] = newDate.toDateString().split(' ');
        // const dateValue = `${yearNum}-${monthsObj[monthName]}-${dateNum}`;
        const dateName = `${dateNum}/${monthsObj[monthName]}/${yearNum}`;

        el.querySelector('span.full-date-span').textContent = dateName;
        el.querySelector('span.weekday-span').textContent = daysObj[dayName];

        const currObj = {
            date: dateName,
            day: daysObj[dayName]
        };
        output.push(currObj);

        date++;
    });

    alert('Датите са обновени!');
}

function clearCardTextarea(ev) {
    ev.preventDefault();

    if (ev.target.tagName !== 'BUTTON' || ev.target.className !== 'clear-currday-textarea') {
        return;
    }

    ev.target.parentElement.querySelector('textarea').value = '';
}

// OnInitialLoad functions
function localStorageCheck() {
    const authData = localStorage.getItem('authData');

    if (authData !== '733fa9a1-26b6-490d-b299-21f120b2f53a') {
        window.location.replace('/site/auth-pages/login.html');
    }
}

async function initialContentLoad() {
    document.getElementById('first-date-input').value = '';

    // SoftUni server
    // const data = await getRequest();

    // Back4App server
    const result = await getRequest();
    const data = result.ScheduleArr;

    const allCardsArr = Array.from(document.querySelectorAll('article.card'));

    for (let i = 0; i < allCardsArr.length; i++) {
        const currCard = allCardsArr[i];

        currCard.querySelector('span.full-date-span').textContent = data[i].date;
        currCard.querySelector('span.weekday-span').textContent = data[i].day;
        currCard.querySelector('textarea').value = data[i].description;
    }
}

// DOM functions
function createArticle(date, weekDay, description) {
    const container = elementCreate('article', { class: 'preview-card' });
    const title = elementCreate('h4', {}, `Дата: ${date} г. (${weekDay})`);
    const paragContent = elementCreate('p');
    const fragmentTextContent = document.createDocumentFragment();

    const descriptionArr = description.split('\n').map(el => el.trim());

    for (let i = 0; i < descriptionArr.length; i++) {
        const currElem = descriptionArr[i];

        if (currElem === '') {
            const br = elementCreate('br');
            fragmentTextContent.appendChild(br);
        } else {
            const span = elementCreate('span', { class: 'li' }, currElem);
            fragmentTextContent.appendChild(span);
        }
    }

    paragContent.appendChild(fragmentTextContent);

    container.appendChild(title);
    container.appendChild(paragContent);

    return container;
}

function elementCreate(elemType, attrObj, text) {
    const elem = document.createElement(elemType);

    for (const attr in attrObj) {
        elem.setAttribute(attr, attrObj[attr]);
    }

    elem.textContent = text;
    return elem;
}

// LocalStorage & others functions
function onLogout() {
    localStorage.removeItem('authData');
    window.location.replace('/site/auth-pages/login.html');
}

function clearAllFields() {
    const respond = confirm('Изчистване на всички полета?');

    if (!respond) {
        return;
    }

    document.querySelector('input').value = '';

    Array.from(document.querySelectorAll('textarea'))
        .forEach(el => {
            el.value = '';
        });
}

// Requests functions
async function updateRequest(bodyObj) {
    // SoftUni server
    // const url = 'http://localhost:3030/jsonstore/schedule/storage';

    // Back4App server
    const url = 'https://parseapi.back4app.com/classes/Schedule/ujMZdzqmbL';

    return makeRequest(url, 'put', bodyObj);
}

async function getRequest() {
    // const url = 'http://localhost:3030/jsonstore/schedule/storage';

    const url = 'https://parseapi.back4app.com/classes/Schedule/ujMZdzqmbL';

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

// ##### Notice #####
/*
const url = 'https://parseapi.back4app.com/classes/Schedule/ujMZdzqmbL';
const options = {
    method: 'get',
    headers: {
        'X-Parse-Application-Id': 'wlZezVWuR0xG3VDM2SPqvEuSPE66bKspj5iKigGL',
        'X-Parse-REST-API-Key': 'a0cX24dr7zCbVXCMWWmC8OQrDtKXvBsQ4AOd4bNA'
    }
};
*/
