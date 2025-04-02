// --- Alert functions
export function checkmarkAlertGreen() {
  temporaryOnClickAlert('&check;', 700, 'rgb(80, 140, 80)');
}

function temporaryOnClickAlert(msg, duration, bgColor) {
  const containerEl = document.createElement('div');
  containerEl.setAttribute('class', 'temp-alert');
  containerEl.style.backgroundColor = bgColor;
  containerEl.style.outline = `2px solid ${bgColor}`;

  const spanEl = document.createElement('span');
  spanEl.setAttribute('class', 'check-mark');
  spanEl.innerHTML = msg;
  containerEl.appendChild(spanEl);
  setTimeout(function () {
    containerEl.parentNode.removeChild(containerEl);
  }, duration);
  document.body.appendChild(containerEl);
}

// --- Screen scroll functions
export function onScreenScroll() {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    btnToTop.style.display = 'block';
  } else {
    btnToTop.style.display = 'none';
  }
}

export function goToScreenTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  window.location.hash = '';
}

// Imports
import { btnToTop } from './refs.js';
