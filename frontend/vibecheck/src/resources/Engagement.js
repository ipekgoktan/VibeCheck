class Engagement {
    constructor(l, c) {
      this.l = l;;
      this.c = c;
    }
    // Getter
    get likes() {
      return this.l;
    }

    get comments() {
        return this.c;
    }
}
module.exports = Engagement