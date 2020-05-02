function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var images = ["p5-pictures/fruit-1.png","p5-pictures/fruit-2.png","p5-pictures/fruit-3.png","p5-pictures/fruit-4.png","p5-pictures/fruit-5.png","p5-pictures/fruit-6.png","p5-pictures/fruit-7.png","p5-pictures/fruit-8.png","p5-pictures/fruit-9.png","p5-pictures/fruit-10.png","p5-pictures/fruit-11.png","p5-pictures/fruit-12.png","p5-pictures/fruit-13.png","p5-pictures/fruit-14.png","p5-pictures/fruit-15.png","p5-pictures/fruit-16.png","p5-pictures/fruit-17.png","p5-pictures/fruit-18.png","p5-pictures/fruit-19.png","p5-pictures/fruit-20.png","p5-pictures/fruit-21.png","p5-pictures/fruit-22.png","p5-pictures/fruit-23.png","p5-pictures/fruit-24.png","p5-pictures/fruit-25.png","p5-pictures/fruit-26.png"];
// var fruitPresent = false;

function makeFruit() {
  var random = getRandomInt(1, 24);
  var randomVal = images[random];
  var fruitPic= document.createElement("IMG");
  fruitPic.setAttribute("src", randomVal);
  fruitPic.setAttribute("width", "350");
  fruitPic.setAttribute("height", "350");
  fruitPic.id="picture";
  document.body.appendChild(fruitPic);
}
// function removeFruit() {
//   var element = document.getElementById("picture");
//   element.remove();
// }
function giveFruits() {
  // if (!fruitPresent) {
  makeFruit();
  //   fruitPresent = true;
  // } else {
  //   removeFruit();
  //   makeFruit();
  // }
}
