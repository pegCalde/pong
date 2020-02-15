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


document.addEventListener('DOMContentLoaded', function (){

let numberMAX_ball = 10;


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

