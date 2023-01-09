
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
        const top = window.scrollY;
        const height= sec.offsetHeight;
        const offset = sec.offsetTop - 150;
        const id = sec.getAttribute('id');

        if(top => offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}
document.querySelector('#search').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#search-close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

function loader(){
    document.querySelector('.loader').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut;