var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // put setup code here
  rectMode(CENTER);
}

function draw() {
  // put drawing code here
  background(120, 130, 255);
  fill(255);
  stroke(0);
  strokeWeight(6);
  // ellipse(width/2, height/2, 100, 100);
  let start = 0;
  for (let i = 0; i < width/10; i++) {
    ellipse(start, height/i, 10+(i*10), 10+(i*10));
    fill(255 - start/3)
    start += width/10;
  }

  fill(255);
  stroke(0);

  line(20, 60, 700, 500);

  rect(width/2, height/2, 100, 200);

  triangle(600, 200, 650, 280, 700, 280);

  //mouse X and mouse Y positions
  fill(mouseX % 255, mouseY % 255, 100);
  stroke(mouseX % 255, mouseY % 255, 100);
  rect(mouseX, mouseY, 20, 20)
}

function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
}

function keyTyped(){
  if (key === 's') {
    save('sketch.jpg');
  }
}