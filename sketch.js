const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground1, ball,ball1;
var box1,box2,box3,b0x4,b0x5,box6;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1 = new box(200,300,50,50);
   box2 = new box(200,100,50,100);
   box3 = new box(50,80,90,10);
    ground = Bodies.rectangle(200,390,400,10,{isStatic : true});
    World.add(world,ground);
   
}

function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    box1.display();
    box2.display();
    box3.display();
 
}