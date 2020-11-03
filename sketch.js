
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);

	ground1 = new Ground(240,800,480,20);
	ground2 = new Ground(480,400,20,800);
	ground3 = new Ground(0,400,20,800);
	ground4 = new Ground(240,0,480,20);

	div1 = new Divisions(240,790,475,20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  div1.display();
  drawSprites();
 
}



