window.addEventListener('DOMContentLoaded', () => {
    const navimenu = document.querySelector('.navi_menu'),
        navititle = document.querySelectorAll('.navi_title'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navimenu.classList.toggle('navi_menu_active');
    });

    navititle.forEach(title => {
        title.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            navimenu.classList.toggle('navi_menu_active');
        })
    })
})