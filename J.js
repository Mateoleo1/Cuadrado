var Nosex=0;
var Nosey=0;
var Rightwristx=0;
var Leftwristx=0;
var difference=0;
function setup() {
video=createCapture(VIDEO);
video.size(525,525);
canvas=createCanvas(500,500);
canvas.position(550,150);
poseNet=ml5.poseNet(video,V);
poseNet.on("pose",Pose);
}
function V(){
console.log("Load")
}
function Pose(P){
if (P.lenght>0){
console.log(P);
Nosex=P[0].pose.nose.x;
Nosey=P[0].pose.nose.y;
Leftwristx=P[0].pose.leftWrist.x;
Rightwristx=P[0].pose.rightWrist.x;
difference=floor(Leftwristx-Rightwristx);

}

}
function draw(){
    background('#969A97');
document.getElementById("H").innerHTML=difference;
fill('#F90093');
stroke('#F90093');
square(Nosex,Nosey,difference);
}