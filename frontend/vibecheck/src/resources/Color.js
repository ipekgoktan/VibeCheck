class Color {
    constructor(r, g, b) {
      this.r = r;
      this.g = g;
      this.b = b;
    }

    // Getter
    get red() {
        return this.r;
    }

    get green() {
        return this.g;
    }

    get blue() {
        return this.b;
    }
}
module.exports = Color
  
//   const c = new Color(10, 20, 30);
  
//   console.log(c.red);
//   console.log(c.green);
//   console.log(c.blue);