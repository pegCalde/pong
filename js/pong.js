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
    ctx.arc(game.ball2.x, game.ball2.y, game.ball2.r, 0, Math.PI * 2, false);
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
    /*
    //TEST gestion collision, hitbox en carré
    if (game.ball.x + game.ball.r <= game.ball2.x + game.ball2.r)
    {
        game.ball.speed.x = (game.ball.speed.x * -1);
    }

    if (game.ball.y + game.ball.r <= game.ball2.y + game.ball2.r)
    {
        game.ball.speed.y = (game.ball.speed.y * -1);
    }

     */

    //Tester collisions mur ball made in Pantz
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


    //Tester bouger ball
    game.ball.x = (game.ball.x + game.ball.speed.x);
    game.ball.y = (game.ball.y + game.ball.speed.y);

    //Tester collisions mur ball2 made in Pantz
    if((game.ball2.x < 0) && (game.ball2.speed.x < 0))
    {
        game.ball2.speed.x = (game.ball2.speed.x * -1);
    }
    if((game.ball2.x > canvas.width) && (game.ball2.speed.x > 0))
    {
        game.ball2.speed.x = (game.ball2.speed.x * -1);
    }
    if((game.ball2.y < 0) && (game.ball2.speed.y < 0))
    {
        game.ball2.speed.y = (game.ball2.speed.y * -1);
    }
    if((game.ball2.y > canvas.height) && (game.ball2.speed.y > 0))
    {
        game.ball2.speed.y =(game.ball2.speed.y * -1);
    }

    //Test bouger ball2
    game.ball2.x = (game.ball2.x + game.ball2.speed.x);
    game.ball2.y = (game.ball2.y + game.ball2.speed.y);

    //Collisions deux cercles (exemple)
    /*
    bool Collision(Cercle C1,Cercle C2)
    {
        int d2 = (C1.x-C2.x)*(C1.x-C2.x) + (C1.y-C2.y)*(C1.y-C2.y);
        if (d2 > (C1.rayon + C2.rayon)*(C1.rayon + C2.rayon))
            return false;
        else
            return true;
    }

    //TEST COLLISION NOS BALLES
    bool Collision()
    {
        d2 = (game.ball.x - game.ball2.x) * (game.ball.x - game.ball2.x) + (game.ball.y - game.ball2.y) * (game.ball.y - game.ball2.y);
        if (d2 > (game.ball.r + game.ball2.r) * (game.ball.r + game.ball2.r))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    */


    //TEST COLLISION NOS BALLES EN REEL
    d2 = (game.ball.x - game.ball2.x) * (game.ball.x - game.ball2.x) + (game.ball.y - game.ball2.y) * (game.ball.y - game.ball2.y);
    if (d2 > (game.ball.r + game.ball2.r) * (game.ball.r + game.ball2.r))
    {

    }
    else
    {
        game.ball.speed.x = (game.ball.speed.x * -1);
        game.ball.speed.y = (game.ball.speed.y * -1);
        game.ball2.speed.x = (game.ball2.speed.x * -1);
        game.ball2.speed.y = (game.ball2.speed.y * -1);
    }


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
                    r: 10,
                    speed:
                        {
                            x: 10,
                            y: 10
                        }
                },
            ball2:
                {
                    x: 200,
                    y: 200,
                    r: 10,
                    speed:
                        {
                            x: 5,
                            y: 5
                        }
                }
        }

    draw();
    play();
});