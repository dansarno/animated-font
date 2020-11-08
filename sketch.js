// let letter = 'D';
// let bounds;
// let points;
//
let font;

function preload() {
  font = loadFont('assets/QuartzoBold-W9lv.ttf');
}

let myName;
let word = 'Daniel';

function setup() {
  createCanvas(600, 200);
  myName = new AnimaText(word, 50, 150, 150);
}

function draw() {
  background(50);

  myName.render();
  noLoop();

  // points = font.textToPoints(letter, 100, 150, 150);
  //
  // for (let p of points) {
  //   noStroke();
  //   fill(255);
  //   circle(p.x + random(-2, 2), p.y + random(-2, 2), 3);
  // }
}