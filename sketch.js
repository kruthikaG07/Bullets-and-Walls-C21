var bullet, wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52); 
  bullet = createSprite(50,200, 100, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  thickness=random(22,83);
}

function draw() {
  background(0,0,0); 
if(hasCollided(bullet,wall)){
  console.log("hasCollided")
  bullet.velocityX=0;
  var damage=0.5 *weight * speed * speed/(thickness *thickness * thickness);
  if(damage>10){
    wall.shapeColor="red"
  }

if(damage<10){
  wall.shapeColor="green";
}
}
drawSprites();
}


function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false; 
}


