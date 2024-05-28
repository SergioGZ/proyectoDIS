
// Canvas de la imagen images/logo2.svg con una animación de bote y un texto "Gracias por la visita"
var canvas = document.getElementById('wheelCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = 'images/logo2.svg';
img.onload = function() {
    ctx.drawImage(img, 0, 0, 400, 200);
}
var x = 0;
var y = 0;
var dx = 2;
var dy = 4;
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, 150, 75);
    ctx.font = "20px Josefin Sans";
    ctx.fillStyle = "white";
    ctx.fillText("¡Gracias por la visita!", 160, 40);
    if (x + dx > canvas.width - 400 || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy > canvas.height - 200 || y + dy < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
setInterval(draw, 300);