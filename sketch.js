
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper, paperImage;
var box1, box2, box3, box1Image;

function preload() {
  box1Image = loadImage("sprites/dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 680, 800, 20);
  paper = new Paper(100, 100, 20);
  box1 = new box(675, 660, 200, 20);
	box2 = new box(775, 620, 20, 100);
	box3 = new box(575, 620, 20, 100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  ground.display();
  paper.display();

  box1.display();
  box2.display();
  box3.display();

  image(box1Image, 590, 500, 180, 140);

  drawSprites();
 
}

function keyPressed() {

  if (keyCode === UP_ARROW) {
 
   Matter.Body.applyForce(paper.body,paper.body.position, {x:65, y:-65});
     
   }
 }