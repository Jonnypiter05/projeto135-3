video ="";
status = "";
objects = [];

function preload()
{
   video = createVideo('video.mp4');
   video.hide();
}
function setup()
{
    canvas = createCanvas(580, 300);
    canvas.center();
}
function draw() 
{
   image(video, 0, 0, 580, 300);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status Detectando Objetos";
}
function modelLoaded()
{
    console.log("Modelo Carregado");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}