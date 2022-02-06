const Emotions = require("./GetEmotion");

class Post {


    GetEmotion(link){

        return Emotions.FindEmotion('https://www.theladders.com/wp-content/uploads/happy-190806.jpg').then(
        result =>  {return result;
        console.log(result)
        })
    }

    constructor(link, likes, comments){
        this.Link = link;
        this.Likes = likes;
        this.Comments = comments;
        this.emotion = this.GetEmotion(link)
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

    getEmotion(){
        return this.emotion;
    }
    
}


class Profile {


    findAverageLikes(images){
        let count = 1;
        let sum = 0;
        images.forEach(image => {
            console.log(image.getLikes())
            sum += image.getLikes()
            count += 1
        });
        return sum/count;
    }

    findAverageComments(images){
        let count = 1;
        let sum = 0;
        images.forEach(image => {
            console.log(image.getComments())
            sum += image.getComments()
            count += 1
        });
        return sum/count;
    }

    constructor(images){
        this.images = images;
        this.averageLikes = this.findAverageLikes(images);
        this.averageComments = this.findAverageComments(images);
    }

    getAverageLikes(){
        return this.averageLikes;
    }

    getAverageComments(){
        return this.averageComments;
    }

    

}



post1 = new Post('https://i.pinimg.com/originals/b1/44/68/b1446847e3e6d257eafc72f8fe3a5575.jpg', 50, 3)
console.log(post1.getEmotion());


//testing 
/*
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