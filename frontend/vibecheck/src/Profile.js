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

    // get postList(){
    //     var posColors = "hi: ";
    //     for (let i=0; i<posts.length; i++) {
    //         console.log("test");
    //         posColors += posts[i] + ' ';
    //     }
    //     return (posColors);
    // }
}

let color = new Color(10, 20, 30);
let color2 = new Color(1, 2, 3);
let eng = new Engagement(100, 200);
let p = new Post(color, eng, "joy", "person");
let p2 = new Post(color, eng, "sad", "cat");
var ps = [];
ps.push[p];
ps.push[p2];
const prof = new Profile(p, 50, 60);
//console.log(prof.postList);
console.log(prof.post.colorString);