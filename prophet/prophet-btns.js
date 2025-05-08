const btnToTop = document.querySelector('#btn-to-top');
const btnToBottom = document.querySelector('#btn-to-bottom');

// -- Button-to-top listeners
window.addEventListener('scroll', onScreenScroll);
btnToTop.addEventListener('click', goToScreenTop);
btnToBottom.addEventListener('click', goToScreenBottom);

// --- Screen scroll functions
function onScreenScroll() {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    btnToTop.style.display = 'block';
  } else {
    btnToTop.style.display = 'none';
  }

  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  if (scrollHeight - Math.round(window.scrollY) === document.body.offsetHeight) {
    btnToBottom.style.display = 'none';
  } else {
    btnToBottom.style.display = 'block';
  }

}

function goToScreenTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function goToScreenBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
