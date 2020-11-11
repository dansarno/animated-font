let font;

function preload() {
  font = loadFont('assets/fonts/QuartzoBold-W9lv.ttf');
}

let myWord;
let word = 'Animate';

function setup() {
  createCanvas(800, 200);
  let aniTypes = [RainbowLetter]; // GlitchLetter, DotsLetter, WaveLetter, AlphaLetter
  myWord = new AnimaText(word, 50, 150, 150, 20, aniTypes);
  // createLoop({
  //   duration: 3,
  //   gif: true,
  //   download: true,
  //   render: false
  // });
}

function draw() {
  colorMode(RGB);
  background(255);
  myWord.render();
}