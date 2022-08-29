
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 60
var angle2 = 60
var angle3 = 60


function preload() {
	
}

function setup() {
	createCanvas(1350, 657);

	engine = Engine.create();
	world = engine.world;

	plane_options = {
	 isStatic: true
	};

	rotator_options = {
	 isStatic: true
	};

	particle_options = {
	restituition: 0.6,
	friction: 1.5
	};

	plane = Bodies.rectangle(675,647,1350,20,plane_options);
    World.add(world,plane);

	block1 = Bodies.rectangle(500,400,200,20,plane_options);
    World.add(world,block1);
	block2 = Bodies.rectangle(850,400,200,20,plane_options);
    World.add(world,block2);

	rotator1 = Bodies.rectangle(675,200,200,20,rotator_options);
    World.add(world,rotator1);
	rotator2 = Bodies.rectangle(675,200,200,20,rotator_options);
    World.add(world,rotator2);
	rotator3 = Bodies.rectangle(675,200,200,20,rotator_options);
    World.add(world,rotator3);

	particle1 = Bodies.circle(625,10,10,particle_options);
    World.add(world,particle1);
	particle2 = Bodies.circle(650,10,10,particle_options);
    World.add(world,particle2);
	particle3 = Bodies.circle(675,10,10,particle_options);
    World.add(world,particle3);
	particle4 = Bodies.circle(700,10,10,particle_options);
    World.add(world,particle4);
	particle5 = Bodies.circle(725,10,10,particle_options);
    World.add(world,particle5);

	Engine.run(engine);
    rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  
  fill("black");
  rect(plane.position.x,plane.position.y,1350,20);

  fill("white");
  rect(block1.position.x,block1.position.y,200,20);
  rect(block2.position.x,block2.position.y,200,20);
  
  Matter.Body.rotate(rotator1, angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,200,20);
  pop();
  angle1 += 6.0;

  Matter.Body.rotate(rotator2, angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,200,20);
  pop();
  angle2 -= 9.0;

  Matter.Body.rotate(rotator3, angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,200,20);
  pop();
  angle3 += 13.0;

  fill("cyan");
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);

  drawSprites();
}



