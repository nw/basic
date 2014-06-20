
var field = {
  top: 0
, left: 0
, width: 100
, height: 100 };

var ball = {x: 150, y: 250, ob: {}};

var result = isBallInBounds(ball);
console.log(result, ball.ob);

function isBallInBounds(ball){
    ball.ob = {};
    if(ball.x < field.left){
        ball.ob.left = true;
    }
    if(ball.x > field.left + field.width){
        ball.ob.right = true;
    }
    if(ball.y < field.top){
        ball.ob.top = true;
    }
    if(ball.y > field.top + field.height){
        ball.ob.bottom = true;
    }

    var isOut = false;
    for(var side in ball.ob){
        if(ball.ob[side]) isOut = true;
    }
    return !isOut;
}