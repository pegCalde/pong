let speed;
let canvas;
let game;
let ctx;
let balle;
let balle2;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
balle = new Ball(50, 30, 10, 4, 5);
balle2 = new Ball(10, 20, 10, 5, 5);

drawBackground(ctx, canvas, 0, 0);
drawBalle(ctx, balle);
drawBalle(ctx, balle2);

requestAnimationFrame(play);

console.log(balle);
console.log(balle2);