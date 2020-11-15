var bullet,thickness,wall;
var speed,weight;
var tempwall;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapecolour=colour(80,80,80);
  bullet=createSprite(1200, 200, thickness, height/2);
  thickness=random(22,83);
  bullet.speed=random(223,321);
  bullet.weight=random(30,52);
}

function draw() {
  background("green"); 
  bullet.collide(wall); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapecolour=colour(255,0,0);
    }
    if(damage<10){
      wall.shapecolour=colour(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet1,wall1){
bulletRightEdge=bullet1.x+bullet1.width;
wallLeftEdge=wall1.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
else{
  return false;
}
}
