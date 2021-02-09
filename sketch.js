
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);	
	mango2=new mango(1000,95,30);
	mango3=new mango(980,150,30);
	mango4=new mango(1080,85,30);
	mango5=new mango(1050,130,30);
	mango6=new mango(940,200,30);
	stone1 = new stone(230,400,20);
	sling1 = new slingshot(stone1.body,{x:230,y:400});


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  sling1.display();
 groundObject.display();
 detectcollision(stone1,mango1);
 detectcollision(stone1,mango2);
 detectcollision(stone1,mango3);
 detectcollision(stone1,mango4);
 detectcollision(stone1,mango5);
 detectcollision(stone1,mango6);
 

}
function mouseDragged(){ 
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    sling1.fly();
   
}
function detectcollision(a,b){
	pos = a.body.position
	pos1 = b.body.position
	var distance = dist(pos.x,pos.y,pos1.x,pos1.y);
	if(distance<=a.r+b.r){
		Matter.Body.setStatic(b.body,false);
	}
}