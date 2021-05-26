var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var img1,img2,img3,img4,groundimg,trackimg

var cars, car1, car2, car3, car4;

function preload(){
  img1=loadImage("images/car1.png")
  img2=loadImage("images/car2.png")
  img3=loadImage("images/car3.png")
  img4=loadImage("images/car4.png")
  groundimg=loadImage("images/ground.png")
  trackimg=loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
