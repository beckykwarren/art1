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
let centreY = (window.innerHeight-74)/2


var stiches = 7+Math.floor(Math.random()*20);
var max = Math.max(window.innerWidth,window.innerHeight-74)
var stitchCt = max/stiches;
console.log(stitchCt);


var seq1 = [];
var i;
for (i = 0; i < stitchCt+1; i++) {
  seq1.push(Math.floor(Math.random()*2));
}
var seq2 = [];
var i;
for (i = 0; i < stitchCt; i++) {
  seq2.push(Math.floor(Math.random()*2));
}

console.log(seq1);
console.log(seq2);

var row=0;
var col=0;



function draw() {
  // fill(0, 0,0);
  // noStroke();
  // rect(0, 0, min, 40);
  // textSize(20);
  // fill(255,255,255,100);
  // text(seq1, 15, 30);

var k;
//var j;

for (k = 0; k < stitchCt+1; k++) {
  if (k%2==0) {
    stroke((randomRed1),
    (randomGreen1), 
    (randomBlue1));
  strokeWeight(3);
  noFill();
  line(stiches*row, stiches*(k-seq1[row]), stiches*row, stiches*(k+1-seq1[row]));

  stroke(255,255,255,100)
  strokeWeight(1)
  noFill()
  line(stiches*row, stiches*(k-seq1[row]), stiches*row, stiches*(k+1-seq1[row]));
  }  
  }
for (j = 0; j < stitchCt; j++) {
  if (j%2==0) {
    stroke((randomRed1),
    (randomGreen1), 
    (randomBlue1));
  strokeWeight(3);
  noFill();
  line(stiches*(j-seq2[col]),stiches*col, stiches*(j+1-seq2[col]), stiches*col);

  stroke(255,255,255,100)
  strokeWeight(1)
  noFill()
 line(stiches*(j-seq2[col]),stiches*col, stiches*(j+1-seq2[col]), stiches*col);
  }    
  }
  


  // stroke(0,0,0,90)
  // strokeWeight(8+window.innerWidth/500)
  // noFill()
  // line(x1+0.15*c, y1+0.15*d, x2, y2);

  // stroke(((randomRed2 - randomRed1)*x1/window.innerWidth+randomRed1),
  //   ((randomGreen2 - randomGreen1)*x1/window.innerWidth+randomGreen1), 
  //   ((randomBlue2 - randomBlue1)*x1/window.innerWidth+randomBlue1))
  // strokeWeight(6+window.innerWidth/500)
  // noFill()
  // line(x1, y1, x2, y2);
  
  // stroke(255,255,255,70)
  // strokeWeight(2+window.innerWidth/500)
  // noFill()
  // line(x1-1, y1-1, x2-1, y2-1);

  row++;
  col++;

}
