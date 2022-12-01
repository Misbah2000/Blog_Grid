let menu = document.querySelector('nav ul');
let hamburger = document.querySelector('nav .mobile');
hamburger.addEventListener('click', function(){
    menu.classlist.toggle('show')
});