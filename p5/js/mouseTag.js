//ball position
var xPos;
var yPos;

//ball speed
var xSpeed;
var ySpeed;

//score
var score = 0;

//booleans
var start = false;
var end = false;

//stores how close our mouse is to the ball
var mouseDist;

//runs once
function setup(){
    //create canvas
    createCanvas(windowWidth, windowHeight);
    
    //set x and y position for ellipse
    //-15 to avoid getting trapped
    xPos = random(15, windowWidth-15);
    yPos = random(15, windowHeight-15);

    //random color
    fill(random(255), random(255), random(255));

    //set speed variables
    xSpeed = 2;
    ySpeed = 2;

    start = true;
}

//runs in loop
function draw(){
    if (start == true) {
        game();
    }

    if (end == true) {
        win();
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(200);
    xPos = random(15, windowWidth-15);
    yPos = random(15, windowHeight-15);
}

function game(){
    //updates the background to leave no trace
    background(0);

    //display score
    textSize(40);
    text("Score: " + score + "0", 10, 50);

    //increment speed per frame
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    
    //use variables for ball position
    ellipse(xPos, yPos, 30, 30);

    //collision detection
    if(xPos >= windowWidth-15 || xPos <= 15){
        xSpeed = xSpeed * -1;
        fill(random(255), random(255), random(255));
    }

    if(yPos >= windowHeight-15 || yPos <= 15){
        ySpeed = ySpeed * -1;
        fill(random(255), random(255), random(255));
    }

    //calculating distance between mouse and ball
    mouseDist = dist(mouseX, mouseY, xPos, yPos);
    
    //detect if mouse is within 15 pixels of ellipse
    if (mouseDist <= 15) {
        score++;
        xPos = random(15, windowWidth-15);
        yPos = random(15, windowHeight-15);
        ySpeed = ySpeed * 1.2;
        xSpeed = xSpeed * 1.2;
    }

    if (score == 10) {
        start = false;
        end = true;
    }
}

function win(){
    background(200);
    textSize(40);
    text("YOU WIN!", 10, 50);
}