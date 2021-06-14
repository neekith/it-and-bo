var fixedRect, movingRect;
var v,b,f,g

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=3
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  
  v=createSprite(100,200,50,50)
  v.shapeColor="green"
  b=createSprite(200,200,50,50)
  b.shapeColor="green"
  f=createSprite(300,200,50,50)
  f.shapeColor="green"
  g=createSprite(400,200,50,50)
  g.shapeColor="green"
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,v)){
  movingRect.shapeColor="blue"
  v.shapeColor="red"
}
else{
  movingRect.shapeColor="green"
  v.shapeColor="green"

}
  bo(movingRect,fixedRect);



  drawSprites();
}