var furby;

var ellipseBrush = false;
var furbyBrush = false;


function preload(){
    furby = loadImage("./images/furby.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    background(0);
}

function draw(){
    if (furbyBrush == true) {
        furbyBrush();
    }

    if (ellipseBrush == true) {
        ellip();
    }
}

function keyTyped(){
    if (key === 'q') {
        furbyBrush = true;
        ellipseBrush = false;
    }

    if (key === 'w') {
        furbyBrush = false;
        ellipseBrush = true;
    }
}

function furby(){
    image(furby, mouseX, mouseY, 50, 50);
}

function ellip(){
    ellipse(mouseX, mouseY, 50, 50);
}

