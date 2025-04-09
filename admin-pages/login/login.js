window.onload = onPageLoad;

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
document.getElementById('youtube-api-btn').addEventListener('click', updateYoutubeData);

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

    alert(' ... Данните са възстановени ...');
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


// IMPORTS
import { updateYoutubeData } from "../../GLOBAL/js-global/api/youtubeApi/youtube.js";