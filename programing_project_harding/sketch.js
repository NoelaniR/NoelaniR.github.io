let billImg;

function preload(){
  billImg = loadImage("BillCipherCropped.webp");
}

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(3);
  noCursor();
}

function draw() {
  stroke(0)
  console.log(mouseX + ", " + mouseY);
  background(255, 127, 127);
  // beginShape();
  //   vertex(200,100)
  //   quadraticVertex(300, 180, 320, 300);
  //   quadraticVertex(200, 345, 80, 300);
  //   quadraticVertex(100, 170, 200,100)
  // endShape();
  
  // beginShape()
  //   curveVertex(80, 300)
  //   curveVertex(200, 100);
  //   curveVertex(320, 300);
  //   curveVertex(80, 300)
  //   curveVertex(200, 100);
  //  curveVertex(320, 300)
  // endShape();
  // push();
  // strokeWeight(10);
  // noFill();
  // beginShape();
  // vertex(150, 290);
  // vertex(150,380);
  // vertex(138,392);
  // endShape();
  // pop();
 push();
  translate(mouseX-width/2, mouseY-width/2);
  stroke(0)
  noFill();
  strokeWeight(11)
  line(150, 300, 150+ map(mouseX, 0, width, -20, 20), 382 );
  line(250, 300, 250+ map(mouseX, 0, width, -20, 20), 382);
  
  beginShape();
  curveVertex(169, 300);
  curveVertex(169, 300);
  curveVertex(170, 340);
  curveVertex(189, 323);
  curveVertex(190, 352);
  curveVertex(179, 368);
  endShape();
  beginShape();
  curveVertex(231, 300)
  curveVertex(231, 300)
  curveVertex(232, 343)
  curveVertex(215, 335)
  curveVertex(218, 362)
  curveVertex(230, 377)
  endShape();
  
  line(144+ map(mouseX, 0, width, -20, 20), 391, 150+ map(mouseX, 0, width, -20, 20), 382)
  line(158+ map(mouseX, 0, width, -20, 20), 388, 150+ map(mouseX, 0, width, -20, 20), 382)
  line(242+ map(mouseX, 0, width, -20, 20), 388, 250+ map(mouseX, 0, width, -20, 20), 382)
  line(256+ map(mouseX, 0, width, -20, 20), 392, 250+ map(mouseX, 0, width, -20, 20), 382)
  pop();

  
illuminati(mouseX, mouseY);
push();
translate(mouseX-width/2, mouseY-width/2);
  strokeWeight(3.5)
  line(176, 182, 170, 165);
  line(190, 179, 187, 159);
  line(208, 178, 209, 159);
  line(223, 182, 227, 166);
  line(200, 233, 200, 245);
  line(184, 230, 179, 244);
  line(216, 230, 220, 246);
  pop();
push();
translate(mouseX-width/2, mouseY-width/2);
stroke(225,200,0)
  strokeWeight(2)
  line(111, 250, 289, 250);
  line(102, 265, 299, 265);
  line(92, 282, 309, 282);
  line(200, 251, 200, 265);
  line(128, 252, 128, 265);
  line(272, 251, 272, 265);
  line(164, 266, 164, 281);
  line(236, 266, 236, 281);
  line(200, 284, 200, 300);
  line(128, 282, 128, 300);
  line(272, 283, 272, 300);
  fill(0);
  stroke(0);
  triangle(200, 264, 172, 253, 172, 274);
  triangle(200, 264, 227, 253, 227, 274);
  pop();
 // image(billImg,30,-40);

}




function illuminati(x,y){
  push();
  translate(x-width/2, y-width/2);
    beginShape();
  fill(255, 225, 100);
stroke(225,200,0)
 vertex(200,100);
    vertex(320, 300);
    vertex(80,300);
    vertex(200,100);
  endShape();
//  ellipse(200, 175, 120, 120);
//  ellipse(200, 235, 120, 120);
  fill(255)
  stroke(0)
  strokeWeight(3.5)
  arc(200, 239, 120, 120, 19 * PI/16, 29 * PI/16, OPEN);
  arc(200, 171, 120, 120, 3 * PI/16, 13 * PI/16, OPEN);
 pop();
  fill(255,127,0);
  push();
  translate(x-width/2, y-width/2);
  fill(0);
  x = map(x, 0, width, -10, 10, 1);
  y = map(y, 0, height, -10, 10, 1);
  translate(x,y);
  ellipse(200, 205, 7, 35);
  
  fill(0)
  rect(190, 25, 20, 80);
  rect(170, 100, 60, 5);
  
  pop();
}