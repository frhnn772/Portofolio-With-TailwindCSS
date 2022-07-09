// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// typing
var typed = new Typed('#ketik', {
    // Waits 1000ms after typing "First"
strings: ['Student', 'Human', 'Gamers', 'Web Developer'],
typeSpeed:175,
backSpeed:85,
loop:true,
});