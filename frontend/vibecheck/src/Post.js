const Color = require('./Color.js');
const Engagement = require('./Engagement.js');

class Post {
    constructor(color, eng, em, it) {
      this.color = color;
      this.eng = eng;
      this.em = em;
      this.it = it;
    }
    // Getter
    get colorString(){
        return (color.red + ' ' + color.green + ' ' + color.blue);
    }

    get engagementString(){
        return (eng.likes + ' ' + eng.comments);
    }

    get emotion(){
        return (this.em);
    }

    get item(){
        return (this.it);
    }
}

const color = new Color(10, 20, 30);
const eng = new Engagement(100, 200);
const post = new Post(color, eng, "joy", "person");
console.log(post.colorString);
console.log(post.engagementString);
console.log(post.emotion);
console.log(post.item);