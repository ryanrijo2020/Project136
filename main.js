function preload() {
    
}
function setup() {
    canvas=createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
video.hide();
    
}
function start() {
detect=ml5.objectDetector("cocossd",detecting);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function detecting() {
    console.log("modeloaded");
    status=true;
}
function draw() {
    image(video,0,0,480,380);
}