  //namespacing for Matter.Engine,World.Bodies,Body
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;

  //to change the values of engine and world if needed
  let engine;
  let world;

  //creating variables
  var ball;
  var ground;
  var wedge;
  var angle=60;
  var poly;
  var boxes=[];

  function setup() 
  {
    //creating canvas
    createCanvas(400,400);

    //creating the engine
    engine = Engine.create();
    world = engine.world;

    //making the ground to remain in the same place
    var options = {
    isStatic:true
    };

    //creating the ground
    ground=Bodies.rectangle(100,300,400,20,options);
    //adding the ground to the world
    World.add(world,ground);
    
    rectMode(CENTER);
    ellipseMode(RADIUS);
  }

  function mousePressed()
  {
    //forming a new box if mouse is pressed
    boxes.push(new Box(mouseX,mouseY,50,50))
  }

  function draw() 
  {
    //setting background
    background(51);

    //displaying the ground
    rect(ground.position.x,ground.position.y,400,10);

    //updating the engine values
    Engine.update(engine);

    //creating the for loop to show the boxes
    for(var i=0;i<boxes.length;i++) {
    boxes[i].show();}
  }
  

