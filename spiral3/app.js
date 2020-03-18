function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0, 0, 0)
  frameRate()
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

  let rand = random(0,d)
  let rand2 = random(0,1)

  angle = 0.1 * rand;
  angle2 = angle + rand2;
  angle3 = angle + c;
  angle4 = angle + c + rand2;

  x1=(a+b*angle)*Math.cos(angle)+centreX;
  y1=(a+b*angle)*Math.sin(angle)+centreY;
  x2=(a+b*angle2)*Math.cos(angle2)+centreX;
  y2=(a+b*angle2)*Math.sin(angle2)+centreY;
  x3=(a+b*angle3)*Math.cos(angle3)+centreX;
  y3=(a+b*angle3)*Math.sin(angle3)+centreY;  
  x4=(a+b*angle4)*Math.cos(angle4)+centreX;
  y4=(a+b*angle4)*Math.sin(angle4)+centreY;

  stroke(0,0,0,90)
  strokeWeight(10+window.innerWidth/1000)
  noFill()
  bezier(x1+2, y1+2, x2+2, y2+2, x3+2, y3+2, x4+2, y4+2);

  stroke(((randomRed2 - randomRed1)*rand/d+randomRed1),
    ((randomGreen2 - randomGreen1)*rand/d+randomGreen1), 
    ((randomBlue2 - randomBlue1)*rand/d+randomBlue1))
  strokeWeight(12+window.innerWidth/1000)
  noFill()
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  stroke(255,255,255,30)
  strokeWeight(4)
  noFill()
  bezier(x1-1, y1-1, x2-1, y2-1, x3-1, y3-1, x4-1, y4-1);

  
}
