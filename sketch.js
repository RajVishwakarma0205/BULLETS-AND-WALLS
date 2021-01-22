
var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  thickness=random(22,38)
  weight=random(30,52);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white"

  bullet=createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255,255,255);

}

function draw() {
  background(50,50,50); 

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor.color(0,255,0);
    }
  }

  
 
  drawSprites();
}
function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
   else {
    return false;
   }
 
}


  
  
