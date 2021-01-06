var database;
var canvas;
var gameState=0;
var playerCount;
var form,player,game;
var allplayers;
var car1,car2,car3,car3,car4,cars;
var distance = 0
var car1img,car2img,car3img,car4img;
var trackimg;

function preload(){
  trackimg = loadImage("track.jpg")
  car1img = loadImage("car1.png")
  car2img = loadImage("car2.png")
  car3img = loadImage("car3.png")
  car4img = loadImage("car4.png")
 
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);

  game=new Game()
  game.getstate()
  game.start()  

 
}

function draw(){
  background("white");
  
   if(playerCount===4){
     game.update(1)
   }
    
   if(gameState===1){
     clear()
     game.play()
   }
   if(gameState==2){
     game.end()
   }
 //  ok mam
  
}



