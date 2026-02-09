export async function loadCalendar(ev, year, monthEngName) {
  let isBtnTarget = null;

  if (ev) {
    isBtnTarget = true;
    year = Number(ev.target.parentElement[0].value);
    monthEngName = ev.target.parentElement[1].value;
  }

  updateYearAndMonthHeadings(year, monthEngName);

  mainElem.replaceChildren(
    elementCreate(
      'p',
      { style: 'color:rgb(192, 0, 0);' },
      'Данните се зареждат ...'
    )
  );

  const calendar = await getCalendarRequest(year);

  if (calendar === null) {
    return;
  }

  if (fullYearCheckbox.checked) {
    renderFullYearCalendarData(year, calendar, isBtnTarget)

  } else {
    renderMonthCalendarData(year, monthEngName, calendar, isBtnTarget);
  }
}

function renderFullYearCalendarData(year, calendar, isBtnTarget) {
  const yearhObj = calendar[year];
  const pageFragment = document.createDocumentFragment();

  for (const monthEngName in yearhObj) {
    const monthHeadingText = `месец ${getMonthBgName(monthEngName).toUpperCase()}`;
    const monthObj = yearhObj[monthEngName];

    const monthFragment = document.createDocumentFragment();
    const monthHeading = elementCreate('h3', { id: 'month-heading' }, monthHeadingText);
    monthFragment.appendChild(monthHeading);

    const sorted = Object.entries(monthObj).sort((a, b) => {
      return Number(a[0]) - Number(b[0]);
    });

    sorted.forEach((el) => {
      const date = el[0];
      const monthBgName = getMonthBgName(monthEngName);

      const dayObj = el[1];
      const dayName = weekDayNamesObj[dayObj.day];
      const fullDate = `${date} ${monthBgName} ${year}, ${dayName}`;
      const description = dayObj.memoryOf;
      const state = dayObj.color;

      const card = createDateCard(fullDate, description, state, isCurrDay(year, monthEngName, date));
      monthFragment.appendChild(card);
    });

    if (monthEngName !== 'Dec') {
      const dividerElem = elementCreate('hr', { class: 'hr-divider' });
      monthFragment.appendChild(dividerElem);
    }

    pageFragment.appendChild(monthFragment);
  }

  mainElem.replaceChildren(pageFragment);

  if (isBtnTarget) {
    checkmarkAlertGreen();
  }

  toggleCurrentDayBtn();

  // setTimeout(smoothRedirectToCurrDay, 700);
}

function renderMonthCalendarData(year, monthEngName, calendar, isBtnTarget) {
  const monthObj = calendar[year][monthEngName];
  const sorted = Object.entries(monthObj).sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  });

  const fragment = document.createDocumentFragment();
  sorted.forEach((el) => {
    const date = el[0];
    const monthBgName = getMonthBgName(monthEngName);

    const dayObj = el[1];
    const dayName = weekDayNamesObj[dayObj.day];
    const fullDate = `${date} ${monthBgName} ${year}, ${dayName}`;
    const description = dayObj.memoryOf;
    const state = dayObj.color;

    const card = createDateCard(fullDate, description, state, isCurrDay(year, monthEngName, date));
    fragment.appendChild(card);
  });

  mainElem.replaceChildren(fragment);

  if (isBtnTarget) {
    checkmarkAlertGreen();
  }

  toggleCurrentDayBtn();
}

function toggleCurrentDayBtn() {
  const hasIdCurrentDay = document.querySelector('#current-day');
  console.log(hasIdCurrentDay);


  if (hasIdCurrentDay) {
    currentDayBtn.style.display = 'inline-block';
    currentDayBtn.addEventListener('click', () => {
      setTimeout(smoothRedirectToCurrDay, 0);
    });

  } else {
    currentDayBtn.style.display = 'none';
    window.location.hash = '#';
  }
}

// Validation
function isCurrDay(year, monthEngName, date) {
  const isCurrentYear = year === currYear;
  const isCurrentMonth = monthEngName === currMonthEngName;
  const isCurrDate = Number(date) === currDate;
  return isCurrDate && isCurrentMonth && isCurrentYear;
}


// Imports
import { weekDayNamesObj } from './constants.js';
import { currYear, currDate, currMonthEngName } from './date.js';
import { mainElem, fullYearCheckbox, menuYears, menuMonths, currentDayBtn } from './refs.js';
import { createDateCard, elementCreate } from './dom.js';
import { getCalendarRequest } from './requests.js';
import {
  updateYearAndMonthHeadings,
  smoothRedirectToCurrDay,
  getMonthBgName,
} from './helpers.js';
import { checkmarkAlertGreen } from './btns.js';
