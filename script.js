

function view() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  document.getElementById("time").textContent =
    hours + ":" + minutes + ":" + seconds;
}
setInterval(view, 1000);

function Color() {
  var red = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = color;
}
setInterval(Color, 1000);

function incSize() {
  document.getElementById("time").style.fontSize = "12rem";
}

function decSize() {
  document.getElementById("time").style.fontSize = "8rem";
}

let imgObj = null;
let animate;

function init() {
  imgObj = document.getElementById("img");
  imgObj.style.position = "absolute";
  imgObj.style.left = "0px";
  imgObj.style.top = "0px";
}

function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
  animate = setTimeout(moveRight, 50);
}

function moveLeft() {
  imgObj.style.left = parseInt(imgObj.style.left) - 10 + "px";
  animate = setTimeout(moveLeft, 50);
}

function moveUp() {
  imgObj.style.top = parseInt(imgObj.style.top) - 10 + "px";
  animate = setTimeout(moveUp, 50);
}

function moveDown() {
  imgObj.style.top = parseInt(imgObj.style.top) + 10 + "px";
  animate = setTimeout(moveDown, 50);
}

function stop() {
  clearTimeout(animate);
}

window.onload = init;