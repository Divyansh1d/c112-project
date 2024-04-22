function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function preload(){

}

function draw(){
    image(video, 0, 0, 350, 275);
    fill(225, 0, 0);
    stroke(225, 0, 0);
    rect(15,50,30,200);   
    rect(48, 13, 250, 30);    
    rect(48, 225, 250, 30);
    rect(310,50,30,215);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(27,240,50);
    circle(27,27,50);
    circle(322,27,50); 
    circle(322,240,50);
}