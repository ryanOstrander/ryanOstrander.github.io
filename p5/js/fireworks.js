let distX;
let distY;
let exponent = 3;
let x = 0.0;
let y = 0.0;
let beginX;
let beginY;
let endX;
let endY;
let step = 0.0075;
let pct = 0.0;

let counter = 0;
 
function setup(){
    //create canvas
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function drawBackground() {
    //draw title
    stroke(255);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER)
    text('Fireworks', width/2, 30);
    noStroke();
    textSize(12);
    text('Press the spacebar or click on the screen to begin launching fireworks', width/2, 60);

    //create the ground line
    stroke(255);
    line(0, (height * .9), width, (height * .9));

    //create the launcher position
    fill(0);
    stroke(255);
    beginX = width/2;
    beginY = height*.95;
    rect(beginX - 20, beginY, 40, 70);
};

function draw(){
    drawBackground();
    noStroke();

    //draw an overlay rectangle to cheat a tracer effect
    fill(0, 10);
    rect(0, 0, width, height);
    colorHeight(endY);
    textAlign(CENTER, CENTER)
    text('particles launched: ' + counter, width/2, 80);
    launchFirework();
}

function boom(x, y){
    print('BOOM!');
    let limit = floor(random(60, 80));
    counter += limit;

    for (let i = 0; i < limit; i++) {
        let fireworkSize = (y * 0.02) + (i*.1);
        let randomX = random(x-160, x+160)
        let randomY = random(y-160, y+80)
        ellipse(randomX, randomY, fireworkSize, fireworkSize);
    }
}

function createFirework(x, y){
    boom(x, y);
}

function launchFirework(){
    pct += step;

    if (pct < 1.0) {
        x = beginX + pct * distX;
        y = beginY + pow(pct, exponent) * distY;
        ellipse(x, y, 30 * (1-pct) + 5, 30 * (1-pct) + 5);
    }

    if (pct >= 1.0) {
        let explode = true;
        createFirework(x, y);
        pct = 0.0;
    }
}

//determine firework color
function colorHeight(y){
    //if the point is in the stars
    if (y <= (height * .2)) {
        fill(221, 17, 17);
    } 
    else if (y <= (height * .4) && y > (height * .2)) {
        fill(221, 13, 204);
    } 
    else if (y <= (height * .6) && y > (height * .4)) {
        fill(103, 13, 221);
    } 
    else if (y <= (height * .8) && y > (height * .2)) {
        fill(13, 221, 99);
    } 
    else if (y < (height * .9) && y > (height * .8)) {
        fill(230, 237, 23);
    } 
    else if (y > (height * .9)) {
        fill(0);
    }
}

//mouse press
function mousePressed(){
    pct = 0.0;
    endX = mouseX;
    endY = mouseY;
    distX = endX - beginX;
    distY = endY - beginY;
}

function keyPressed() {
    //if keycode is spacebar
    if (keyCode === 32) {
      spacePressed();
    } 
}

function spacePressed() {
    pct = 0.0;
    endX = random(20, width - 20);
    endY = random(20, (height*0.9));
    distX = endX - beginX;
    distY = endY - beginY;
}

//window resize function
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(200);
}