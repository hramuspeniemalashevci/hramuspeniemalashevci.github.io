window.onload = onPageLoad;

// Youtube api variables
// const url_1 = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCS3ImmFAklu-KGOi7-Yn5EQ&maxResults=100&order=date&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken=';
// const url_2 = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=PLiC5bGURVFNcIqpPlxxiexv-8KxGIjnCt&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken=';
// const url_3 = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCS3ImmFAklu-KGOi7-Yn5EQ&maxResults=100&order=date&q=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken=';
const url_4 = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCS3ImmFAklu-KGOi7-Yn5EQ&maxResults=100&order=date&q=%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%7Cmp4&type=video&key=AIzaSyCxzNhFqbAE650eUXWo1k-W9pe4WnVzgIY&pageToken=';

// let nextPageToken = '';
// const result = [];

// Referernces
const loginInput = document.getElementById('login-input');
const logoutBtn = document.getElementById('logout-btn');
const loginDiv = document.getElementById('login-div');
const editDiv = document.getElementById('edit-btns-div');
const restartBtn = document.getElementById('restart');

// Attach event-listeners
document.getElementById('enter-btn').addEventListener('click', onEnterClick);
document.getElementById('notices-edit-btn').addEventListener('click', onNoticesEditClick);
document.getElementById('schedule-edit-btn').addEventListener('click', onScheduleEditClick);
logoutBtn.addEventListener('click', onLogout);
restartBtn.addEventListener('click', onRestart);
document.getElementById('youtube-api-btn').addEventListener('click', getYoutubeData);

// FUNCTIONS

// EventHandlers
function onNoticesEditClick() {
    window.location.href = './notices';
}

function onScheduleEditClick() {
    window.location.href = './schedule';
}

function onEnterClick(ev) {
    ev.preventDefault();

    const password = '5678';
    const passAttempt = loginInput.value.trim();

    if (passAttempt === password) {
        localStorage.setItem('authData', '733fa9a1-26b6-490d-b299-21f120b2f53a');
        showEditBtns();
    } else {
        alert('Грешна парола!');
    }
}

// LocalStorage functions
function onPageLoad() {
    const authData = localStorage.getItem('authData');

    if (authData === '733fa9a1-26b6-490d-b299-21f120b2f53a') {
        showEditBtns();
    } else {
        hideEditBtns();
    }
}

function onLogout() {
    localStorage.removeItem('authData');
    window.location.replace('/admin-pages');
}

function onRestart() {
    const urlNotices = 'https://parseapi.back4app.com/classes/Notices/Eah1g4UkkD';
    // const urlSchedule = 'https://parseapi.back4app.com/classes/Schedule/ujMZdzqmbL';
    const urlSchedule = 'https://parseapi.back4app.com/classes/ScheduleArr/yrfW7lPqTn';

    const requestBodyObjNotices = {
        "NoticesArr": [
            {
                "content": ''
            }
        ]
    };

    const requestBodyObjSchedule = {
        ScheduleArr: [
            {
                "date": "11/11/2024",
                "day": "Понеделник",
                "description": "- Утреня\nНачало: 08:00\n- Св.Литургия\nНачало: 09:00 - 09:45"
            },
            {
                "date": "12/11/2024",
                "day": "Вторник",
                "description": "- Вечерня\nНачало: 18:00"
            },
            {
                "date": "13/11/2024",
                "day": "Сряда",
                "description": "- Утреня\nНачало: 08:00\n- Св.Литургия\nНачало: 09:00 - 09:45\n- Вечерня\nНачало: 18:00"
            },
            {
                "date": "14/11/2024",
                "day": "Четвъртък",
                "description": " Утреня\nНачало: 08:00\n- Св.Литургия\nНачало: 09:00 - 09:45"
            },
            {
                "date": "15/11/2024",
                "day": "Петък",
                "description": "- Вечерня\nНачало: 18:00"
            },
            {
                "date": "16/11/2024",
                "day": "Събота",
                "description": "- Утреня\nНачало: 08:00\n- Св.Литургия\nНачало: 09:00 - 09:45\n- Вечерня\nНачало: 18:00"
            },
            {
                "date": "17/11/2024",
                "day": "Неделя",
                "description": "- Утреня\nНачало: 08:00\n- Св.Литургия\nНачало: 09:00 - 09:45"
            },
            {
                "date": "18/11/2024",
                "day": "Понеделник",
                "description": ""
            }
        ]
    };

    const respond = confirm('Възстановяване на данните до версията им, която е по подразбиране?');

    if (!respond) {
        return;
    }

    updateRequest(urlNotices, requestBodyObjNotices);
    updateRequest(urlSchedule, requestBodyObjSchedule);

    alert('Данните са възстановени!');
}

// DOM
function showEditBtns() {
    loginDiv.style.display = 'none';
    editDiv.style.display = 'block';
    logoutBtn.style.display = 'block';
    restartBtn.style.display = 'block';
}

function hideEditBtns() {
    loginDiv.style.display = 'block';
    editDiv.style.display = 'none';
    logoutBtn.style.display = 'none';
    restartBtn.style.display = 'none';
}

// Requests functions
async function updateRequest(url, bodyObj) {
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

// Youtube api function
async function getYoutubeData() {
    let nextPageToken = '';
    const result = [];

    while (nextPageToken !== undefined) {
        const res = await fetch(url_4 + nextPageToken);
        const data = await res.json();

        nextPageToken = data.nextPageToken;

        for (const item of data.items) {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const description = item.snippet.description;
            const thumbnail = item.snippet.thumbnails.medium;
            const publishTime = item.snippet.publishTime;

            result.push({ videoId, title, description, thumbnail, publishTime });
        }

    }

    // Print results
    console.log(result);
    return result;
}
