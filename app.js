let increment = 0.1
let rows, columns
let basePixels = 20
let frameRateDisplay
let timeOffset = 0.02
let randomRed = Math.random()
let randomGreen = Math.random()
let randomBlue = Math.random()

function setup () {
  createCanvas(windowWidth, windowHeight)
  background(0, 0, 0)
  rows = floor(height / basePixels)
  columns = floor(width / basePixels)
}
 function draw () {
  let yOffset = 0
  for (let y = 0; y < rows; y++) {
    let xOffset = 0
    for (let x = 0; x < columns; x++) {
        let randomGrey = noise(xOffset, yOffset, timeOffset)*255

        xOffset += increment
        
        noStroke()
        fill(randomRed*randomGrey,randomGreen*randomGrey,randomBlue*randomGrey)

        ellipse(
            (x * basePixels + 15),
            (y * basePixels +15),
            basePixels - 2
        )
      
      
    }
    timeOffset += increment * .001
    yOffset += increment
    // randomRed += Math.round(Math.random()*2) - 1
    // randomGreen += Math.round(Math.random()*2) - 1
    // randomBlue += Math.round(Math.random()*2) - 1
  }
}
