let font;

function preload() {
  font = loadFont('assets/QuartzoBold-W9lv.ttf');
}

let myName;
let word = 'Daniel';

function setup() {
  createCanvas(600, 200);
  let aniTypes = [LinesLetter, GlitchLetter, DotsLetter]; // GlitchLetter, DotsLetter, WaveLetter, AlphaLetter
  myName = new AnimaText(word, 50, 150, 150, 10, aniTypes);
}

function draw() {
  background(200);

  myName.render();
}