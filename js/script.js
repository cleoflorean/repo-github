// Toggel class active//
const navbarNas = document.querySelector ('.navbar-nav');
// ketika hamberger menu di klik
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNas.classList.toggle('active');
};

// Klik di luar slidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNas.contains(e.target)) {
        navbarNas.classList.remove('active');
    }
});
