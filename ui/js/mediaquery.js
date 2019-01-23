function toggleNav(){
    var menu = document.querySelector('.main-nav');
    var politicoBox = document.querySelector('.politico-text-box')
    if(menu.classList !== 'open'){
       menu.classList.toggle('open')
       politicoBox.classList.toggle('hide');
    }
    
}