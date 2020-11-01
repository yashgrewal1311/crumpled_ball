
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin (700, 600, 200, 20);
	dustbin2 = new Dustbin (740, 600, 20, 100);
	dustbin3 = new Dustbin (670, 600, 20, 100);
	paperObject= new Paper (700, 550);

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	pinkBoxbottom = createSprite( width/2, 650, 200, 20);
	pinkBoxbottom.shapeColor = "pink";

	pinkBoxright = createSprite (510, 610, 20, 100);
	pinkBoxright.shapeColor = "pink";

	pinkBoxleft = createSprite(290, 610, 20, 100);
	pinkBoxleft.shapeColor = "pink";

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	pinkBoxbottom = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true});
	
	pinkBoxright = Bodies.rectangle(510, 610, 20, 100, {isStatic:true});

	pinkBoxleft = Bodies.rectangle(290, 610, 20, 100, {isStatic:true});
	
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  ellipseMode(RADIUS);
  ellipse(paperObject.position.x, paperObject.position.y, 20, 20);


  drawSprites();
 
}



