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
    draw();
    move();

    requestAnimationFrame(play);
}

function move()
{
    if((game.ball.x < 0) && (game.ball.speed.x < 0))
    {
        game.ball.speed.x = (game.ball.speed.x * -1);
    }
    if((game.ball.x > canvas.width) && (game.ball.speed.x > 0))
    {
        game.ball.speed.x = (game.ball.speed.x * -1);
    }
    if((game.ball.y < 0) && (game.ball.speed.y < 0))
    {
        game.ball.speed.y = (game.ball.speed.y * -1);
    }
    if((game.ball.y > canvas.height) && (game.ball.speed.y > 0))
    {
        game.ball.speed.y =(game.ball.speed.y * -1);
    }

    game.ball.x = (game.ball.x + game.ball.speed.x);
    game.ball.y = (game.ball.y + game.ball.speed.y);

    /* code fonctionnel
    if (game.ball.x < canvas.width && game.ball.x > 0 && game.ball.y < canvas.height && game.ball.y > 0)
    {
        game.ball.x += game.ball.speed.x;
        game.ball.y += game.ball.speed.y;
    }
    else if(game.ball.x >= canvas.width)
    {
        //game.ball.x -= game.ball.speed.x * 100;
        //game.ball.speed.x *= -1;
        game.ball.speed.x *= -1;
        game.ball.x -= 4;
    }

    else if(game.ball.x <= 0)
    {
        game.ball.speed.x *= -1;
        game.ball.x += 4;
    }

    else if(game.ball.y >= canvas.height)
    {
        //game.ball.y -= game.ball.speed.y * 100;
        //game.ball.speed.y *= -1;
        game.ball.speed.y *= -1;
        game.ball.y -= 4;
    }

    else if(game.ball.y <= 0)
    {
        game.ball.speed.y *= -1;
        game.ball.y += 4;
    }


    else if(game.ball.y >= canvas.height || game.ball.y <= 0)
    {
        game.ball.y -= game.ball.speed.y;
    }

     */


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
                            x: 10,
                            y: 10
                        }
                }
        }

    draw();
    play();
});