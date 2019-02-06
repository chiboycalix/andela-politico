var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link4 = document.getElementById('link4');
var nav_menu = document.getElementById('nav-menu')
var politicoBox = document.querySelector('.politico-text-box')
var menu = document.querySelector('.main-nav');
var politicoBox = document.querySelector('.politico-text-box')

function toggleNav(){
    if(menu.classList !== 'open'){
       menu.classList.toggle('open')
       politicoBox.classList.toggle('hide');
    }
}

link2.addEventListener('click', function() {
    nav_menu.style.opacity = 0;
    politicoBox.classList.toggle('hide');
    menu.classList.remove('open');
    nav_menu.style.opacity = 1;
});
link3.addEventListener('click', function() {
    nav_menu.style.opacity = 0;
    politicoBox.classList.toggle('hide');
    menu.classList.remove('open');
    nav_menu.style.opacity = 1;
});
link4.addEventListener('click', function() {
    nav_menu.style.opacity = 0;
    politicoBox.classList.toggle('hide');
    menu.classList.remove('open');
    nav_menu.style.opacity = 1;
});