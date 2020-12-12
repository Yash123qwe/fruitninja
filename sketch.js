var sword, swordImage, fruit1, fruit2, fruit3, fruit4, germs;
var score;
var gamestate=1
var play =1
var end =0

function preload() {
  swordImage = loadImage("sword.png");
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
  alienImage = loadImage("alien1.png");
  alienImage2 = loadImage("alien2.png");
  gameoverImage = loadImage("gameover.png")
  
  // most annying sound
  knifesound = loadSound ("knifeSwooshSound.mp3");
  gameoversound = loadSound("gameover.mp3");
}

function setup() {
  createCanvas(600, 400);

  // creating sword
  sword = createSprite(300, 200, 10, 10);
  sword.addImage("sword.png", swordImage);
  sword.scale = 0.5;
  
  //gameover
  gameover =createSprite(300,200,10,10)
  gameover.addImage(gameoverImage)
  
  
  //score
   score =0;
  
  fruitgroup1 = createGroup();
  fruitgroup2 = createGroup();
  fruitgroup3 = createGroup();
  fruitgroup4 = createGroup();
  aliengroup = createGroup();
  aliengroup2 = createGroup();
}

function draw() {
  background(220);
  sword.y = World.mouseY
  sword.x = World.mouseX
  if(gamestate === play) {
  //GAMEOVER
     gameover.visible = false
  //destroying
  if(sword.isTouching(fruitgroup1)){
    fruitgroup1.setLifetimeEach(0);
    score=score+1;
    knifesound. play();
  }
  
  if(sword.isTouching(fruitgroup2)){
    fruitgroup2.setLifetimeEach(0);
    score=score+1;
     knifesound. play();
  }
  
  if(sword.isTouching(fruitgroup3)){
    fruitgroup3.setLifetimeEach(0);
    score=score+1;
     knifesound. play();
  }
  
  if(sword.isTouching(fruitgroup4)){
    fruitgroup4.setLifetimeEach(0);
    score=score+1;
     knifesound. play();
  }
    if(sword.isTouching(aliengroup)){
      gamestate=end
       gameoversound.play();
    }
    
    if(sword.isTouching(aliengroup2)){
      gamestate=end
      gameoversound.play();
    }
  } else if(gamestate === end){
    score=0;
    
    gameover.visible= true
    fruitgroup1.setVelocityXEach(0);
    fruitgroup1.setLifetimeEach=(-1);
    
     fruitgroup2.setVelocityXEach(0);
    fruitgroup2.setLifetimeEach=(-1);
    
     fruitgroup3.setVelocityXEach(0);
    fruitgroup3.setLifetimeEach=(-1);
    
     fruitgroup4.setVelocityXEach(0);
    fruitgroup4.setLifetimeEach=(-1);
    
    aliengroup.setVelocityXEach(0);
    aliengroup.setLifetimeEach=(-1);
    
    aliengroup2.setVelocityXEach(0);
    aliengroup2.setLifetimeEach=(-1)
  }
  
  //score
  
  text("Score: " + score, 500, 50);
 

  //collider
  sword.setCollider("circle", 0, 0, 60);
  drawSprites();
  fruit1();
  fruitb2();
  fruitb3();
  fruitb4();
  alien1();
  alienb2();
}
  
//function fruit
function fruit1() {
  if (frameCount % 100 === 0) {
    fruit = createSprite(0, 400, 10, 10)
    fruit.y = Math.round(random(100, 500));
    fruit.velocityX = 3
    fruit.addImage(fruitImage1);
    fruit.scale = 0.2
    fruitgroup1.add(fruit);
  }
}

function fruitb2() {
  if (frameCount % 80 === 0) {
    fruit2 = createSprite(0, 400, 10, 10)
    fruit2.y = Math.round(random(100, 500));
    fruit2.velocityX = 3
    fruit2.addImage(fruitImage2);
    fruit2.scale = 0.2
    fruitgroup2.add(fruit2);
  }
}

function fruitb3() {
  if (frameCount % 67 === 0) {
    fruit3 = createSprite(0, 400, 10, 10)
    fruit3.y = Math.round(random(100, 500));
    fruit3.velocityX = 3
    fruit3.addImage(fruitImage3);
    fruit3.scale = 0.2
    fruitgroup3.add(fruit3);
  }
}

function fruitb4() {
  if (frameCount % 50 === 0) {
    fruit4 = createSprite(0, 400, 10, 10)
    fruit4.y = Math.round(random(100, 500));
    fruit4.velocityX = 3
    fruit4.addImage(fruitImage4);
    fruit4.scale = 0.2
    fruitgroup4.add(fruit4);
  }
}

function alien1() {
  if (frameCount % 25 === 0) {
    alien = createSprite(0, 400, 10, 10)
    alien.y = Math.round(random(100, 500));
    alien.velocityX = 3
    alien.addImage(alienImage);
    alien.scale = 0.5
    aliengroup.add(alien)
  }
}

function alienb2() {
  if (frameCount % 50 === 0) {
    alien2 = createSprite(0, 400, 10, 10)
    alien2.y = Math.round(random(100, 500));
    alien2.velocityX = 3
    alien2.addImage(alienImage);
    alien2.scale = 0.5
    aliengroup2.add(alien2)
  }
}

