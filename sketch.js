var player;
var alienIntro;
var ghost1,ghost2;
var scaryMonkey;
//var PLAY = 1
//var END = 0
var gameState = "play"
var lives = 3

function preload(){
ghost_1Image = loadImage("assets/ghost1.jpg");
ghost_2Image = loadImage("assets/ghost2.jpg");
player_img = loadImage("assets/sprite_0.png");
human_img = loadImage("assets/stickFigure3.jpg");
restart_img = loadImage("assets/restart.png");
gameover_img = loadImage("assets/gameoverlol.jpg");


ghost3_img = loadImage("assets/blueGhost.jpg");

scaryMonkey = loadImage("assets/scaryMonkey.jpg");

//alienMusic = loadSound("melody.mp3")
defeat = loadSound("finish.mp3")

}






function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 //stroke(10)
 // fill ("#00FFFF")
  mazeLeftEdge = createSprite(48,500,20,900);
  mazeLeftEdge.shapeColor= "#00FFFF"
  mazeUpEdge = createSprite(338,40,600,20)
  mazeUpEdge.shapeColor = "#00FFFF"
  mazeRightEdge = createSprite(628,500,20,900)
  mazeRightEdge.shapeColor = "#00FFFF"
  mazeBottomEdge = createSprite(338,390,600,20)
  mazeBottomEdge.shapeColor = "#00FFFF"


  line1 = createSprite(338,90,500,5);
  line1.shapeColor= "#66FF00"
line2 = createSprite(250,143,5,100)
line2.shapeColor = "#66FF00"
line3 = createSprite(197,143,100,5);
line3.shapeColor = "#66FF00"
line4 = createSprite(150,190,5,100);
line4.shapeColor = "#66FF00"
line5 = createSprite(255,300,250,5);
line5.shapeColor = "#66FF00";
line6 = createSprite(300,200,5,150);
line6.shapeColor = "#66FF00";
line7 = createSprite(450,200,5,150);
line7.shapeColor = "#66FF00";
line8 = createSprite(530,154,145,5);
line8.shapeColor= "#66FF00"
line9 = createSprite(144,323,5,20)
line9.shapeColor = "#66FF00"
line10= createSprite(338,350,450,5);
line10.shapeColor = "#66FF00"

wall = createSprite(84,149,30,5)
wall.visible = false

wall1 = createSprite(392,112,30,5)
wall1.visible = false

wall2 = createSprite(384,273,30,5)
wall2.visible = false

wall3 = createSprite(514,321,5,30)
wall3.visible = false

wall4 = createSprite(328,319,5,30);
wall4.visible = false

wall5 = createSprite(576,173,50,5);
wall5.visible = false

wall6 = createSprite(568,328,50,5);
wall6.visible = false

gameEnd = createSprite(327,138,20,20);
gameEnd. addImage("gameover",gameover_img);
gameEnd.scale = 0.25
gameEnd.visible = false



mainCharacter = createSprite (569,70,20,20)
mainCharacter.addImage("player", player_img)
mainCharacter.scale= 0.09


ghost1 = createSprite(91,325,10,10)
ghost1.addImage("ghost",ghost_1Image)
ghost1.scale = 0.07
ghost1.velocityY = -2



ghost2 = createSprite(388,139,10,10)
ghost2.addImage("extraGhost",ghost_2Image)
ghost2.scale = 0.07
ghost2.velocityY = -2


ghost3 = createSprite(336,321,10,10)
ghost3.addImage("blueGhost",ghost3_img)
ghost3.scale = 0.07
ghost3.velocityX = 2




headlessHuman = createSprite(576,220,10,10)
headlessHuman.addImage("human",human_img)
headlessHuman.scale = 0.07
headlessHuman.velocityY = -2


restart = createSprite(321,221,20,20);
restart.addImage("restart",restart_img);
restart.scale = 0.5
restart.visible = false




}


function draw() {
  background(255,255,255);
 // alienMusic.play()
 defeat.play()
text (mouseX+","+mouseY,mouseX,mouseY)
text ("lives:"+lives, 71,15)
if(gameState=== "play"){




ghost1.bounceOff(wall)
ghost1.bounceOff(mazeBottomEdge)

ghost2.bounceOff(wall1)
ghost2.bounceOff(wall2)

ghost3.bounceOff(wall3)
ghost3.bounceOff(wall4)

headlessHuman.bounceOff(wall5)
headlessHuman.bounceOff(wall6)




if (keyIsDown(LEFT_ARROW)) {
  mainCharacter.x -= 2.5
}

if(keyIsDown(RIGHT_ARROW)){
  mainCharacter.x +=2.5
}
 

if(keyIsDown(UP_ARROW)){
  mainCharacter.y -=2.5
}

if(keyIsDown(DOWN_ARROW)){
  mainCharacter.y+=2.5
}
if(mainCharacter.isTouching(ghost1)||mainCharacter.isTouching(ghost2)||mainCharacter.isTouching(ghost3)||mainCharacter.isTouching(headlessHuman)){
  mainCharacter.x = 569
  mainCharacter.y = 70
  lives = lives -1;
  if(lives<=0){
  gameEnd .visible = true
    restart.visible = true
 ghost1.velocityY = 0
  ghost2.velocityY = 0
  ghost3.velocityX = 0
headlessHuman.velocityY = 0
if(mousePressedOver(restart_img)){
  gameState = "reset"
}

}
}
  drawSprites(); 

}
if(gameState === "reset"){
  gameState = "play"
}


}

















