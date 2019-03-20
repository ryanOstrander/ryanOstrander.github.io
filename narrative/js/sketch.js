var canvas;

var name;

//screen text
var title
var firstOption;
var secondOption;

//input
var slider;
var greeting;
var nameInput;

var startStoryBool = false;

function preload(){

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(120);
  beginning();
}

function draw(){
  if (startStoryBool) {
    startStory();
  }
}

function beginning(){
  greeting = createP("Please type your name and press Enter");
  nameInput = createInput();

  //check and see if the user pressed enter
  nameInput.changed(startStoryElements);
}

function planetElements(){
  greeting.hide();
  nameInput.hide();
  //slides requires at least two arguments
  //createSlide(min value, max value, starting value)
  slider = createSlider(0, 255, 0)
  name  = createElement('h1', nameInput.value())
  createP(nameInput.value() + " control the size of the ellipse");
  startStoryBool = true;
}

function startStory(){

}

////////////////animated function////////////////////

function growingPlanet(){
  background(120);
  
  print(slider.value());
    fill(slider.value());
    ellipse(400, 400, slider.value(), slider.value());
}

function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight)
}