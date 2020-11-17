var wall, car;
var deformation, speed, weight;

function setup() {
  createCanvas(1600, 400);

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "brown";

  car = createSprite(200, 200, 100, 100);
  car.shapeColor = "blue";
  car.velocityX = speed;
  car.scale = 0.5;

  speed = Math.round(random(55,90));
  weight = Math.round(random(400, 1500));

 deformation = 0.5*speed*speed/22500;

}
 
function draw() {
  background(255,255,255); 

  car.velocityX = 20;

  if(wall.x-car.x < (car.width + wall.width)){
    if(deformation<100){
      car.shapeColor = "green";
    }
  
    if(deformation>100 && deformation<180){
      car.shapeColor = "yellow";
    }
  
    if(deformation>180){
      car.shapeColor = "red";
    }
    }
  
  

  drawSprites();
}
