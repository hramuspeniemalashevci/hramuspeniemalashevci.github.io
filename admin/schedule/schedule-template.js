// Default data
const defaulTemplateData = [
  {
    "content": "- Утреня\nНачало: 08:00\n- Св.Литургия\nНачало: 09:00 - 09:45\n- Вечерня\nНачало: 18:00"
  }
];

// Refs
// const templateForm = document.getElementById('template-form');
const textareaElem = document.getElementById('template-text');
const btnResetTemplate = document.getElementById('template-reset');
const btnUpdateTemplate = document.getElementById('template-update');

const loaderDivTBottom = document.querySelector('.loader.-bottom');

// Event listeners
btnResetTemplate.addEventListener('click', (ev) => {
  ev.preventDefault();
  textareaElem.value = '';
});

btnUpdateTemplate.addEventListener('click', (ev) => {
  ev.preventDefault();
  updateRemoteData()
});

// Functions execution
printRemoteData();

// FUNCTIONS

// Get data
async function getTemplateRemoteData() {

  try {
    const data = await getRequest();
    return data.ScheduleTemplate[0].content;

  } catch (error) {
    console.log(error);
    throw error;
  }

}

async function printRemoteData() {
  try {
    const data = await getTemplateRemoteData();
    textareaElem.value = data;
    loaderDivTBottom.style.display = 'none';

  } catch (error) {
    console.log(error);
    throw error;
  }

}

// Update data
async function updateRemoteData() {
  const requestBodyObj = {
    ScheduleTemplate: [
      {
        content: textareaElem.value
      }
    ]
  };

  try {
    await updateRequest(requestBodyObj);
    alert('... Шаблонът е обновен ...');

  } catch (error) {
    console.log(error);

    removeAllBack4appUsersessionData()
    window.location.replace('/admin');
  }

}

// IMPORTS
import { removeAllBack4appUsersessionData } from '../../GLOBAL/js-global/browser-storage.js';
import { getRequest, updateRequest } from "./schedule.js";