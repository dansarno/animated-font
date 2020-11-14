class DotsLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size);
  }

  show() {
    colorMode(RGB);
    stroke(100);
    strokeWeight(2);
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
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size, {
      sampleFactor: 0.6
    });
  }

  show() {
    colorMode(RGB);
    noStroke();
    fill(0, 109, 212);
    for (let p of this.pts) {
      circle(p.x + sin(frameCount * 0.05 + p.y * 0.1) * 5, p.y, 5);
    }
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
    stroke(255, 115, 84);
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
      sampleFactor: 1
    });
  }

  show() {
    colorMode(HSB);
    let arrayOfPts = this.splitPts()
    // let pts = arrayOfPts[0];
    for (let pts of arrayOfPts) {
      for (let i = 0; i < pts.length; i++) {
        stroke(map(i, 0, pts.length, 0, 360), 40, 100);
        strokeWeight(this.size / 20);
        let p = pts[(frameCount + i) % pts.length];
        let q = pts[(frameCount + i + 1) % pts.length];
        line(p.x, p.y, q.x, q.y);
      }
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

class PerlinLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size, {
      sampleFactor: 0.6
    });
  }

  show() {
    colorMode(RGB);
    noStroke();
    fill(156, 255, 177);
    let arrayOfPts = this.splitPts()
    let pts = arrayOfPts[0];
    let centreX, centreY;
    [centreX, centreY] = this.com();
    beginShape();
    for (let i = 0; i < pts.length; i++) {
      vertex(pts[i].x + ((pts[i].x - centreX) * (noise(i / 10) / 2)),
        pts[i].y + (pts[i].y - centreY) * (noise(i / 10) / 2));
    }
    endShape(CLOSE);
  }
}