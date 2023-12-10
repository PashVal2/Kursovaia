menuHome = document.getElementById('home')
menuAbout = document.getElementById('about')
footer = document.getElementById('footer')



function resetMenu(menuElement) {
    menuElement.classList.remove('greenback')
}

menuHome.classList.add('greenback');
window.addEventListener('scroll', function() {
    if (0 == window.scrollY) {
        resetMenu(menuAbout);
        menuHome.classList.add('greenback');
    }
    if (window.innerHeight - 100 >= footer.getBoundingClientRect().top && window.scrollY > 70) {
        resetMenu(menuHome);
        menuAbout.classList.add('greenback');
    }
    // else {
    //     resetMenu(menuContent, menuAbout);
    //     menuHome.classList.remove('greenback');
    // }
    // console.log(window.scrollY);
    // console.log("d" + (footer.getBoundingClientRect().top));
    // console.log(window.scrollY >= (footer.getBoundingClientRect().top))
})