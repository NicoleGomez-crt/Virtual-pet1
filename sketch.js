//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
  //load images here
  this.image=loadImage("sprites/dogImg.png")
  this.image=loadImage("sprites/dogImg1.png")
}

function setup() {
 var canvas =createCanvas(500,500);
  var dog;
  dogImg=addImage("sprites/doglmg.png")
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
  if(KeyWentDown(UP_ARROW)){
    writestock(foodS);
    dog.addImage(dogHappy);
  
  }

  drawSprites();
  text("foodStock")
  textSize=50;
  Fill()
  //add styles here

}



