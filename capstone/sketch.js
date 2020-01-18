



let wave = [];
let pixelPerUnit = 20
let VARIABLEBN;


let rateAngle = 0.05
let angleBN = -rateAngle;
let angleAN = -rateAngle;

function setup() {
  sulatan();

  //the canvas
  createCanvas(1200, 600)
  //sliders
  mgaSlider();
}

//for looping
function draw() {

  background(0);
  xAndyAxis();
  umaandarNaBilog();


}
















function umaandarNaBilog() {

  let VARIABLEA0 = (pow(PI,2))/3
  translate(width * 3/ 4, (height / 2) - (VARIABLEA0 * pixelPerUnit));

  let x = 0;
  let y = 0;

  //FOR SINE WAVES
    // angleBN += rateAngle;
     angleBN = 0

  for (let i =0; i < bilangNgVector.value(); i++) {
    let oldx = x;
    let oldy = y;
    let n = i+1 ;
    //FOR X
    // let VARIABLEBN = (2/(n*n*PI*PI))*((PI*sin(n*PI))-(n*PI*PI*cos(n*PI)))
    // FOR L-X
    let VARIABLEBN =0
    // let VARIABLEBN =((2)/(n*n*n*PI*PI*PI))*((((2*n*n)-(n*n*PI*PI)-(n*n*PI*PI*PI*PI))*((-1)^n))-(2*PI*PI)+(n*n*PI*PI))
    // let VARIABLEBN = chelsea.value();


    radius = pixelPerUnit * (VARIABLEBN);
    x = (radius * cos(n * -angleBN))+x;
    y = (radius * sin(n * -angleBN))+y;


    stroke(255, 0, 0);
    noFill();
    ellipse(oldx, oldy, radius * 2);



    //fill(255);
    stroke(0, 0, 255);
    line(oldx, oldy, x, y);
    //ellipse(x, y, 8);

  }

        angleAN += rateAngle;
  for (let i =0; i < bilangNgVector.value(); i++) {

    let oldx = x;
    let oldy = y;
    let n = i+1 ;

    let VARIABLEAN = ((4*(pow(-1,n)))/(n*n))
    // let VARIABLEAN=5



    radius = pixelPerUnit * (VARIABLEAN);
    x = (radius * cos((n * -angleAN)-(PI/2)))+x;
    y = (radius * sin((n * -angleAN)-(PI/2)))+y;


    stroke(255, 0, 0);
    noFill();
    ellipse(oldx, oldy, radius * 2);



    //fill(255);
    stroke(0, 0, 255);
    line(oldx, oldy, x, y);
    //ellipse(x, y, 8);

  }



  //to project the wave
  wave.unshift(y);
  strokeWeight(1)
  stroke(255,0,0)
  line(x, y, 0, wave[0]);
  stroke(0,255,0)
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    //vertex(i times rate of fastness,wave[]
    vertex(i * pixelPerUnit * rateAngle*-1, wave[i]);
  }
  endShape();



  if (wave.width > 300) {
    wave.pop();
  }

}



//SLIDERS
function mgaSlider() {
  //slider for number of vectors
  bilangNgVector = createSlider(1, 150, 2);
}


//X AND Y AXES
function xAndyAxis() {

  stroke(255)
  strokeWeight(8)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)
  stroke(255, 90)
  strokeWeight(1)
  for (let i = 0; i < height; i += pixelPerUnit) {
    line(0, i, width, i)
  }
  for (let i = 0; i < width; i += pixelPerUnit) {
    line(i, 0, i, height)
  }
}






//LOOPING CIRCLES
function loopingCircles() {

  translate(width / 8, height / 9)
  let x = 0
  let y = 0
  let xbefore = 0
  let ybefore = 0

  for (let i = 0; i < 3; i++) {

    xbefore = x
    ybefore = y
    n = i + 1
    angle += 0.05
    radius = 50 * cos(n * angle)
    x += radius * cos(n * angle)
    y += radius * sin(n * angle)
    stroke(0)
    noFill();
    line(xbefore, ybefore, x, y)
    circle(xbefore, ybefore, radius * 2)
  }
}


function sulatan() {

  chelsea = createInput();
}
