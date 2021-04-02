var striker,strikerImg,computer,goal1,goal2,center,edge1,edge2,edge3,edge4,gameOver,restart;
var playerscore=0;
var compscore=0;

 var gamestate="serve";
 function preload(){
  strikerImg=loadImage("ball.png");
  overImg=loadImage("download.png");
  restartImg=loadImage("restart.png");
 }
function setup(){
  createCanvas(600,600);
  
  edges = createEdgeSprites();

  gameOver= createSprite(300,400,50,50);
  gameOver.scale=2;
  gameOver.visible=false
  restart= createSprite(300,100,50,50);
restart.scale=1;
  restart.visible=false
   edge1= createSprite(10,200,5,1200);
  edge1.shapeColor="white";
   edge2= createSprite(590,200,5,1200);
  edge2.shapeColor="white";
   edge3= createSprite(200,10,1200,5);
  edge3.shapeColor="white";
   edge4= createSprite(200,590,1200,5);
  edge4.shapeColor="white";
   goal1= createSprite(300,585,130,5);
  goal1.shapeColor="red";
   goal2= createSprite(300,15,130,5);
  goal2.shapeColor="red";
   striker= createSprite(300,300,18,18);
  striker.shapeColor="orange";
  striker.scale=0.05;
 
   player= createSprite(300,570,50,5);
  player.shapeColor="cyan";
   computer= createSprite(300,30,50,5);
  computer.shapeColor="cyan";
   center= createSprite(300,300,600,5);
  rectMode="CENTER";
  center.shapeColor="white";
  
   
 
}
function draw(){
  background("blue");
   drawSprites();
   textSize(21);
   fill("cyan")
   text(compscore,50,50);
   text(playerscore,550,550);

   if(gamestate=== "serve"){
     textSize(18);
    fill("cyan");
    textFont("georgia")
    text("WELCOME TO AIR HOCKEY BATTLE",175,250)
    text(" PRESS SPACE TO SERVE ",190,290);
    text("USE YOUR ARROW KEYS TO MOVE YOUR PLAYER",125,330)
   
  }
  
  
striker.addImage(strikerImg);
gameOver.addImage(overImg);
restart.addImage(restartImg);
striker.bounceOff(edge1);
striker.bounceOff(edge2);
striker.bounceOff(edge3);
striker.bounceOff(edge4);
striker.bounceOff(player);
striker.bounceOff(computer);
striker.bounceOff(edges[0]);
striker.bounceOff(edges[1]);
striker.bounceOff(edges[2]);
striker.bounceOff(edges[3]);

computer.bounceOff(edge1);
computer.bounceOff(edge2);

player.bounceOff(edge1);
player.bounceOff(edge2);

computer.x = striker.x


   if(keyIsDown(RIGHT_ARROW)){
    player.velocityX=10;
  }
  else if(keyIsDown(LEFT_ARROW)){
   player.velocityX=-10;
  }
  
  if(keyIsDown(32)&& gamestate === "serve"){
    serve();
    gamestate="play";

}
if(striker.isTouching(goal1)){
  reset();
  compscore=compscore+1;
  gamestate= "serve";
}
if(striker.isTouching(goal2)){
  reset();
  playerscore=playerscore+1;
  gamestate= "serve";
}

if(playerscore=== 5 || compscore===5){
  gamestate="over";
  gameOver.visible="true";
  restart.visible="true";
 
  
  
  edge1.visible=false
  edge2.visible=false
  edge3.visible=false
  edge4.visible=false
  goal1.visible=false
  goal2.visible=false 
  player.visible=false
  computer.visible=false
  striker.visible=false
 center.visible=false
}
if(mousePressedOver(restart)){
  resetCompletely();
}
}
function reset(){
  
 striker.x=300;
  striker.y=300;
  striker.velocityX=0;
  striker.velocityY=0;
  player.velocityX=0;
  player.velocityY=0;
  player.x=300;
  player.y=570;
 
}
function resetCompletely(){
  gamestate="serve";
  gameOver.visible=false
  restart.visible=false
  edge1.visible="true"
  edge2.visible="true"
  edge3.visible="true"
  edge4.visible="true"
  goal1.visible="true"
  goal2.visible="true"
  player.visible="true"
  computer.visible="true"
  striker.visible="true"
 center.visible="true"
 playerscore=0;
 compscore=0;
}
function serve(){
  
  striker.velocityX=8;
  striker.velocityY=8;
  
  computer.x = striker.x;
  
 
}