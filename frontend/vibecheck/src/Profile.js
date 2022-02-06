const Post = require('./Post.js');

class Profile {


    findAverageLikes(images){
        var sum = 0;
        var count = 0
        images.forEach(image => {
            count+=1;
            sum+= image.getLikes();
        });
        return sum/count;
    }

    averageComments(images){
        var sum = 0;
        var count = 0
        images.forEach(image => {
            count+=1;
            sum+= image.getComments();

        });
        return sum/count;
    }




    constructor(images){
        this.images = images;
        this.averageLikes = this.findAverageLikes(images);
        this.averageComments = this.findAverageLikes(images);
    }

    getAverageLikes(){
        return this.averageLikes;
    }

    getImages(){
        return this.images;
    }

    getAverageComments(){
        return this.averageComments;
    }
    

}

module.exports = Profile

/*
//tests
post1 = new Post('https://i.pinimg.com/originals/b1/44/68/b1446847e3e6d257eafc72f8fe3a5575.jpg', 50, 3)
post2 = new Post('https://medias.spotern.com/spots/w640/235/235052-1569498558.jpg', 399, 3)
post3 = new Post('https://im.vsco.co/aws-us-west-2/dcd60a/163078038/60b678adb653a26b26d164c5/vsco60b678b007478.jpg?w=412&dpr=2.625', 500, 12)
post4 = new Post('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt3370yccot8ePwfOtHfCMwNETqhNfg5pGg&usqp=CAU', 223, 23)
post5 = new Post('https://i.pinimg.com/originals/31/fc/b6/31fcb6e6eb757ba5a7806cabea62d463.jpg', 43, 2)



posts = [post1, post2, post3, post4, post1]

EmmaChamberline = new Profile(posts)

console.log(EmmaChamberline.getAverageLikes())
console.log(EmmaChamberline.getImages())
console.log(EmmaChamberline.getAverageComments())

*/