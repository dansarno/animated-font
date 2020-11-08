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
}