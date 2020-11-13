let font;

function preload() {
  font = loadFont('assets/fonts/QuartzoBold-W9lv.ttf');
}

let myWord;
let word = 'Hello, world!';

function setup() {
  createCanvas(windowWidth, windowHeight);
  let aniTypes = [RainbowLetter]; // GlitchLetter, DotsLetter, WaveLetter, AlphaLetter
  myWord = new AnimaText(word, 50, 300, 200, 20, aniTypes);
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