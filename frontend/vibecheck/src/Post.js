const Color = require('./Color.js');
const Engagement = require('./Engagement.js');

class Post {
    constructor(color, engagement, em, it) {
      this.color = color;
      this.engagement = engagement;
      this.em = em;
      this.it = it;
    }
    // Getter
    get colorString(){
        return (this.color.red + ' ' + this.color.green + ' ' + this.color.blue);
    }

    get engagementString(){
        return (this.engagement.likes + ' ' + this.engagement.comments);
    }

    get emotion(){
        return (this.em);
    }

    get item(){
        return (this.it);
    }
}

module.exports = Post

// let col = new Color(10, 20, 30);
// let eng = new Engagement(100, 200);
// const post = new Post(col, eng, "joy", "person");
//console.log(col.red);
//console.log(post.colorString);
//console.log(post.engagementString);
// console.log(post.emotion);
// console.log(post.item);