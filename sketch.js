  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base1,base2;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;
var ball,slingshot;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  
  box1 = new Box(320,275,30,40);
  box2 = new Box(350,275,30,40);
  box3 = new Box(380,275,30,40);
  box4 = new Box(410,275,30,40);
  box5 = new Box(440,275,30,40);

  box6 = new Box(470,275,30,40);
  box7 = new Box(500,275,30,40);
  box8 = new Box(350,235,30,40);
  box9 = new Box(380,235,30,40);
  box10 = new Box(410,235,30,40);

  box11 = new Box(440,235,30,40);
  box12 = new Box(470,235,30,40);
  box13 = new Box(380,195,30,40);
  box14 = new Box(410,195,30,40);
  box15 = new Box(440,195,30,40);

  box16 = new Box(410,155,30,40);
  box17 = new Box(660,175,30,40);
  box18 = new Box(690,175,30,40);
  box19 = new Box(720,175,30,40);
  box20 = new Box(750,175,30,40);

  box21 = new Box(780,175,30,40);
  box22 = new Box(690,135,30,40);
  box23 = new Box(720,135,30,40);
  box24 = new Box(750,135,30,40);
  box25 = new Box(720,95,30,40);

  ground = new Ground(450,390,120000,20);
  base1 = new Ground(410,300,250,10);
  base2 = new Ground(720,200,200,10);

  ball = new Ball(100,200);
 slingshot = new Slingshot(ball.body,{x:100,y:200});

}
function draw() {
  background(0); 

  fill("cyan")
  box1.display(); 
  box2.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  fill("pink")
  box8.display(); 
  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 
  fill("springgreen")
  box13.display(); 
  box14.display(); 
  box15.display(); 
  fill("CYAN")
  box16.display(); 
  fill("SPRINGGREEN")
  box17.display(); 
  box18.display(); 
  box19.display(); 
  box20.display(); 
  box21.display(); 
  fill("pink")
  box22.display(); 
  box23.display(); 
  box24.display(); 
  fill("CYAN")
  box25.display(); 


  ground.display();
  base1.display();
  base2.display();

  ball.display();
  slingshot.display();

 Engine.update(engine)
}
function keyPressed() {
  if (keyCode === 32) {
      slingshot.attach(ball.body); 
  }
 }
 function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
 }
 function mouseReleased(){
   slingshot.fly();
 }