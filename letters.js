class DotsLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size);
  }

  show() {
    colorMode(RGB);
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
    colorMode(RGB);
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
    colorMode(RGB);
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
    colorMode(RGB);
    noStroke();
    textFont(font);
    textSize(this.size);

    if (random() < 0.6) {
      fill(249, 135, 255);
      text(this.letter, this.x + random(-5, 5), this.y + random(-5, 5));
    }

    if (random() < 0.6) {
      fill(255, 249, 135);
      text(this.letter, this.x + random(-5, 8), this.y + random(-5, 8));
    }

    if (random() < 0.6) {
      fill(214, 255, 252);
      text(this.letter, this.x + random(-8, -5), this.y + random(3, 6));
    }

    fill(255);
    text(this.letter, this.x + random(-1, 1), this.y + random(-1, 1));
  }
}

class LinesLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size, {
      sampleFactor: 0.6
    });
  }

  show() {
    colorMode(RGB);
    stroke(214, 255, 252);
    strokeWeight(2);
    for (let i = 0; i < this.pts.length - 1; i++) {
      let p = this.pts[Math.floor(random(0, this.pts.length))];
      let q = this.pts[Math.floor(random(0, this.pts.length))];
      if (dist(p.x, p.y, q.x, q.y) < this.w * 0.7) {
        line(p.x, p.y, q.x, q.y);
      }
    }
  }
}

class RainbowLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size, {
      sampleFactor: 0.3
    });
  }

  show() {
    colorMode(HSB);
    for (let i = 0; i < this.pts.length; i++) {
      stroke(map(i, 0, this.pts.length, 0, 360), 40, 100);
      strokeWeight(3);
      let p = this.pts[(frameCount + i) % this.pts.length];
      let q = this.pts[(frameCount + i + 1) % this.pts.length];
      line(p.x, p.y, q.x, q.y);
    }
  }
}

class NeonLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.randomStart = random();
  }

  show() {
    colorMode(RGB);
    stroke(255, 51, 241);
    strokeJoin(ROUND);
    strokeWeight(8);
    noFill();
    textFont(font);
    textSize(this.size);
    text(this.letter, this.x, this.y);
    if (noise((frameCount / 10) + this.randomStart) < 0.7) {
      stroke(255);
      strokeWeight(4);
      noFill();
      textFont(font);
      textSize(this.size);
      text(this.letter, this.x, this.y);
    }
  }
}