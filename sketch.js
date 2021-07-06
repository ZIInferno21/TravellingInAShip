var sea;
var ship;

function preload(){
seaimage = loadImage("sea.png")
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,400,400,100);
  sea.addImage = (seaimage);

  ship = createSprite(30,370,40,60);
  ship.addAnimation(shipimage);
}

function draw() {
  background("white");
  
  drawSprites();
}