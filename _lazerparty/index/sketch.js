var count,r,g,b;
var x1, y1, x2, y2;
function setup() {
  // put setup code here
    createCanvas(1920, 1080);
    count = 0;
    
    r = 0;
    g = 0;
    b = 0;
    
    x1 = random(10, 20);
    y1 = 1000;
    x2 = 10;
    y2 = 20;
    background(50);
}

function draw() {
  // put drawing code here
    stroke(r, g, b);
    line(x1, y1, x2, y2);
    
    if(x1 < height) {
        x1 = x1+1;
        if(x1 % y1 == 1){
            y1 = y1+1;
        }
    }else {
        x1 = random(0, width);
        y1 = random(0, height);
    }
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
}