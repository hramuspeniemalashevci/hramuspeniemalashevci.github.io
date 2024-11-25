let monthSelected = null;

// DOM functions
export function enableDisableMonthsMenu(ev) {
  if (monthSelected === null
    || (menuMonths.value !== monthSelected && menuMonths.value !== '')) {
    monthSelected = menuMonths.value;
  }

  if (ev.currentTarget.checked) {
    menuMonths.value = '';
    menuMonths.disabled = true;
  } else {
    menuMonths.disabled = false;
    menuMonths.value = monthSelected;
  }
}

export function createDateCard(fullDate, description, state, isCurrDay) {
  let contentClass = 'content';

  if (state === 'red') {
    contentClass += ' red';
  } else if (state === 'bold') {
    contentClass += ' bold';
  }

  const wrapper = elementCreate('article', { class: 'card' });
  const titleDiv = elementCreate('div', { class: 'title' }, fullDate);
  const contentDiv = elementCreate('div', { class: contentClass }, description);

  if (isCurrDay) {
    wrapper.setAttribute('id', 'current-day');
  }

  wrapper.appendChild(titleDiv);
  wrapper.appendChild(contentDiv);

  return wrapper;
}

export function elementCreate(elemType, attrObj, text) {
  const elem = document.createElement(elemType);

  for (const attr in attrObj) {
    elem.setAttribute(attr, attrObj[attr]);
  }

  elem.textContent = text;
  return elem;
}

// Imports
import { menuMonths } from './refs.js';
