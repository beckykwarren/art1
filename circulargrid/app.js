// Start by setting up the canvas
// This one is the size of the window and is coloured black (0,0,0)
// The frame rate is how many frames per second
function setup() {
  createCanvas(window.innerWidth, window.innerHeight-74)
  background(0, 0, 0)
  frameRate(2)
}

// Use this part to set up some variables you need for the whole project
// You can use var or let for variable declaration

// I am picking random colours (RGB goes up to 255)
let randomRed1 = Math.floor(0.5*Math.random()*255+255/2);
let randomGreen1 = Math.floor(0.5*Math.random()*255+255/2);
let randomBlue1 = Math.floor(0.5*Math.random()*255+255/2);
let randomRed2 = Math.floor(0.5*Math.random()*255+255/2);
let randomGreen2 = Math.floor(0.5*Math.random()*255+255/2);
let randomBlue2 = Math.floor(0.5*Math.random()*255+255/2);

let centreX= window.innerWidth/2;
let centreY= (window.innerHeight-74)/2;
let size1 = Math.min(window.innerWidth,window.innerHeight-74)/10;
let randcount = Math.floor(10*Math.random(0,1));

i = 1;
console.log(randomRed1);
console.log(randomGreen1);
console.log(randomBlue1);


function draw() {
  // This sets a random number betwen 0 and 1 
  // which will be used to set the x and y values
  let randsize = floor(10*random(0,1));
  let randloc = round((9-randsize)*random(-0.5,0.5));
  let direction = floor(2*random(0,1));
  
  //fill((randomRed1+colourgrad*(randomRed2-randomRed1)),(randomGreen1+colourgrad*(randomGreen2-randomGreen1)), (randomBlue1+colourgrad*(randomBlue2-randomBlue1)),80)
  if (i%2 == 0){
    fill(0,0,0,40)
    stroke(0,0,0)
    strokeWeight(0)
    arc(centreX+size1*randloc, centreY, randsize*size1, randsize*size1, direction*PI, (1-direction)*PI, OPEN);
  }
  else{
    fill((randomRed1),(randomGreen1), (randomBlue1),80)
    stroke(0,0,0)
    strokeWeight(0)
    arc(centreX+size1*randloc, centreY, randsize*size1, randsize*size1, direction*PI, (1-direction)*PI, OPEN);
  }
  
  i++;
}
