// References
// const dialogParag = document.getElementById('dialog');
// const logoutBtn = document.getElementById('logout-btn');
// const editLink = document.getElementById('edit-link');

const weekRange = document.getElementById('week-range');
const firstWeekDate = document.getElementById('first-weekdate-span');
const lastWeekDate = document.getElementById('last-weekdate-span');

const scheduleWrapper = document.getElementById('schedule-wrapper');

// Attach event-listeners
// logoutBtn.addEventListener('click', onLogout);;
// editLink.addEventListener('click', onEditLinkClick);

// Execute functions
// localStorageCheck();

scheduleWrapper.replaceChildren(elementCreate('p', { style: 'color:rgb(192, 0, 0)' }, '... Данните се зареждат ...'));
renderSchedule();

// FUNCTIONS

// Populate data function
async function renderSchedule() {
    const fragment = document.createDocumentFragment();

    // SoftUni server
    // const dataArr = await getRequest();

    // Back4App server
    const data = await getRequest();
    const dataArr = data.ScheduleArr

    const firsrDayDate = dataArr[0].date;
    const lastDayDate = dataArr[dataArr.length - 1].date;

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

// LocalStorage functions
// function onLogout() {
//     localStorage.removeItem('authData');
//     dialogParag.style.display = 'none';
//     logoutBtn.style.display = 'none';
// }

// function onEditLinkClick() {
//     window.location.replace('/admin-pages');
// }

// function localStorageCheck() {
//     const authData = localStorage.getItem('authData');

//     if (authData === '733fa9a1-26b6-490d-b299-21f120b2f53a') {
//         dialogParag.style.display = 'block';
//         logoutBtn.style.display = 'inline-block';
//     } else {
//         dialogParag.style.display = 'none';
//         logoutBtn.style.display = 'none';
//     }
// }

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

function elementCreate(elemType, attrObj, text) {
    const elem = document.createElement(elemType);

    for (const attr in attrObj) {
        elem.setAttribute(attr, attrObj[attr]);
    }

    elem.textContent = text;
    return elem;
}

// Requests functions
async function getRequest() {
    // Back4App server
    // const url = 'https://parseapi.back4app.com/classes/Schedule/ujMZdzqmbL';
    const url = 'https://parseapi.back4app.com/classes/Notices/Gw5HTuvO1i';

    const data = await makeRequest(url, 'get');
    return data;
}

async function makeRequest(url, methodStr, bodyObj) {
    const options = {
        method: methodStr,
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': 'vIKHEivxTRahTXolIJvc4DsMRbRVK5ccKWvZ7LBq',
            'X-Parse-REST-API-Key': 'lKm1iE5AXVgyZujcGH0WKgeaRPRnN5tOEpjVQUAI'
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

// ##### Notes #####
/*
// Article template
<article>
    <h4>Дата: 05/01/2022 г. (сряда)</h4>
    <p></p>
</article>
*/