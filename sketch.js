function setup() {
 
  createCanvas(800,400);
  movingRect = createSprite(200,200,80,50);
  movingRect.shapeColour = "green";
  fixedRect = createSprite(300,200,100,60);
  fixedRect.shapeColour = "green";
}

function draw() {
  background("black");

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if((movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2)
 && (fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) 
 && (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
 && (fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2))  
  {

 movingRect.shapeColour = "red";
 fixedRect.shapeColour = "red";


 }  

 else{
  fixedRect.shapeColour = "blue";
  movingRect.shapeColour = "blue";


 }
  drawSprites();
}