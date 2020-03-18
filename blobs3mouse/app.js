let increment = 0.01
let rows, columns
let basePixels = 1 
let frameRateDisplay
let timeOffset = 0.001
let colourVar = 3

let randomRed1 = Math.random()*255
let randomGreen1 = Math.random()*255
let randomBlue1 = Math.random()*255

let randomRed2 = Math.random()*255
let randomGreen2 = Math.random()*255
let randomBlue2 = Math.random()*255

let randomRed3 = Math.random()*255
let randomGreen3 = Math.random()*255
let randomBlue3 = Math.random()*255

let randomRed4 = Math.random()*255
let randomGreen4 = Math.random()*255
let randomBlue4 = Math.random()*255

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  rows = floor(height / basePixels);
  columns = floor(width / basePixels);
  frameRate(10)
  
}

 function draw () {
    let y = mouseY;
    let x = mouseX;
 
    let RED = (((randomRed3 - randomRed4)*x/columns+randomRed4)-((randomRed2 - randomRed1)*x/columns+randomRed1))*y/rows + (randomRed2 - randomRed1)*x/columns+randomRed1 + random(-colourVar, colourVar);
    let GREEN = (((randomGreen3 - randomGreen4)*x/columns+randomGreen4)-((randomGreen2 - randomGreen1)*x/columns+randomGreen1))*y/rows + (randomGreen2 - randomGreen1)*x/columns+randomGreen1 + random(-colourVar, colourVar);
    let BLUE = (((randomBlue3 - randomBlue4)*x/columns+randomBlue4)-((randomBlue2 - randomBlue1)*x/columns+randomBlue1))*y/rows + (randomBlue2 - randomBlue1)*x/columns+randomBlue1 + random(-colourVar, colourVar);

        // noStroke()
        fill(RED,GREEN,BLUE);

        ellipse(
            ((x) * basePixels),
            ((y) * basePixels),
            basePixels*50
        );
        

        




}

