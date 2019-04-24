//------FUNCTION TO MULTIPLY TWO COMPLEX SOLUTIONS---------//

function mltCmp(eq1, eq2) {
    let c1r = eq1.re;
    let c1i = eq1.im;
    let c2r = eq2.re;
    let c2i = eq2.im;
  
    //store real and imaginary parts
    let newRealComp = (c1r*c2r - c1i*c2i);
    let newImaginaryComp = (c1r*c2i + c1i*c2r);
  
    //combine real and imaginary parts
    var newRoot = math.complex(newRealComp, newImaginaryComp);

    return newRoot;
    
  }


  
//------FUNCTION TO RETURN AN UPDATED COEFFICIENT LIST---------//

function updateCoefficients(points){

  var cRootList = [
    math.complex(points[0].x, points[0].y),
    math.complex(points[1].x, points[1].y),
    math.complex(points[2].x, points[2].y),
    math.complex(points[3].x, points[3].y),
    math.complex(points[4].x, points[4].y)
  ];

  return cRootList;

}


//------FUNCTION TO GET ORIGINAL COEFFICIENT POSITIONS---------//

function catchOriginalCo() {

  originalCoefficients = coeffList;
  catchOriginal = false;

}



//------FUNCTION TO GET ORIGINAL COEFFICIENT POSITIONS---------//

function plotCoefficients() {

    for (i = 0; i < coeffList.length; i++) {

      pt = new Point(coeffList[i].re,coeffList[i].im , 2);
      noStroke();
      fill(colors[i]);
      pt.plotPoint('a' + (i));

    }

  }



//------FUNCTION TO PLOT ORIGINAL COEFFICIENTS---------//

function plotOriginalCoefficients(){
  for (i = 0; i < originalCoefficients.length; i++) {
    let cPt = new Point(originalCoefficients[i].re, originalCoefficients[i].im , 2);
    cPt.plotOriginal(' ');
  }

  catchOriginal = false;

}



//------FUNCTION TO EVALUATE COEFFICIENTS GIVEN A SET OF COMPLEX SOLUTIONS Z---------//
//------USES VIETA'S FORMULAS---------//

function evalCoeffs(z){
  var coefficients = [];
  var p1, p2, p3, p4, p5;

  //calculate a0 coefficient (−z1z2z3z4z5)
  p1 = mltCmp(z[0], z[1]);
  p2 = mltCmp(z[2], z[3]);
  let a0 = mltCmp(mltCmp(p1, p2), z[4]);
  a0.re *= -1;
  a0.im *= -1;
  coefficients.push(a0);

  //calculate a1 coefficient (z1z2z3z4 + z1z2z3z5 + z1z2z4z5 + z1z3z4z5 + z2z3z4z5)
  p1 = mltCmp(z[3], mltCmp(mltCmp(z[0], z[1]), z[2]));
  p2 = mltCmp(z[4], mltCmp(mltCmp(z[0], z[1]), z[2]));
  p3 = mltCmp(z[4], mltCmp(mltCmp(z[0], z[1]), z[3]));
  p4 = mltCmp(z[4], mltCmp(mltCmp(z[0], z[2]), z[3]));
  p5 = mltCmp(z[4], mltCmp(mltCmp(z[1], z[2]), z[3]));

  let a1 = math.add(p5, math.add(math.add(p1, p2), math.add(p3, p4)));
  coefficients.push(a1);

  //calculate a2 coefficient ( −(z1z2z3 + z1z2z4 + · · · + z3z4z5) sum over all 10 triples)
  p1 = math.add(mltCmp(mltCmp(z[0], z[1]), z[2]), mltCmp(mltCmp(z[0], z[1]), z[3]));
  p2 = math.add(mltCmp(mltCmp(z[0], z[1]), z[4]), mltCmp(mltCmp(z[0], z[2]), z[3]));
  p3 = math.add(mltCmp(mltCmp(z[0], z[2]), z[4]), mltCmp(mltCmp(z[0], z[3]), z[4]));
  p4 = math.add(mltCmp(mltCmp(z[1], z[2]), z[3]), mltCmp(mltCmp(z[1], z[2]), z[4]));
  p5 = math.add(mltCmp(mltCmp(z[1], z[3]), z[4]), mltCmp(mltCmp(z[2], z[3]), z[4]));
  let a2 = math.add(math.add(math.add(p1, p2), math.add(p3, p4)), p5);

  a2.re *= -1;
  a2.im *= -1;
  coefficients.push(a2);

  //calculate a3 coefficient (z1z2 + z1z3 + · · · + z4z5 (sum over all 10 pairs))
  p1 = math.add(mltCmp(z[0], z[1]), mltCmp(z[0], z[2]));
  p2 = math.add(mltCmp(z[0], z[3]), mltCmp(z[0], z[4]));
  p3 = math.add(mltCmp(z[1], z[2]), mltCmp(z[1], z[3]));
  p4 = math.add(mltCmp(z[1], z[4]), mltCmp(z[2], z[3]));
  p5 = math.add(mltCmp(z[2], z[4]), mltCmp(z[3], z[4]));
  let a3 = math.add(math.add(math.add(p1, p2), math.add(p3, p4)), p5);
  coefficients.push(a3);

  //calculate a4 coefficient (−(z1 + z2 + z3 + z4 + z5))
  let a4 = math.add(math.add(math.add(math.add(z[0], z[1]), z[2]), z[3]), z[4]);
  a4.re *= -1;
  a4.im *= -1;
  coefficients.push(a4);

  return coefficients;

}




