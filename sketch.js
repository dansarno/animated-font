let font;

function preload() {
  font = loadFont('assets/Chibolddemo-1GD7g.ttf');
}

let myWord;
let word = 'coding';

function setup() {
  createCanvas(800, 200);
  let aniTypes = [RainbowLetter]; // GlitchLetter, DotsLetter, WaveLetter, AlphaLetter
  myWord = new AnimaText(word, 50, 150, 150, 20, aniTypes);
}

function draw() {
  colorMode(RGB);
  background(255);
  myWord.render();
}