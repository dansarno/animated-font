class AnimaText {
  constructor(word, x, y, size = 150, gap = 10, types = []) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.types = types;
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
    for (let i = 0; i < letterSet.length; i++) {
      let l;
      if (this.types.length > 0) {
        let randomIndex = Math.floor(random(0, this.types.length));
        l = new this.types[randomIndex](letterSet[i].toUpperCase(), xPos, this.y, this.size);
      } else {
        if (random() < 0.5) {
          l = new DotsLetter(letterSet[i].toUpperCase(), xPos, this.y, this.size);
        } else {
          l = new GlitchLetter(letterSet[i].toUpperCase(), xPos, this.y, this.size);
        }
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
    this.x = x;
    this.y = y;
    this.w = this.letterWidth();
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

  com() {
    let sumX = 0;
    let sumY = 0;
    let pts = font.textToPoints(this.letter, 0, 0, this.size);
    for (let p of pts) {
      sumX += p.x;
      sumY += p.y;
    }
    return [(sumX / pts.length) + this.x, (sumY / pts.length) + this.y];
  }
}