//------FUNCTION TO CALCULATE POINT GIVEN COEFFICIENT---------//

function calcFromCoef(a) {
  var calcPoint;
  var calcPlot;

  //sqrt(4a0 + a1)/2
  calcPoint = math.divide(math.subtract(math.add(math.multiply(4, a[0]), a[1]), math.multiply(a[2], a[3])), math.multiply(a[4] , 2));
  calculate4th(calcPoint);

  calcPlot = new Point(calcPoint.re, calcPoint.im, 3);

  //save history every 10 frames
  storePath(calcPlot);
  
  return calcPlot;

}

//------FUNCTION TO TRACE POINTS ON 4TH SCREEN---------//
function storePath(calcPlot){
  if (fits(3, calcPlot.pixelX, calcPlot.pixelY)) {
    //save history every 3 frames
    if ((frameCount % 3) == 0 && beginPath && !animationComplete) {
      calcHistory.push([calcPlot.pixelX, calcPlot.pixelY]); 
    }
  }

}



//------FUNCTION TO DRAW THE FOURTH SCREEN POINTS---------//
function calculate4th(z){
  let x = z.re;
  let y = z.im;
  let n = 5;
  let zMag = math.sqrt((x**2)+(y**2));
  var theta;
  var kPoints = [];
  var real;
  var imag;

  if (x > 0 && y > 0) theta = Math.atan(y/x);
  if (x < 0 && y > 0) theta = PI + Math.atan(y/x);
  if (x < 0 && y < 0) theta = -PI + Math.atan(y/x);
  if (x > 0 && y < 0) theta = Math.atan(y/x);

  for (let k = 0; k < n; k++) {
    real = math.pow(zMag, 1/n) * (cos(theta + TWO_PI*k/n));
    imag = math.pow(zMag, 1/n) * (sin(theta + TWO_PI*k/n));
    kPoints.push(new Point(real, imag, 4));
  }

  fourthHistory(kPoints);

}



//------FUNCTION TO DRAW AXIS ON CANVAS---------//

