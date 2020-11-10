var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
monkey=createSprite(80, 315,20, 20);

monkey .addAnimation("moving" , monkey_running)
monkey. scale=0.1

 

ground = createSprite(400, 350,5000, 10);
ground. velocityX=-4;

ground. x=ground.width/2
 
FoodGroup = createGroup();

}


function draw() {
createCanvas(600,600);
  background(220);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -12;

    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  var survivalTime=0;

stroke("white");

textSize(20);

fill("white");

text("Score:", + score, 500,50);

stroke("black");

textSize(20);

fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50);

 

 foods();
  obstacles();
  drawSprites();
}


function foods(){
 FoodGroup.add(banana);
  
  if (frameCount % 80 === 0){
   banana = createSprite(450,320,10,10);
   banana.addImage(banannaImage);
    banana.velocityX=-3;
    banana.lifetime=150;
    banana=Math.round(random(125,200));
bananna.addImage(banannaImage);
  
  }

function obstacles(){
  
  
  
  
  
  
}
  }
