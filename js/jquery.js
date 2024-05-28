$(document).ready(function() {
    $("h1").hover(function() {
        $(this).addClass("animate__animated animate__heartBeat");
    }, function() {
        $(this).removeClass("animate__animated animate__heartBeat");
    });
});