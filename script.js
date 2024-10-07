function toggleMenu() {
    var menuButton = document.querySelector('.menu-button');
    var menu = document.querySelector('.menu');

    menuButton.classList.toggle('open');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}