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
    for (let letter of this.letters) {
      letter.show();
    }
  }

  formLetters(letterSet) {
    let animatedLetters = [];
    let xPos = this.x
    for (let letter of letterSet) {
      let l;
      if (random() < 0.5) {
        l = new DotsLetter(letter.toUpperCase(), xPos, this.y, this.size);
      } else {
        l = new Letter(letter.toUpperCase(), xPos, this.y, this.size);
      }
      animatedLetters.push(l);
      xPos += l.w + this.gap;
    }
    return animatedLetters;
  }

  setSize(size) {
    this.size = size;
  }
}

class Letter {
  constructor(letter, x, y, size) {
    this.letter = letter;
    this.size = size;
    this.w = this.letterWidth();
    this.x = x;
    this.y = y;
  }

  show() {
    noStroke();
    fill(255);
    textFont(font);
    textSize(this.size);
    text(this.letter, this.x, this.y);
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