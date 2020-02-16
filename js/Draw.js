function drawBalle(contexte, ball)
{
    contexte.beginPath();
    contexte.fillStyle = "white";
    contexte.arc(ball.x, ball.y, ball.r, 0, 180, false);
    contexte.fill();
}
function drawBackground(contexte, canvas, x, y)
{
    contexte.beginPath();
    contexte.fillStyle = "black";
    contexte.fillRect(x,y, canvas.width, canvas.height);
    contexte.fill();
}