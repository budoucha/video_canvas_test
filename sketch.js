var myCanvas;
var ended = false;
var started = false;
function preload() {
  owari_img = loadImage("assets/owari.png");
  saisei_img = loadImage("assets/saisei.png");
}

function setup() {
  pixelDensity(1);
  var myCanvas = createCanvas(document.getElementById("container").clientWidth,
    document.getElementById("container").clientHeight * 1.5);
  myCanvas.parent('fgcanvas');
  imageMode(CENTER);
  owari_img.resize(owari_img.width * 2, 0);
  saisei_img.resize(saisei_img.width * 1.2, 0);
  listen();
}

function draw() {
  clear();
  if (ended) {
    image(owari_img, width / 2, height / 2);
  } else if (!started) { 
    image(saisei_img, width / 2, height / 2); 
  }
}

function mouseClicked() {
  document.getElementById("Video1").play();
}

function listen() {
  document.getElementById("Video1").addEventListener("ended",
    function () {
      ended = true;
    }, false);
  document.getElementById("Video1").addEventListener("play",
    function () {
      started = true;
      ended = false;
      //clear();
    }, false);
  document.getElementById("Video1").addEventListener("pause",
    function () {
    }, false);
}