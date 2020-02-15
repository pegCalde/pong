game.ball = undefined;

function move(balle)
{
    //todo résoudre le move
    for (let i = 1; i <= numberMAX_ball; i ++)
    {
        balle.x = (balle.x + balle.speed_x);
        balle.y = (balle.y + balle.speed_y);
        // game.ball.x = (game.ball.x + game.ball.speed.x);
        // game.ball.y = (game.ball.y + game.ball.speed.y);

    }

    //Tester collisions mur ball made in Pantz
    if((balle[0].x < 0) && (balle[0].speed.x < 0))
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

    /*
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


    //TEST COLLISION NOS BALLES EN REEL
    d2 = (game.ball.x - game.ball2.x) * (game.ball.x - game.ball2.x) + (game.ball.y - game.ball2.y) * (game.ball.y - game.ball2.y);
    if (d2 > (game.ball.r + game.ball2.r) * (game.ball.r + game.ball2.r))
    {

    }
    else
    {

        //Premiere gestion direction rebond

        game.ball.speed.x = (game.ball.speed.x * -1);
        game.ball.speed.y = (game.ball.speed.y * -1);
        game.ball2.speed.x = (game.ball2.speed.x * -1);
        game.ball2.speed.y = (game.ball2.speed.y * -1);

        //Deuxieme gestion direction rebond
        //game.


    }
     */

}