status="";
objects=[];

function setup()
{
    canvas=createCanvas(450,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelLoaded()
{
    console.log("model loaded!");
    status=true;
}

function draw()
{
    image(video,0,0,450,300);
}