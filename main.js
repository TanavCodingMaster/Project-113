function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center()
    canvas.position(200, 200)
    video = createCapture(VIDEO)
    video.hide();
}

function draw() {
    image(video,230,150,220,200);
    stroke(47,0,0);
    fill(255,0,0)
    circle(50,50,100)
    
    stroke(255,0,0);
    fill(0,255,0)
    circle(600,50,100)

    stroke(255,0,0);
    fill(0,255,0)
    circle(50,450,100)

    stroke(0,0,255);
    fill(255,0,0)
    circle(600,450,100)
}