// Helper functions
export function updateYearAndMonthHeadings(year, monthEngName) {
  updateYearHeading(year);

  if (monthEngName) {
    const monthBgName = getMonthBgName(monthEngName);
    updateMonthHeading(monthBgName);
  } else {
    headingMonth.textContent = '';
  }
}

function updateYearHeading(year) {
  headingYear.textContent = `${year} г.`;
}

function updateMonthHeading(monthsBgName) {
  headingMonth.textContent = `месец ${monthsBgName.toUpperCase()}`;
}

export function getMonthBgName(monthEngName) {
  const index = monthsArr.indexOf(monthEngName);
  return monthsBgNames[index];
}

export function smoothRedirectToCurrDay() {
  window.location.href = '#current-day';
}

// Imports
import { monthsArr, monthsBgNames } from './constants.js';
import { headingYear, headingMonth } from './refs.js';