function sketchAxis(){

  //create the center partition
  fill(120);
  noStroke();
  rect(width/2 - 2, 0, 4, height);
  rect(0, height/2 - 2, width , 5);

  //create top left
  stroke(200);
  fill(200);
  line(0, 372/2, 498, 372/2);
  line(498/2, 0, 498/2, 372);

  textSize(14);
  text(topLeftBound, 498 - 30, height/4 - 5);
  text("-" + topLeftBound, 5, height/4 - 5);
  text(topLeftBound, 498/2 + 5, 15);
  text("-" + topLeftBound, 498/2 + 5, height/2 - 5);



  //create top right side
  line(502, 372/2, width, 372/2);
  line((498/2) * 3, 0, (498/2) * 3, 372);

  textSize(14);
  text(topRightBound, width - 20, height/4 - 8);
  text(topRightBound, (498/2)*3 + 5, 15);
  text("-" + topRightBound, (498/2)*2 + 10, height/4 - 5);
  text("-" + topRightBound, (498/2)*3 + 5 , height/2 - 5);

  //create bottom left side
  line(0, (372/2)*3, 498, (372/2)*3);
  line(498/2, 372 + 4, 498/2, height);

  textSize(14);
  text(bottomLeftBound, 498 - 30, (height/4 - 5) * 3);
  text("-" + bottomLeftBound, 5, (height/4 - 5)*3);
  text(bottomLeftBound, 498/2 + 5, (height/2) + 20);
  text("-" + bottomLeftBound, 498/2 + 5, height - 5);

  //create bottom right side
  line(502, (372/2)*3, width, (372/2)*3);
  line((498/2) * 3, 372 + 4, (498/2) * 3, height);

  textSize(14);
  text(bottomRightBound, width - 30, (height/4 - 4)*3);
  text(bottomRightBound, (498/2)*3 + 5, height/2 + 20);
  text("-" + bottomRightBound, 498 + 10, (height/4 - 5)*3);
  text("-" + bottomRightBound, (498/2)*3 + 5 , height - 5);

}

//------FUNCTION FOR COLLISION DETECTION---------//

function fits(q, pixelX, pixelY){
  var screen = q;
  var x1Bound;
  var y1Bound;
  var x2Bound;
  var y2Bound;

  if (screen == 1) {
      x1Bound = 500 + 9;
      y1Bound = 0 + 9;
      x2Bound = 1000 - 9;
      y2Bound = 375 - 9; 
  }

  if (screen == 2) {
      x1Bound = 0 + 9;
      y1Bound = 0 + 9;
      x2Bound = 500 - 9;
      y2Bound = 375 - 9; 
  }

  if (screen == 3) {
      x1Bound = 0 + 9;
      y1Bound = 375 + 9;
      x2Bound = 500 - 9;
      y2Bound = 750 - 9; 
  }

  if (screen == 4) {
      x1Bound = 500 + 9;
      y1Bound = 375 + 9;
      x2Bound = 1000 - 9;
      y2Bound = 750 - 9;  
  }

  if (pixelX < x2Bound && pixelX > x1Bound && pixelY < y2Bound && pixelY > y1Bound) {
      return true;
  } else {
      return false;
  }
}

//------FUNCTION TO TRANSLATE PIXEL TO COMPLEX COORDINATE---------//

function pixel2Point(pixelX, pixelY, screen){
  var newX;
  var newY;
  var lineNum;
  var startX = pixelX;
  var startY = pixelY;

  if (screen == 1) lineNum = topRightScale;
  if (screen == 2) lineNum = topLeftScale;
  if (screen == 3) lineNum = bottomLeftScale;
  if (screen == 4) lineNum = bottomRightScale;

  var scaleX = (498/2)/lineNum;
  var scaleY = (372/2)/lineNum;
  
  if (screen == 1) {
      newX = (startX - ((498*3)/2))/scaleX;
      newY = (startY - (372/2))/scaleY * -1;
  } else if (screen == 2) {
      newX = (startX - (498/2))/scaleX;
      newY = (startY - (372/2))/scaleY * -1;
  } else if (screen == 3) {
      newX = (startX - (498/2))/scaleX;
      newY = (startY - (372/2) * 3)/scaleY * -1;
  } else if (screen == 4) {
      newX = (startX - (498/2) * 3)/scaleX;
      newY = (startY - (372/2) * 3)/scaleY * -1;
  }

  return new math.complex(newX, newY);

}

function plotPotential(){
  let c = 1;

  for (point in ptList) {
    fill(30);
    stroke(color('red'));
    var potential = new Point(ptList[point].re, ptList[point].im, 1);
    potential.plotPoten("z" + c);
    c++;
  }
}