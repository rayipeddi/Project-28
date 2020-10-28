var tree;
var boy1;
var stone;
var boyIMG;
var mango1, mango2, mango3, mango5, mango6;
var rubber;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyIMG = loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(800,500,450,450)
	boy1= new Boy(150,625,200,200)
	stone = new Stone(75,575,30)
	mango1 = new Mango(700,400,50)
	mango2 = new Mango(725,470,50)
	mango3 = new Mango(800,350,50)
	mango4 = new Mango(800,450,50)
	mango5 = new Mango(870,390,50)
	mango6 = new Mango(890,450,50); 
	rubber = new SlingShot(stone.body,{x: 200,y:625})
	ground = new Ground(600,height,1200,20);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()	
  mango6.display()
  boy1.display() 
  stone.display()
  rubber.display()
  ground.display()
  detectCollision(stone,mango1);

	detectCollision(stone,mango2);

	detectCollision(stone,mango3);

	detectCollision(stone,mango4);

	detectCollision(stone,mango5);

  //drawSprites();
}
function detectCollision(lstone,lmango) {
	var mangoBodyPosition=lmango.body.position
	var stoneBodyPosition=lstone.body.position
	
	var distance=dist(lmango.body.position.x,lmango.body.position.y,lstone.body.position.x,lstone.body.position.y)
	if(distance<=lmango.radius+lstone.radius-5){
	Matter.Body.setStatic(lmango.body,false);
	}	
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubber.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rubber.attach(stone.body)
    }
}