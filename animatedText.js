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

  /**
   * Renders each letter to canvas
   */
  render() {
    for (let letter of this.letters) {
      letter.show();
    }
  }

  /**
   * Forms an array of animated letters from an input string
   * @param  {String} letterSet String of characters to animate
   * @return {Array}            Array of animated letters
   */
  formLetters(letterSet) {
    let animatedLetters = [];
    let xPos = this.x
    for (let i = 0; i < letterSet.length; i++) {
      let l;
      if (this.types.length > 0) {
        let randomIndex = Math.floor(random(0, this.types.length));
        l = new this.types[randomIndex](letterSet[i].toUpperCase(), xPos, this.y, this.size);
      } else {
        let allTypes = [RainbowLetter, DotsLetter, LinesLetter, GlitchLetter,
          PerlinLetter, WaveLetter, NeonLetter
        ];
        let randomIndex = Math.floor(random(0, allTypes.length));
        l = new allTypes[randomIndex](letterSet[i].toUpperCase(), xPos, this.y, this.size);
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

  /**
   * Calculates the width of a letter using limits of textToPoints
   * @return {Number} Width of the letter in pixels
   */
  letterWidth() {
    if (this.letter == ' ') {
      return this.size / 2;
    }
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

  /**
   * Calculates the centre of mass of a letter using the averages of textToPoints
   * @return {Array} Two element array of [xCOM, yCOM]
   */
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

  /**
   * Splits the points returned from textToPoints into separate arrays if there
   * is a discontinuity in the letter, e.g. "B" has three distinct curves that
   * define the letter stroke: one outer and two inner curves.
   * Note: this function ensures the first array constains the most points i.e.
   * is the outer edge of the letter.
   * @return {Array} Array of array of points
   */
  splitPts() {
    let arrOfPts = [
      []
    ];
    if (this.pts.length == 0) {
      return arrOfPts
    }
    let expectedDist = dist(this.pts[1].x, this.pts[1].y, this.pts[0].x, this.pts[0].y);
    for (let i = 0; i < this.pts.length; i++) {
      let p = this.pts[i];
      let q = this.pts[(i + 1) % this.pts.length];
      if (dist(p.x, p.y, q.x, q.y) > expectedDist * 1.5) {
        arrOfPts.push([]);
      } else {
        arrOfPts[arrOfPts.length - 1].push(p);
      }
    }

    // Rearrange array so that the longest path is the first element
    let mostPtsIndex = 0;
    let mostPts = 0;
    for (let i = 0; i < arrOfPts.length; i++) {
      if (mostPts < arrOfPts[i].length) {
        mostPts = arrOfPts[i].length;
        mostPtsIndex = i;
      }
    }
    [arrOfPts[0], arrOfPts[mostPtsIndex]] = [arrOfPts[mostPtsIndex], arrOfPts[0]];
    return arrOfPts;
  }
}