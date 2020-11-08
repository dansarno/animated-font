class DotsLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size);
  }

  show() {
    stroke(0);
    fill(255);
    let radius = this.size / 25;
    for (let p of this.pts) {
      ellipse(p.x + random(-3, 3), p.y + random(-3, 3), radius, radius);
    }
  }
}

class WaveLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size);
  }

  show() {
    stroke(255, 0, 255);
    fill(255, 0, 255);
    beginShape(POINTS);
    for (let p of this.pts) {
      vertex(p.x + sin(frameCount * 0.05 + p.y * 0.1) * 5, p.y);
    }
    endShape();
  }
}

class AlphaLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size);
  }

  show() {
    noStroke();
    fill(0, 255, 0);
    let radius = this.size / 25;
    for (let p of this.pts) {
      if (p.alpha > 160) {
        ellipse(p.x, p.y, radius, radius);
      }
    }
  }
}

class GlitchLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
  }

  show() {
    noStroke();
    textFont(font);
    textSize(this.size);

    if (random() < 0.6) {
      fill(255, 0, 0); // RED
      text(this.letter, this.x + random(-5, 5), this.y + random(-5, 5));
    }

    if (random() < 0.6) {
      fill(0, 255, 0); // GREEN
      text(this.letter, this.x + random(-5, 8), this.y + random(-5, 8));
    }

    if (random() < 0.6) {
      fill(0, 0, 255); // BLUE
      text(this.letter, this.x + random(-8, -5), this.y + random(3, 6));
    }

    fill(255); // WHOTE
    text(this.letter, this.x + random(-1, 1), this.y + random(-1, 1));
  }
}