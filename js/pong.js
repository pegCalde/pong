var canvas;

function draw()
{
    //var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
    context.fill();
}

document.addEventListener('DOMContentLoaded', function ()
{
    canvas = document.getElementById("canvas");


    game=
        {
            ball:
                {
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                    r: 5
                }
        }

    draw();
});