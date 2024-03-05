// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
}

// function draw() {
//   createCanvas(windowWidth, windowHeight,WEBGL);
//   background(50);
//   fill(170)

//   rect(width/2-100, height/2-100, 200, 200,0,75)

// }

function draw() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  background(0);

  fill(240, 150, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(20, 6, 45);
  translate(0,80)
  cylinder(10,150,2);
  translate(0,100)
  cone(10,50,1)
  translate(0,-210)
  cylinder(5,50,8);

}