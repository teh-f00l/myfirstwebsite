x = 500;
y = 500;
z = 20;
function setup() {
 createCanvas(x,y);
 
}

function draw() {
  background(114, 88, 246, 1);
  noStroke();
  rectMode(RADIUS)
  rect(0, y/2, x, z);
  rect(x/2, 0, z, y);
}
