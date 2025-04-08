// !NOT USED

function onLogout() {
  localStorage.removeItem('authData');
  dialogParag.style.display = 'none';
  logoutBtn.style.display = 'none';
}

function onEditLinkClick() {
  window.location.replace('/admin-pages');
}

function localStorageCheck() {
  const authData = localStorage.getItem('authData');

  if (authData === '733fa9a1-26b6-490d-b299-21f120b2f53a') {
    dialogParag.style.display = 'block';
    logoutBtn.style.display = 'inline-block';
  } else {
    dialogParag.style.display = 'none';
    logoutBtn.style.display = 'none';
  }
}
