function setup() {
  createCanvas(window.innerWidth, window.innerHeight-74)
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

// var a = window.innerWidth/10;
var seq = [1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10),1+Math.floor(Math.random() * 10)];
var total = 0;
for(var i = 0; i < seq.length; i++) {
    total += seq[i];
}
var avg = total / seq.length;
var a = window.innerWidth/(8*avg);
console.log(a);

var len = Math.floor(Math.random() *seq.length/2)+seq.length/2-1;

var x1=centreX-a;
var y1=centreY-2*a-74;
var x2=centreX-a;
var y2=centreY-2*a-74;

var i=0;
var j=0;

function draw() {

  if (i<len) {i++;}
  else {i=0;}

  if (j%4==0 ) {
    c=a*seq[i];
    d=0;
    
  }
  else if (j%4==1){
    c=0;
    d=a*seq[i];
  }
  else if (j%4==2){
    c=-a*seq[i];
    d=0;
  }
  else if (j%4==3){
    c=0;
    d=-a*seq[i];
  }
  // console.log(i);
  
  x1=x2;
  y1=y2;
  x2=x2+c;
  y2=y2+d;

  stroke(0,0,0,90)
  strokeWeight(8+window.innerWidth/500)
  noFill()
  line(x1+0.15*c, y1+0.15*d, x2, y2);

  stroke(((randomRed2 - randomRed1)*x1/window.innerWidth+randomRed1),
    ((randomGreen2 - randomGreen1)*x1/window.innerWidth+randomGreen1), 
    ((randomBlue2 - randomBlue1)*x1/window.innerWidth+randomBlue1))
  strokeWeight(6+window.innerWidth/500)
  noFill()
  line(x1, y1, x2, y2);
  
  stroke(255,255,255,70)
  strokeWeight(2+window.innerWidth/500)
  noFill()
  line(x1-1, y1-1, x2-1, y2-1);

  j++;
}
