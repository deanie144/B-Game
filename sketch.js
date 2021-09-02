
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let basketball;
let hoop;
let button;
let brick;
let button2;
let ball_con;
let ball_con_2;
let basketball1;
let bg_img;
let ball;
let


function preload() {
  bg_img = loadImage('brick.jpg');
  rabbit = loadImage('Rabbit-01.png');
  hoop = loadImage('hoop.jpg');
  ball = loadImage('basketball.png');
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  button = createImg('button.jpg');
  button.position(100,90);
  button.size(50,50);
  button.mouseClicked(drop);

  button2 = createImg('button.jpg');
  button2.position(450,90);
  button2.size(50,50);
  button2.mouseClicked(drop2);
  



 
  rope = new Rope(7,{x:120,y:90});
   rope2 = new Rope(7,{x:490,y:90});

   bunny = createSprite(200,height - 80,100,100);
   bunny.scale = 0.2;

   basketball1 = Bodies.circle(300,300,20);
   Matter.Composite.add(rope.body,basketball1);

   ball_con = new Link(hoop1,fruit);
   ball_con_2 = new Link(hoop2,basketball1);

   
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(hoop,ball.position.x,ball.position.y,70,70);
  }
  pop();


  rope.show();
  rope2.show();


  Engine.update(engine);
  ground.show();

  drawSprites();

  
  if(collide(basketball1,hoop, 80)==true)
  {
    World.remove(engine.world,basketball1);
    basketball1 = null;
  }
  
}

function drop()
{
  rope.break();
  ball_con.dettach();
  ball_con = null; 
}

function drop2()
{;
  rope2.break();
  ball_con_2.dettach();
  ball_con_2 = null;
}

function collide(body,sprite, x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}

