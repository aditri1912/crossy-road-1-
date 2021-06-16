var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  var grass = createSprite(200,200,2166,60)
 grass.shapeColor = "lightgreen"
   
 var grass1 = createSprite(500,550,2166,60)
 grass1.shapeColor="lightgreen"

 var road = createSprite(500,370,2166,300)
 road.shapeColor="black"
 }







function draw() {
  background("skyblue");
 
  
 

  drawSprites();
}

