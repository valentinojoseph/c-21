var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(300,550, 100, 40);
    blue.shapeColor = "blue";
    yellow = createSprite(150,550, 100, 40);
    yellow.shapeColor = "yellow";
    red = createSprite(450,550, 100, 40);  
    red.shapeColor = "red"; 
    green = createSprite(600,550, 100, 40);
    green.shapeColor = "green";




    //create box sprite and give velocity
    box = createSprite(300,300,50,50);
    box.shapeColor = "white";
    box.velocityX = 30;
    box.velocityY = 30;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites() 
    
    //add condition to check if box touching surface and make it box
    if(green.isTouching(box)) {
        box.shapeColor = "green"
        box.bounceOff(green);
    }
    if(red.isTouching(box)) {
        box.shapeColor = "red"
        box.bounceOff(red);
    }
    if(blue.isTouching(box)) {
        box.shapeColor = "blue"
        box.bounceOff(blue);
    }
    if(yellow.isTouching(box)) {
        box.shapeColor = "yellow"
        box.bounceOff(yellow);
    }

    blue.display();
    yellow.display();
    red.display();
    green.display();
    box.display();
    box.bounceOff(edges);
}
