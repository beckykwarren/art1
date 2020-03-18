function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0, 0, 0)
  frameRate(10)
}

let randomRed1 = Math.random()*255
let randomGreen1 = Math.random()*255
let randomBlue1 = Math.random()*255

let randomRed2 = Math.random()*255
let randomGreen2 = Math.random()*255
let randomBlue2 = Math.random()*255

function draw() {

  let x1 = random(0,1)*window.innerWidth
  let y1 = random(0,1)*window.innerHeight
  let rand = random(-20,20)
  let x2 = x1 + rand
  let y2 = y1 + rand
  stroke(((randomRed2 - randomRed1)*x1/window.innerWidth+randomRed1),((randomGreen2 - randomGreen1)*x1/window.innerWidth+randomGreen1), ((randomBlue2 - randomBlue1)*x1/window.innerWidth+randomBlue1))
  strokeWeight(10)
  line(x1, y1, x2, y2)
    
  
}
