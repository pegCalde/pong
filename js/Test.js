let speed;
let canvas;
let game;
let ctx;


canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");


drawBackground(ctx, canvas, 0, 0);

for (let i = 1; i <= numberMAX_ball; i ++)
{
    tabBall[i] = new Ball(10 * i, 10 * i, 5, 5, 5);
    drawBalle(ctx, tabBall[i]);
    //move(tabBall[i]);
}

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

console.log(tabBall[0]);
console.log(tabBall[1]);
console.log(tabBall[2]);