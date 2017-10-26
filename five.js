
var chess=document.getElementById('chess');
var context=chess.getContext('2d');


context.strokeStyle="#BFBFBF";

var logo =new Image();
logo.src="logo.jpg";

logo.onload=function(){
   context.drawImage(logo, 0, 0, 450,450);
   drawChessBoard();

   context.beginPath();
   context.arc(200,200,100, 0 , 2 * Math.PI);
   context.closePath();
   var gradient= context.createRadialGradient();
   context.fillStyle="#636766";
   context.fill();
}
var drawChessBoard= function(){
for(var i=0;i<15;i++){
  context.moveTo(15 +i*30,15);
  context.lineTo(15+i*30,435);
  context.stroke();

  context.moveTo(15 ,15+i*30);
  context.lineTo(435,15+i*30);
  context.stroke();
  }
}