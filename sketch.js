//Create Sprites 
var row;
var row1;
var row2;
var row3;
var row4;
var row5;
var row6;
var row7;
var row8;
var row9;
var row10;
var row11;
var row12;
var row13;
var row14;
var row15;

function preload(){

     // Add Animations 
    

}

function setup(){
  
  // Create canvas 
  createCanvas(500,400);
  
  //Create rows
  row = createSprite (100,80,50,50);
  row1 = createSprite (200,80,50,50);
  row2 = createSprite (300,80,50,50);
  row3 = createSprite(400,80,50,50);
  row4 = createSprite(100,160,50,50);
  row5 = createSprite(200,160,50,50);
  row6 = createSprite(300,160,50,50);
  row7 = createSprite(400,160,50,50);
  row8 = createSprite(100,240,50,50);
  row9 = createSprite(200,240,50,50);
  row10 = createSprite(300,240,50,50);
  row11 = createSprite(400,240,50,50);
  row12 = createSprite(100,320,50,50);
  row13 = createSprite(200,320,50,50);
  row14 = createSprite(300,320,50,50);
  row15 = createSprite(400,320,50,50);
}

function draw(){

//background("Black");
background(0)
fill("white")
strokeWeight(5)
stroke("yellow")
 
 drawSprites()
}
