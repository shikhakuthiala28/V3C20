const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine;
var world;
var ball, ball2;
var ground;
var wedge, wedge1;
var angle =60;

function setup(){

    createCanvas(600,600);

    engine=Engine.create();
    world= engine.world;

    var wedge_options={
        isStatic:true
    }

    wedge = Bodies.rectangle(100,200,100,20,wedge_options);
    World.add(world,wedge);

    wedge1= Bodies.rectangle(300,200,100,20,wedge_options);
    World.add(world,wedge1);

    var ball_options={
        restitution: 1.05,
        frictionAir:0.01
    }

    ball= Bodies.circle(300,300,50,ball_options);
    World.add(world,ball);

    ball2= Bodies.circle(400,100,50,ball_options);
    World.add(world,ball2);

    var ground_options={
        isStatic:true

    }
    ground=Bodies.rectangle(1,580,600,20,ground_options);
    World.add(world,ground);

    
rectMode(CENTER);
ellipseMode(CENTER)


}

function draw(){

    background("grey");

    Engine.update(engine);

    Matter.Body.rotate(wedge,angle);

    push();
    translate(wedge.position.x,wedge.position.y)
    rotate(angle)
    rect(0,0,100,20);
    pop();

    angle+=0.1;
    
    rect(wedge1.position.x,wedge1.position.y,100,20)

    ellipse(ball.position.x,ball.position.y,50)

    rect(ground.position.x,ground.position.y,600,20);

    
    

}