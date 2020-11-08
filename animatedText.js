class AnimaText {
  constructor(word, x, y, size = 150, gap = 10, styles = null) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.styles = styles;
    this.size = size;
    this.gap = gap;
    this.letters = this.formLetters(word);
  }

  render() {
    let xPos = this.x
    for (let letter of this.letters) {
      letter.show(xPos, this.y, this.size);
      console.log(letter.w);
      xPos += letter.w + this.gap;
    }
  }

  formLetters(letterSet) {
    let animatedLetters = [];
    for (let letter of letterSet) {
      animatedLetters.push(new Letter(letter.toUpperCase(), this.size));
    }
    return animatedLetters;
  }

  setSize(size) {
    this.size = size;
  }
}

class Letter {
  constructor(letter, size) {
    textSize(size);
    this.letter = letter;
    this.size = size;
    // this.w = textWidth(this.letter);
    this.w = this.letterWidth();
  }

  show(x, y, size) {
    noStroke();
    fill(255);
    textFont(font);
    textSize(size);
    text(this.letter, x, y);
  }

  letterWidth() {
    let leftPos = 5;
    let rightPos = 0;
    let pts = font.textToPoints(this.letter, 0, 0, this.size);
    for (let p of pts) {
      if (p.x < leftPos) {
        leftPos = p.x;
      }
      if (p.x > rightPos) {
        rightPos = p.x;
      }
    }
    return rightPos - leftPos;
  }
}