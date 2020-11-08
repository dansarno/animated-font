class DotsLetter extends Letter {
  constructor(letter, x, y, size) {
    super(letter, x, y, size);
    this.pts = font.textToPoints(this.letter, this.x, this.y, this.size);
  }

  show() {
    noStroke();
    fill(255, 255, 0);
    for (let p of this.pts) {
      circle(p.x + random(-3, 3), p.y + random(-3, 3), this.size / 50);
    }
  }
}