var canvas;
var game;

function draw()
{
    //var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
    ctx.fill();
}

function play()
{
    game.ball.x += game.ball.speed.x;
    game.ball.y += game.ball.speed.y;
    draw();
    requestAnimationFrame(play);
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
                    r: 5,
                    speed:
                        {
                            x: 2,
                            y: 2
                        }
                }
        }
    game.ball.x += 2;
    game.ball.y += 2;
    draw();
    play();
});