const Color = require('./Color.js');

class Post {
    constructor(color) {
      this.color = color;
    }
    // Getter
    get colorString(){
        return (color.red + ' ' + color.green + ' ' + color.blue);
    }
}

const color = new Color(10, 20, 30);
const post = new Post(color);
console.log(post.colorString);