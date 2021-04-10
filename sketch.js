var canvas;
var music;
var s1, s2, s3, s4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1 = createSprite(100, 570, 180, 10)
s1.shapeColor = "blue"
s2 = createSprite(300, 570, 200, 10)
s2.shapeColor = "yellow"
s3 = createSprite(505, 570, 185, 10)
s3.shapeColor = "red"
s4 = createSprite(700, 570, 180, 10)
s4.shapeColor = "green"


    //create box sprite and give velocity
box = createSprite(400, 400, 50, 50);
box.velocityY = 3
box.velocityX = 3
box.shapeColor = "white"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges);
if (box.bounceOff(s1)){
    box.shapeColor = "blue"
}
if (box.bounceOff(s2)){
    box.shapeColor = "yellow"
}
if (box.bounceOff(s3)){
    box.shapeColor = "red"
}
if (box.bounceOff(s4)){
    box.shapeColor = "green"
}
drawSprites()
    //add condition to check if box touching surface and make it box

}

function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
    
   }
   if (object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object2.y < object2.height/2 + object1.height/2) {
    object1.velocityY = object1.velocityY * (-1);
    
} 
}
