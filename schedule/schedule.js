// Refs
const weekRange = document.getElementById('week-range');
const firstWeekDate = document.getElementById('first-weekdate-span');
const lastWeekDate = document.getElementById('last-weekdate-span');

const scheduleWrapper = document.getElementById('schedule-wrapper');

scheduleWrapper.replaceChildren(elementCreate('p', { style: 'color:rgb(192, 0, 0);font-style:italic' }, '... Данните се зареждат ...'));
renderSchedule();

// FUNCTIONS
async function renderSchedule() {
    const fragment = document.createDocumentFragment();

    // Back4App server
    const serverData = await getRequest();
    const dataArr = serverData.Schedule

    const firsrDayDate = dataArr[0].date;
    const lastDayDate = dataArr[dataArr.length - 2].date;

    firstWeekDate.textContent = firsrDayDate;
    lastWeekDate.textContent = lastDayDate;
    weekRange.style.display = 'block';

    for (const el of dataArr) {
        if (el.description === '') {
            continue;
        }

        const currArticle = createArticle(el.date, el.day, el.description)

        fragment.appendChild(currArticle);
    }

    scheduleWrapper.replaceChildren(fragment);
}

// DOM functions
function createArticle(date, weekDay, description) {
    const container = elementCreate('article', { class: 'card' });
    const title = elementCreate('h4', {}, `Дата: ${date} г. (${weekDay})`);
    const parag = elementCreate('p');
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

    parag.appendChild(fragmentTextContent);

    container.appendChild(title);
    container.appendChild(parag);

    return container;
}

// IMPORTS
import { getRequest } from "../GLOBAL/js-global/requests.js";
import { elementCreate } from "../GLOBAL/js-global/dom.js";
