 var fixedRect,movingRect;
 function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400,200,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(0,0,0); 
  movingRect.x=World.mouseX;
  movingRect.y=world.mouseY;
  drawSprites();
}