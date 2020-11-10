//Create variables here
var dog,happyDoggo,database,foodS,foodStock

var happyDogimg;
var dog1img;
function preload()
{
  //load images here
  var happyDogimg=loadImage("images/happy.png")
  var dog1img=loadImage("images/standing.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200)
  dog.addImage("dog",happy.png)
  dog.addImage("dog",standing.png)

  foodStock=database.ref('food')
  foodStock.on("value",readStock)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogimg)
  }
}


function draw() {  
  background(46, 139, 87)


  drawSprites();
  
  
  function readStock(data){
    foodS-data.val();
  }
function writeStock(x){
  database.ref('/').update({Food:x})
    
    }

  }





