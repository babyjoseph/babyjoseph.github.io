const menuButton = document.querySelector('.menu_btn');
const menuBurger = document.querySelector('.menu_btn--burger');
const myNav = document.querySelector('.myNav');
const navMenu = document.querySelector('.myNav-menu');
const navItems = document.querySelectorAll('.myNav-menu__item');

let accessMenu = false;

menuButton.addEventListener('click', function() {
    if(!accessMenu){
        menuBurger.classList.add('open');
        myNav.classList.add('open');
        navMenu.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        accessMenu = true;
        console.log("burger opened");
    } else{
        menuBurger.classList.remove('open');
        myNav.classList.remove('open');
        navMenu.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        accessMenu = false;
        console.log("burger closed")
    }
});

const myGitIcon = document.querySelector('#github');
const myFbIcon = document.querySelector('#facebook');
const myIgIcon = document.querySelector('#instagram');

myGitIcon.setAttribute('href', 'https://github.com/babyjoseph');
myFbIcon.setAttribute('href', 'https://facebook.com/josh.limpiado');
myIgIcon.setAttribute('href', '#');
myGitIcon.setAttribute('target', '_blank');
myFbIcon.setAttribute('target', '_blank');
myIgIcon.setAttribute('target', '_blank');