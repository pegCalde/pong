
var canvas = document.getElementById("canvas");
var game;
var Rect_x = 0;
var Rect_y = 0;
var Ball_speed_x = 10;
var Ball_speed_y = 10;
var ctx = canvas.getContext("2d");

var Ball = function ()
{
    let x = Math.random() * (canvas.height - 0);
    let y = Math.random() * (canvas.weight - 0);
    let r = 20;
    let vx = Ball_speed_x;
    let vy = Ball_speed_y;

    this.get_x = function ()
    {
        return this.x;
    }
    this.get_y = function ()
    {
        return this.y;
    }
    this.get_r = function ()
    {
        return this.r;
    }
    this.get_vx = function ()
    {
        return this.vx;
    }
    this.get_vy = function ()
    {
        return this.vy;
    }

    this.set_x = function (coor_x)
    {
        this.x = coor_x;
    }
    this.set_y = function (coor_y)
    {
        this.y = coor_y;
    }
    this.set_r = function (rayon)
    {
        this.r = rayon;
    }
    this.set_vx = function (vit_x)
    {
        this.vx = vit_x;
    }
    this.set_vy = function (vit_y)
    {
        this.vy = vit_y;
    }
}

var ball1 = new Ball();
var ball2 = new Ball();

function draw()
{
    //var canvas = document.getElementById("canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(Rect_x,Rect_y, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    //ctx.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
    ctx.arc(ball1.get_x(), ball1.get_y(), ball1.get_r(), 0, Math.PI * 2, false);
    ctx.arc(ball2.get_x(), ball2.get_y(), ball2.get_r(), 0, Math.PI * 2, false);
    ctx.fill();

}

function play()
{
    draw();
    move(ball1);
    move(ball2);

    requestAnimationFrame(play);
}

function move(ball)
{
    if((ball.get_x() < 0) && (ball.get_vx() < 0))
    {
        ball.set_vx(ball.get_vx() * -1);
    }
    if((ball.get_x() > canvas.width) && (ball.get_vx() > 0))
    {
        ball.set_vx(ball.get_vx() * -1);
    }
    if((ball.get_y() < 0) && (ball.get_vy() < 0))
    {
        ball.set_vy(ball.get_vy() * -1);
    }
    if((ball.get_y() > canvas.width) && (ball.get_vy() > 0))
    {
        ball.set_vy(ball.get_vy() * -1);
    }

    ball.set_x(ball.get_x() + ball.get_vx());
    ball.set_y(ball.get_y() + ball.get_vy());
    /*
    if((game.ball.x<0) && (game.ball.speed.x<0))
    {
        game.ball.speed.x*=-1;
    }
    if((game.ball.x>canvas.width) && (game.ball.speed.x>0))
    {
        game.ball.speed.x*=-1;
    }
    if((game.ball.y<0) && (game.ball.speed.y<0))
    {
        game.ball.speed.y*=-1;
    }
    if((game.ball.y>canvas.height) && (game.ball.speed.y>0))
    {
        game.ball.speed.y*=-1;
    }
    game.ball.x += game.ball.speed.x;
    game.ball.y += game.ball.speed.y;
    */

                                                                                        /*
                                                                                        if (game.ball.x < canvas.width && game.ball.x > Rect_x && game.ball.y < canvas.height && game.ball.y > Rect_y)
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

                                                                                        else if(game.ball.x <= Rect_x)
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

                                                                                        else if(game.ball.y <= Rect_y)
                                                                                        {
                                                                                            game.ball.speed.y *= -1;
                                                                                            game.ball.y += 4;
                                                                                        }


                                                                                        else if(game.ball.y >= canvas.height || game.ball.y <= Rect_y)
                                                                                        {
                                                                                            game.ball.y -= game.ball.speed.y;
                                                                                        }
                                                                                        */

}

document.addEventListener('DOMContentLoaded', function ()
{
    /*
    game=
        {
            ball:
                {
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                    r: 20,
                    speed:
                        {
                            x: Ball_speed_x,
                            y: Ball_speed_y
                        }
                }
        }
    */

    draw();
    play();
});

