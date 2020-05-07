// MM - added this bit to run the button click function
$(document).ready(function() {
  giveFruits();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var images = ["p5-pictures/fruit-1.png","p5-pictures/fruit-2.png","p5-pictures/fruit-3.png","p5-pictures/fruit-4.png","p5-pictures/fruit-5.png","p5-pictures/fruit-6.png","p5-pictures/fruit-7.png","p5-pictures/fruit-8.png","p5-pictures/fruit-9.png","p5-pictures/fruit-10.png","p5-pictures/fruit-11.png","p5-pictures/fruit-12.png","p5-pictures/fruit-13.png","p5-pictures/fruit-14.png","p5-pictures/fruit-15.png","p5-pictures/fruit-16.png","p5-pictures/fruit-17.png","p5-pictures/fruit-18.png","p5-pictures/fruit-19.png","p5-pictures/fruit-20.png","p5-pictures/fruit-21.png","p5-pictures/fruit-22.png","p5-pictures/fruit-23.png","p5-pictures/fruit-24.png","p5-pictures/fruit-25.png","p5-pictures/fruit-26.png"];

function makeFruit() {
  var random = getRandomInt(1, 24);
  var randomVal = images[random];

  // MM - var docWidth = document.body.clientWidth;
  // MM - var docHeight = document.body.clientHeight;

  // MM - the two variables above weren't getting the width and height of the window just the body and I don' think the body was getting the correct height or width. I also wrote the new variables with jQuery
  var docWidth = $(window).width();
  var docHeight = $(window).height();

  // MM - logging the two above variables to make sure the measurements are correct
  console.log(docWidth + ', ' + docHeight);

  // MM - var randX = Math.floor(Math.random()*docWidth);
  // MM - var randY = Math.floor(Math.random()*docHeight);

  // MM - I changed the random x and y variables slightly so that the fruits don't go off the page. This isn't necessary and there is probably a better way to do it. This does kind of what I wanted it to do but I'm not sure if it is good. Either way, what I did was subract the width and height you assigned to the images and then took the absolute value of that to get rid of any negative numbers
  var randX = Math.abs((Math.floor(Math.random()*docWidth)) - 350);
  var randY = Math.abs((Math.floor(Math.random()*docHeight)) - 350);

  // MM - logging the random x and y positions
  console.log(randX + ', ' + randY)

  var fruitPic= document.createElement("IMG");
  fruitPic.setAttribute("src", randomVal);
  fruitPic.setAttribute("width", "350");
  fruitPic.setAttribute("height", "350");

  // MMM - the second style setAttribute was overriding the first one so I combinded them into a single setAttribute. I also added in your variables and added the px unit so they wored correctly. Again, you were really close on everything you had you were just missing how to add the variables to each picture you generated
  fruitPic.setAttribute("style", "top: " + randY + "px; left: " + randX + "px;");

  fruitPic.className="picture";
  document.body.appendChild(fruitPic);
  // document.getElementsByClassName("picture").style.left = randX;
  // document.getElementsByClassName("picture").style.top = randY;
}

// function removeFruit() {
//   var element = document.getElementById("picture");
//   element.remove();
// }

// MM - I took the inline javascript out of your html file and added some jquery here to do the same thing
function giveFruits() {
  $('button').click(function() {
    makeFruit();
  });
}
