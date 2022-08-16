// dark-mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode dan simpan mode ke localstorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    darkToggle.checked = true;
} else {
    document.documentElement.classList.remove('dark');
    darkToggle.checked = false;
};

// animasi aos
const aosFade = document.querySelectorAll('#aos-fade-down');

    aosFade.forEach((img, i) => {
    img.dataset.aos = 'fade-down';
    img.dataset.aosDelay = i * 400;
    img.dataset.aosDuration = 1000;
});

AOS.init({
    once: true,
});

// animasi gsap

gsap.from("#fade-down", {duration: 1, delay:1.5, opacity: 0, ease: "bounce", y: -50});
gsap.from("#slide-side", {duration: 1, delay:1, opacity: 0, ease: "back", x: -100});
gsap.to('#tulis', {duration: 7, delay: 2, text: "Web ini dibuat dengan tujuan untuk menampilkan informasi tentang saya, skill yang saya miliki dan, project yang telah saya kerjakan", ease: "none"});


// typing
new Typed('#ketik', {

    strings: ['Student', 'Human', 'Gamers', 'Web Developer'],
    typeSpeed:180,
    backSpeed:80,
    loop:true,
});

// Navbar Fixed dan to top
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    // const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        // toTop.classList.remove('hidden');
        // toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed')
        // toTop.classList.remove('flex');
        // toTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik diluar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});