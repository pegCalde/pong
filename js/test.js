posXBalletBall2 = game.ball.x - game.ball2.x;

posYBalletBall2 = game.ball.y - game.ball2.y;

var DistanceEntreBallEt2 = Math.floor(Math.sqrt( (Math.pow(posXBalletBall2,2)) + (Math.pow(posYBalletBall2,2)) ));

var NormalizedXBalletBall2 = Math.floor((posXBalletBall2 / DistanceEntreBallEt2));
var NormalizedYBalletBall2 = Math.floor((posYBalletBall2 / DistanceEntreBallEt2));

var NormalizedScalaireBall = ( (NormalizedXBalletBall2 * game.ball.vx) + (NormalizedYBalletBall2 * game.ball.vy));
var NormalizedScalaireBall2 = ( (NormalizedXBalletBall2 * game.ball2.vx) + (NormalizedYBalletBall2 * game.ball2.vy));

var ScalairizedXBall = (NormalizedXBalletBall2 * NormalizedScalaireBall);
var ScalairizedYBall = (NormalizedYBalletBall2 * NormalizedScalaireBall);
var ScalairizedXBall2 = (NormalizedXBalletBall2 * NormalizedScalaireBall2);
var ScalairizedYBall2 = (NormalizedYBalletBall2 * NormalizedScalaireBall2);

var DirectionRebondX = Math.floor(ScalairizedXBall2 - ScalairizedXBall);
var DirectionRebondY = Math.floor(ScalairizedYBall2 - ScalairizedYBall);

game.ball.speed.x = game.ball.speed.x + DirectionRebondX
game.ball.speed.y = game.ball.speed.y + DirectionRebondY
game.ball2.speed.x = game.ball2.speed.x - DirectionRebondX
game.ball2.speed.y = game.ball2.speed.y - DirectionRebondY