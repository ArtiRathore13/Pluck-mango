
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var tree;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	g1=new Ground(620,630,1700,40)
	t1=new Tree(1000,400,0,0);
	b1=new Boy(200,600,150,300);
	s1=new Stone(155,470,20);
	console.log(s1);
	//string1 = new string({x:155,y:470},s1.body)

  
}


function draw() {
	background("aqua");
 
Engine.run(engine);

  g1.display();
  t1.display();
  b1.display();
  s1.display();
  //string1.display();
 
 
}


function mouseDragged(){
Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
string1.fly();
}
/*
function keyPressed(){
	if (keyCode===32){
		string1.attach(s1);
	}
}
*/
