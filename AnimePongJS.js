var canvas = document.getElementById("pingPong");
var ctx = canvas.getContext("2d");

var imgH = 200, imgW = 150; //Player1 character properties.
var x = 0, y = canvas.height/2-imgH/2; //Starting positions.
var speed = 12; //Speed at which the paddles move.

var playerImg = document.createElement("img");
playerImg.src = "test1.jpg";


ctx.drawImage(playerImg,x,y,imgW,imgH);
/*
ctx.beginPath();
ctx.moveTo(500,0);
ctx.lineTo(500,700);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0,350);
ctx.lineTo(1000,350);
ctx.stroke();
ctx.closePath();
*/


//tempBall
ctx.moveTo(canvas.width/2, canvas.height/2);
ctx.fillStyle = "purple";
ctx.arc(canvas.width/2, canvas.height/2,10,0,Math.PI*2);
ctx.fill();

window.addEventListener("keydown", function(key){ //movement.
	var code = key.keyCode;
	if(code == 83 && y <= (canvas.height - imgH) ){ //Down
		y+=speed;
		ctx.clearRect(x,y,canvas.width,canvas.height);
		ctx.drawImage(playerImg,x,y,imgW,imgH);;
	}

	else if (code == 87 && y >= 0){//Up
		y-=speed;
		ctx.clearRect(x,y,canvas.width,canvas.height);
		ctx.drawImage(playerImg,x,y,imgW,imgH);;
	}
	
	ctx.moveTo(canvas.width/2, canvas.height/2);
	ctx.fillStyle = "purple";
	ctx.arc(canvas.width/2, canvas.height/2,10,0,Math.PI*2);
	ctx.fill();


});