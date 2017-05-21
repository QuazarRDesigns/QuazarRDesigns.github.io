function hamburgerMenu() {
    var hamburger = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav');

    function openHamburger() {
        hamburger.style.display = 'none';
        nav.classList.toggle('show-nav')
    }

    hamburger.addEventListener('click', openHamburger);
}

hamburgerMenu();