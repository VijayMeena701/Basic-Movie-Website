$('#mobileMenuToggle').on('click', function () {
    $('.mobileView').toggleClass('active');
});

$("cardsContainer").on("mousemove",function () {
    $("cardsContainer").css("border", "5px solid #19964b");
    console.log("moved");
});