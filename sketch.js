const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImg,  snowman, snowmanImg;
var snow1 = [];

function preload (){

  bgImg = loadImage("snow1.jpg");
  snowmanImg = loadImage("snowman.png");

}

function setup() {

  
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

  snowman = createSprite(350,250,50,50);
  snowman.addImage (snowmanImg);
  snowman.scale = 0.1;
  //console.log ("test",snowman.scale);
}

function draw() {

  background(bgImg); 
  Engine.update(engine);

  if(frameCount % 50 === 0){
    snow1.push(new SnowFall (random(0,800),10,75,75));
  }

  for (var i=0;i<snow1.length;i++){
    snow1[i].display();
  }

  drawSprites();

}