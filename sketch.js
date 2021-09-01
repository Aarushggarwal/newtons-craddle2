
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5
var roofObject
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject=new roof(width/2,height/4,width/7,20); 
	bobDiameter=30; 
	startBobPositionX=width/2;
	 startBobPositionY=height/4+500; 
	 bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	 bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	 bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	 bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	 bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	 rope1=new chain(bob1.body,roofObject.body,-bobDiameter*2,0)
	 rope2=new chain(bob2.body,roofObject.body,-bobDiameter,0)
	 rope3=new chain(bob3.body,roofObject.body,0,0)
	 rope4=new chain(bob4.body,roofObject.body,bobDiameter,0)
	 rope5=new chain(bob5.body,roofObject.body,bobDiameter*2,0)
	//Create the Bodies Here.
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roofObject.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW)
 { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-10}); }
	 }



