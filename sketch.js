let font;

function preload() {
  font = loadFont('assets/QuartzoBold-W9lv.ttf');
}

let myName;
let word = 'Daniel';

function setup() {
  createCanvas(900, 200);
  let aniTypes = [PerlinLetter]; // GlitchLetter, DotsLetter, WaveLetter, AlphaLetter
  myName = new AnimaText(word, 50, 150, 150, 20, aniTypes);
}

function draw() {
  colorMode(RGB);
  background(255);
  myName.render();
}