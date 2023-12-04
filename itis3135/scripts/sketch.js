function setup() {
    createCanvas(640, 268);
    background(255);
  }
  
  function draw() {
    if (mouseIsPressed) {
      drawBoat(mouseX, mouseY);
    }
  }
  
  function drawBoat(x, y) {
    fill(160, 82, 45);
    arc(x, y, 20, 20, PI, TWO_PI, CHORD);
  
    stroke(0);
    line(x, y - 10, x, y - 30);
  
    fill(255);
    triangle(x, y - 30, x + 10, y - 10, x - 10, y - 10);
  }
  