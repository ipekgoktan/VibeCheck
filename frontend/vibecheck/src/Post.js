const Emotions = require("./GetEmotion");

class Post {

    
    GetEmotion(link){

        Emotions.FindEmotion('https://www.theladders.com/wp-content/uploads/happy-190806.jpg').then(
        result =>  {
            console.log(result)
            return result;
        })
    }

    constructor(link, likes, comments, color, emotion){
        this.Link = link;
        this.Likes = likes;
        this.Comments = comments;
        this.Color = color
        this.Emotion = emotion
    }

    getLink(){
        return this.Link;
    }

    getLikes(){
        return this.Likes;
    }

    getComments(){
        return this.Comments;
    }

    getColor(){
        return this.Color;
    }

    getEmotion(){
        return this.Emotion;
    }
    
}




module.exports = Post



/*
//testing 

post1 = new Post('https://i.pinimg.com/originals/b1/44/68/b1446847e3e6d257eafc72f8fe3a5575.jpg', 50, 3, 'Blue')
console.log(post1.getLink());
console.log(post1.getLikes());
console.log(post1.getComments());
console.log(post1.getColor());






post1 = new Post('https://i.pinimg.com/originals/b1/44/68/b1446847e3e6d257eafc72f8fe3a5575.jpg', 50, 3)
post2 = new Post('https://medias.spotern.com/spots/w640/235/235052-1569498558.jpg', 399, 3)
post3 = new Post('https://im.vsco.co/aws-us-west-2/dcd60a/163078038/60b678adb653a26b26d164c5/vsco60b678b007478.jpg?w=412&dpr=2.625', 500, 12)
post4 = new Post('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt3370yccot8ePwfOtHfCMwNETqhNfg5pGg&usqp=CAU', 223, 23)
post5 = new Post('https://i.pinimg.com/originals/31/fc/b6/31fcb6e6eb757ba5a7806cabea62d463.jpg', 43, 2)

posts = [post1, post2, post3, post4, post1]

EmmaChamberline = new Profile(posts)

console.log("Likes")
console.log(EmmaChamberline.getAverageLikes())
console.log("Comments")
console.log(EmmaChamberline.getAverageComments())
*/