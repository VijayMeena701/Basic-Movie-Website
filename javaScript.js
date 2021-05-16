function createParallax() {
    var scrollAmount = document.documentElement;
    scrollAmount.addEventListener("mousemove", e => {
        scrollAmount.style.setProperty('x', e.clientX + "px");
    })
}
function parallaxEffect() {
    var scroll = $(window).scrollTop();
}

document.getElementById("mobileMenuToggle").addEventListener("click", function () {
    $('.mobileView').toggleClass("active");
});

//
//$(document).ready(function () {
//    toggleMenu();
//});
//    $('#mobileMenuToggle').on('click', function(){
//        toggle.toggleClass('active');
//    });