const menuicon = document.querySelector('menu-icon');
const menu = document.querySelector('menu');
menuicon.addEventListener('click',function() {
    menu.classList.toggle('active')
});