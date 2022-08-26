let menu = document.querySelector('.menu');
document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}
window.onscroll = () =>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active');

    }
}