const Post = require('./Post.js');
const Color = require('./Color.js');
const Engagement = require('./Engagement.js');

class Profile {
    constructor(p, avg_likes, avg_com) {
      this.p = p;
      this.avg_likes = avg_likes;
      this.avg_com = avg_com;
    }
    // Getter
    get averageLikes(){
        return (this.avg_likes);
    }

    get averageComments(){
        return (this.avg_com);
    }

    get post(){
        return (this.p);
    }
}

const color = new Color(10, 20, 30);
const eng = new Engagement(100, 200);
const p = new Post(color, eng, "joy", "person");
const prof = new Profile(Post, 50, 60);
console.log(prof.averageLikes);
console.log(prof.averageComments);
//console.log((prof.post).colorString);