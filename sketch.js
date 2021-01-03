
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

    paper = new Paper(40,200,10);
    dustbin = new Dustbin(600,620,100,120)
    ground = new Ground(400,690,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
 
  dustbin.display();
  ground.display();
  paper.display();
  
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:11,y:-15});
  }
}

