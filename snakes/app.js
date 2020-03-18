function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0, 0, 0)
  frameRate(5)
}

let randomRed1 = Math.random()*255
let randomGreen1 = Math.random()*255
let randomBlue1 = Math.random()*255

let randomRed2 = Math.random()*255
let randomGreen2 = Math.random()*255
let randomBlue2 = Math.random()*255

let centreX = window.innerWidth/2
let centreY = window.innerHeight/2

let a = -10
let b = window.innerWidth/150
let c = 2*Math.random()+6
let d = 1024


function draw() {

  let rand = random(0,window.innerWidth)
  let rand2 = random(0,window.innerHeight/2)
  let rand3 = window.innerWidth-rand
  let rand4 = window.innerHeight-rand2

  x1=rand;
  y1=rand2;
  x2=rand3;
  y2=rand4;


  stroke(0,0,0,80)
  strokeWeight(14+window.innerWidth/1000)
  noFill()
  line(x1+2, y1+2, x2+2, y2+2);

  stroke(((randomRed2 - randomRed1)*rand/window.innerWidth+randomRed1),
    ((randomGreen2 - randomGreen1)*rand/window.innerWidth+randomGreen1), 
    ((randomBlue2 - randomBlue1)*rand/window.innerWidth+randomBlue1))
  strokeWeight(12+window.innerWidth/1000)
  noFill()
  line(x1, y1, x2, y2);
  
  stroke(255,255,255,30)
  strokeWeight(4)
  noFill()
  line(x1-2, y1-2, x2-2, y2-2);

  
}
