var myEnergy;
var clock;
var computerImage1;
var computerImage2;
var sleepImage;
var firstChoice;
var secondChoice;
var gameHasBegun;
var hasSlept = false;
var didStudy = false;
var backgroundColor = 0;

function preload() {
    retroFont = loadFont('manaspc.ttf');
    computerImage1 = createImg("computer.gif");
    computerImage2 = createImg("computer2.gif");
    sleepImage = createImg("sleep.gif");
    trainImage = createImg("train.gif");
    coffeeImage = createImg("coffee.gif");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    hasSlept = false;
    computerImage1.hide();
    computerImage2.hide();
    trainImage.hide();
    coffeeImage.hide();
    sleepImage.hide();
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    myEnergy = new EnergyBar(30, width - 50, height/4, 400);
    clock = new Clock();
    textFont(retroFont);
    beginning();
}   

function draw(){
    if (gameHasBegun) {
        background(backgroundColor);
        drawGameArea();
        myEnergy.drawEnergyBar();
        myEnergy.update();
        clock.displayTime();
    }
}

function beginning(){
    background(0);
    greeting = createP("Please type your name to begin");
    nameInput = createInput();

    nameInput.changed(startStory);    
}

function drawGameArea(){
    noFill();
    stroke(255);
    rect(width/10, 5, 1500, 900);
}

//window resize function
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}