// -- Button-to-top listeners
window.addEventListener('scroll', onScreenScroll);
btnToTop.addEventListener('click', goToScreenTop);

// Execution
initialPageLoad(currYear, currMonthEngName);

// FUNCTIONS
function initialPageLoad(currentYear, currentMonthEngName) {
  // window.location.href = '#page-start';
  // console.log('abc');

  menuYears.value = currentYear;
  menuMonths.value = currentMonthEngName;
  fullYearCheckbox.checked = false;

  loadCalendar(null, currentYear, currentMonthEngName);

  // Event listeners
  selectCalendarBtn.addEventListener('click', (ev) => loadCalendar(ev));
  fullYearCheckbox.addEventListener('change', (ev) => enableDisableMonthsMenu(ev));
}

// Imports
import { currYear, currMonthEngName } from './date.js';
import { menuYears, menuMonths, selectCalendarBtn } from './refs.js';
import { loadCalendar } from './render.js';
import { onScreenScroll, goToScreenTop } from './btns.js';
import { btnToTop, fullYearCheckbox } from './refs.js';
import { enableDisableMonthsMenu } from './dom.js';
