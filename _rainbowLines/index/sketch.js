var count,r,g,b;
var x1, y1, x2, y2;
function setup() {
  // put setup code here
    createCanvas(1920, 1080);
    count = random(1, 150);
    
    r = 0;
    g = 0;
    b = 0;
    
    x1 = random(0, width);
    y1 = random(0, height);
    x2 = random(0, width);
    y2 = random(0, height);
    background(50);
}

function draw() {
  // put drawing code here
    stroke(r, g, b);
    line(x1, y1, x2, y2);
    

    x1 = random(200, width-200);
    y1 = random(200, height-200);
    x2 = random(200, width-200);
    y2 = random(200, height-200);
    
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    count -= 1;
    if(count <= 0) {
        background(50);
        count = random(1, 150);
    }
}