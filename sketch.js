var fixedSprite1, movingSprite



function setup() {
  createCanvas(800,400);
  
  fixedSprite1=createSprite(400, 200, 50, 50);
  fixedSprite1.shapeColor="green";
  fixedSprite1.debug=true;

  movingSprite=createSprite(375, 170, 50, 50);
  movingSprite.shapeColor="green";
  movingSprite.debug=true;


}

function draw() {
  background(255,255,255);
  movingSprite.x=mouseX;
  movingSprite.y=mouseY;
  
  if (movingSprite.x-fixedSprite1.x <=movingSprite.width/2+fixedSprite1.width/2 &&
   fixedSprite1.x - movingSprite.x <=fixedSprite1.width/2+movingSprite.width/2 &&
   fixedSprite1.y - movingSprite.y <=fixedSprite1.height/2+movingSprite.height/2 &&
   movingSprite.y- fixedSprite1.y <=movingSprite.height/2+fixedSprite1.height/2) {
   
    fixedSprite1.shapeColor="red";
    movingSprite.shapeColor="red";
   }
   else {
    fixedSprite1.shapeColor="green";
    movingSprite.shapeColor="green";
   }
  drawSprites();

}