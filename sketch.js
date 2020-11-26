var backgroundImage 
var wall1,wall3,wall4,wall5,wall6 
var platform1,platform2
var hunter
var runner
var block1,block2,block3,block4
var star
var arrowGroup,starGroup
var score = 0
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
backgroundImage = loadImage("pictures/bg2.png")
hunterImage = loadAnimation("pictures/Mario_Hunter/hunter2/0.png","pictures/Mario_Hunter/hunter2/1.png", "pictures/Mario_Hunter/hunter2/2.png",
"pictures/Mario_Hunter/hunter2/3.png", "pictures/Mario_Hunter/hunter2/4.png", "pictures/Mario_Hunter/hunter2/5.png", "pictures/Mario_Hunter/hunter2/6.png",
"pictures/Mario_Hunter/hunter2/7.png", "pictures/Mario_Hunter/hunter2/8.png", "pictures/Mario_Hunter/hunter2/9.png", "pictures/Mario_Hunter/hunter2/10.png",
"pictures/Mario_Hunter/hunter2/11.png", "pictures/Mario_Hunter/hunter2/12.png", "pictures/Mario_Hunter/hunter2/13.png", "pictures/Mario_Hunter/hunter2/14.png",
"pictures/Mario_Hunter/hunter2/15.png", "pictures/Mario_Hunter/hunter2/16.png","pictures/Mario_Hunter/hunter2/36.png", "pictures/Mario_Hunter/hunter2/37.png","pictures/Mario_Hunter/hunter2/38.png",
"pictures/Mario_Hunter/hunter2/39.png", "pictures/Mario_Hunter/hunter2/40.png", "pictures/Mario_Hunter/hunter2/41.png", "pictures/Mario_Hunter/hunter2/42.png",
"pictures/Mario_Hunter/hunter2/43.png")

runnerImage = loadAnimation("pictures/runner/1.png","pictures/runner/2.png","pictures/runner/3.png","pictures/runner/4.png",
"pictures/runner/5.png","pictures/runner/6.png","pictures/runner/7.png","pictures/runner/8.png","pictures/runner/9.png",
"pictures/runner/10.png","pictures/runner/11.png","pictures/runner/12.png")

starImage = loadImage("pictures/star1.png")

arrowImage = loadImage("pictures/Mario_Hunter/arrow.png")
}

function setup(){
createCanvas(1600,780)

hunter = createSprite(140,60,50,50)
hunter.addAnimation("hunter",hunterImage)
hunter.scale = 0.27

runner = createSprite(180,80,50,50)
runner.addAnimation("runner",runnerImage)
runner.scale = 0.2

wall1 = createSprite(800,20,1500,20)
wall1.shapeColor= "yellow"
wall3 = createSprite(40,390,20,760)
wall3.shapeColor= "yellow"
wall4 = createSprite(800,760,1500,20)
wall4.shapeColor= "yellow"
wall5 = createSprite(1560,390,20,760)
wall5.shapeColor= "yellow"

platform1 = createSprite(800,110,1500,20)
platform1.shapeColor = "blue"
platform2 = createSprite(800,200,1500,20)
platform2.shapeColor = "#3944bc"
platform3 = createSprite(800,290,1500,20)
platform3.shapeColor = "#281e5d"
platform4 = createSprite(800,380,1500,20)
platform4.shapeColor = "#1338be"
platform5 = createSprite(800,470,1500,20)
platform5.shapeColor = "#3944bc"
platform6 = createSprite(800,560,1500,20)
platform6.shapeColor = "yellow"
platform7 = createSprite(800,650,1500,20)
platform7.shapeColor = "orange"
platform8 = createSprite(800,740,1500,20)
platform8.shapeColor = "red"

block1 = createSprite(1528,100,20,50)
block1.visible = false

block2 = createSprite(1528,190,20,50)
block2.visible = false

block3 = createSprite(1528,280,20,50)
block3.visible = false

block4 = createSprite(1528,370,20,50)
block4.visible = false

block5 = createSprite(1528,460,20,50)
block5.visible = false

block6 = createSprite(1528,550,20,50)
block6.visible = false

block7 = createSprite(1528,640,20,50)
block7.visible = false

block8 = createSprite(1528,730,20,50)
block8.visible = false

arrowGroup = new Group()
starGroup = new Group()

}

function draw(){
background(backgroundImage)

if(gameState === PLAY){

if(keyDown("RIGHT_ARROW")){
    runner.x = runner.x+20
}
if(keyDown("UP_ARROW")){
    hunter.y = hunter.y-3
}

if(keyDown("DOWN_ARROW")){
    hunter.y = hunter.y+3
}

if (runner.isTouching (block1)){
    runner.x = 128
    runner.y = 160
}
if (runner.isTouching(block2)){
    runner.x = 128
    runner.y = 250
}

if (runner.isTouching(block3)){
    runner.x = 128
    runner.y = 340
}

if (runner.isTouching(block4)){
    runner.x = 128
    runner.y = 430
}

if (runner.isTouching(block5)){
    runner.x = 128
    runner.y = 520
}

if (runner.isTouching(block6)){
    runner.x = 128
    runner.y = 610
}
if (runner.isTouching(block7)){
    runner.x = 128
    runner.y = 700
}
if (runner.isTouching(block8)){
    runner.x = 180
    runner.y = 80
}

if (keyDown("space")){
     createArrow();
    
    
}

hunter.bounceOff(wall1)
hunter.bounceOff(platform8)

Star();

if(arrowGroup.isTouching(runner)){
    
    gameState = END;
}

if(arrowGroup.isTouching(starGroup)){
score = score+1
starGroup.destroyEach()
}

}

if (gameState == END){
    runner.velocityX = 0
    hunter.velocityY = 0
    
    arrowGroup.setVelocityXEach(0);
    starGroup.setVelocityXEach(0);
    starGroup.setLifetimeEach(-1);
    arrowGroup.setLifetimeEach(-1);
    starGroup.destroyEach()
    arrowGroup.destroyEach()
    runner.destroy()
    hunter.destroy()

}
drawSprites();
textSize(20)
fill("red")
text("score: "+ score, 1500,50)

if(gameState === END){
    textSize(100)
    fill("red")
    text("GAME OVER",600,390)
    textSize (100)
    fill("red")
    text("SCORE: "+ score, 600,480)
}
}

function Star(){

    if(frameCount % 100 === 0){

        star = createSprite(4550,60,50,40)
        star.addImage(starImage)
        star.scale = 0.05
        star.velocityX = -5
        
        star.x = Math.round(random(1599,1600))
        star.y = Math.round(random(50,710)) 
        star.lifetime = 400; 

        starGroup.add(star)
    }
}

function createArrow(){
    var arrow = createSprite(300, 200);
    arrow.addImage(arrowImage);
    arrow.y = hunter.y
    arrow.velocityX = 10;
    arrow.lifetime = 400;
    arrow.scale = 0.7

    arrowGroup.add(arrow)
}

function keyPressed(){
    if(keyCode === 32){
        createArrow()
    }
}