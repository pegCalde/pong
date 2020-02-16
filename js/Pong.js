let tabBall = new Array();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function play()
{
    drawBackground(ctx, canvas, 0, 0);

    for (i = 1; i <= numberMAX_ball; i ++)
    {
        move(tabBall[i]);
        drawBalle(ctx, tabBall[i]);
    }

    requestAnimationFrame(play);
}

document.addEventListener('DOMContentLoaded', function ()
{
    drawBackground(ctx, canvas, 0, 0);

    for (i = 1; i <= numberMAX_ball; i ++)
    {
        x = Math.floor((Math.random() * 635) + 5);
        y = Math.floor((Math.random() * 475) + 5);
        speedx = Math.floor((Math.random() * 5) - 5);
        speedy = Math.floor((Math.random() * 5) - 5);
        tabBall[i] = new Ball(x, y, 5, speedx, speedy);
        drawBalle(ctx, tabBall[i]);
    }

    play();
});