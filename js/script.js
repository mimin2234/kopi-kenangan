// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchform = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

//klik di luar sidebar menu menghilangkan nav
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(event) {
  if (!hm.contains(e.target) && !navbarnav.contains(event.target)
  ) {
    navbarnav.classList.remove("active");}

    if (!sb.contains(e.target) && !navbarnav.contains(event.target)
    ) {
      searchform.classList.remove("active");}
});


    
