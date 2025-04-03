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
  const data = await getRequest();
  return data.ScheduleTemplate[0].content;
}

async function printRemoteData() {
  const data = await getTemplateRemoteData();
  textareaElem.value = data;
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

  updateRequest(requestBodyObj);
  alert('Шаблонът е обновен!');
}

// IMPORTS
import { getRequest, updateRequest } from "./schedule.js";