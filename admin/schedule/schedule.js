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

const redirectPathOnError = '/admin';
const back4appBrowserStorageItemName = back4app.back4appBrowserStorageItemName;

// Execute functions
initialContentLoad();

// References
const allCardsArr = Array.from(document.querySelectorAll('article.card'));
const firstDateInput = document.getElementById('first-date-input');
const weekRangeContainer = document.getElementById('week-range-container');
const previewContainer = document.getElementById('preview-container');

const topBtnsGroup = document.querySelector('.top-btns-group');
const articlesSection = document.getElementById('articles-section');
const templateSection = document.querySelector('.template-section');
const previewSection = document.getElementById('preview-section');


const loaderDivTop = document.querySelector('.loader.-top');

// Event-listeners
document.getElementById('logout-top-btn').addEventListener('click', logoutAllUserSessions);
document.getElementById('logout-bottom-btn').addEventListener('click', logoutAllUserSessions);

document.getElementById('clear-all-btn').addEventListener('click', clearAllFields);
document.getElementById('confirm-first-date-btn').addEventListener('click', refreshAllDates);
document.getElementById('articles-container').addEventListener('click', clearCardTextarea);
document.getElementById('preview-btn').addEventListener('click', renderPreview);
document.getElementById('back-to-form-btn').addEventListener('click', hidePreviewSection);
document.getElementById('confirm-send-btn').addEventListener('click', sendNewData);

// FUNCTIONS
async function sendNewData() {
    const dataArr = getCurrentData();

    // Back4App server
    const requestBodyObj = {
        Schedule: dataArr
    };

    try {
        await updateRequest(requestBodyObj);
        alert('... Данните са изпратени ...');
        window.location.href = '/schedule';

    } catch (error) {
        console.log(error);

        removeAllBack4appUsersessionData()
        window.location.replace('/admin');
    }
}

function renderPreview() {
    const dataArr = getCurrentData();

    const title = elementCreate('h3', {}, `${dataArr[0].date} – ${dataArr[dataArr.length - 2].date} г.`);
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
    topBtnsGroup.style.display = 'none';
    articlesSection.style.display = 'none';
    templateSection.style.display = 'none';

    previewSection.style.display = 'block';
}

function hidePreviewSection() {
    previewSection.style.display = 'none';

    topBtnsGroup.style.display = 'block';
    articlesSection.style.display = 'block';
    templateSection.style.display = 'block';
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

    alert('... Датите са обновени ...');
}

function clearCardTextarea(ev) {
    ev.preventDefault();

    if (ev.target.tagName !== 'BUTTON' || ev.target.className !== 'clear-currday-textarea') {
        return;
    }

    ev.target.parentElement.querySelector('textarea').value = '';
}

// OnInitialLoad functions
async function initialContentLoad() {
    browserStorageValidation(back4appBrowserStorageItemName, redirectPathOnError, 'user');

    document.getElementById('first-date-input').value = '';

    // Back4App server
    const result = await getRequest();
    const data = result.Schedule;

    const allCardsArr = Array.from(document.querySelectorAll('article.card'));

    for (let i = 0; i < allCardsArr.length; i++) {
        const currCard = allCardsArr[i];

        // console.log(data[i]);

        currCard.querySelector('span.full-date-span').textContent = data[i].date;
        currCard.querySelector('span.weekday-span').textContent = data[i].day;
        currCard.querySelector('textarea').value = data[i].description;
    }

    loaderDivTop.style.display = 'none';
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

// LocalStorage & others functions
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


// IMPORTS
import * as back4app from "../../GLOBAL/api/back4appApi/back4app.js";
import { browserStorageValidation, removeAllBack4appUsersessionData } from '../../GLOBAL/js-global/browser-storage.js';
import { getRequest, updateRequest } from "../../GLOBAL/js-global/requests.js";
import { elementCreate } from "../../GLOBAL/js-global/dom.js";
import { logoutAllUserSessions } from '../../GLOBAL/js-global/requests-users.js';

export { getRequest, updateRequest };