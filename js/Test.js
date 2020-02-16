let tabBall = new Array();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function play()
{
/*    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    //ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(tabBall[1].x, tabBall[1].y, tabBall[1].r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(tabBall[2].x, tabBall[2].y, tabBall[2].r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(tabBall[3].x, tabBall[3].y, tabBall[3].r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(tabBall[4].x, tabBall[4].y, tabBall[4].r, 0, Math.PI * 2, false);
    ctx.fill();
    move(tabBall[1]);
    move(tabBall[2]);
    move(tabBall[3]);
    move(tabBall[4]);*/

    drawBackground(ctx, canvas, 0, 0);

    for (i = 1; i <= numberMAX_ball; i ++)
    {
        move(tabBall[i]);


        drawBalle(ctx, tabBall[i]);


    }

/*

    drawBackground(ctx, canvas, 0, 0);
    beginPath(ctx);
    for (i = 1; i <= numberMAX_ball; i ++)
    {
        move(tabBall[i]);


        drawBalle(ctx, tabBall[i]);


    }

    fill(ctx);
*/
    requestAnimationFrame(play);
}


document.addEventListener('DOMContentLoaded', function (){




drawBackground(ctx, canvas, 0, 0);

for (i = 1; i <= numberMAX_ball; i ++)
{
    //x = Math.floor((Math.random() * 635) + 5);
    //y = Math.floor((Math.random() * 475) + 5);
    speedx = Math.floor((Math.random() * 5) - 5);
    speedy = Math.floor((Math.random() * 5) - 5);
    tabBall[i] = new Ball(10 * i, 10 * i, 5, speedx, speedy);
    drawBalle(ctx, tabBall[i]);
}

play();




});


// balle = new Ball(50, 30, 10, 4, 5);
// console.log(number_ball);
// balle2 = new Ball(10, 20, 10, 5, 5);
// console.log(number_ball);
// balle3 = new Ball(450, 450, 10, 5, 5);
// console.log(number_ball);
// balle4 = new Ball(350, 350, 10, 5, 5);
// console.log(number_ball);



// drawBalle(ctx, balle);
// drawBalle(ctx, balle2);
// drawBalle(ctx, balle3);

//requestAnimationFrame(play);

