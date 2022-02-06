const Post = require('./Post.js');
const Profile = require("./Profile.js");

//freqency, total likes, totoal comments


post1 = new Post('https://i.pinimg.com/originals/b1/44/68/b1446847e3e6d257eafc72f8fe3a5575.jpg', 50, 3, "Tan")
post2 = new Post('https://medias.spotern.com/spots/w640/235/235052-1569498558.jpg', 399, 3, "Tan", "Sadness" )
post3 = new Post('https://im.vsco.co/aws-us-west-2/dcd60a/163078038/60b678adb653a26b26d164c5/vsco60b678b007478.jpg?w=412&dpr=2.625', 500, 12, "Green" , "Joy")
post4 = new Post('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt3370yccot8ePwfOtHfCMwNETqhNfg5pGg&usqp=CAU', 223, 23, "Yellow", "Joy")
post5 = new Post('https://i.pinimg.com/originals/31/fc/b6/31fcb6e6eb757ba5a7806cabea62d463.jpg', 43, 2, "Purple", "Suprize")



posts = [post1, post2, post3, post4, post5]

EmmaChamberline = new Profile(posts)

function GetTopEmotions(profile){
    var emotionDict = {};
    emotionDict["Joy"] = [0, 0, 0];
    emotionDict["Sadness"] = [0, 0, 0];
    emotionDict["Anger"] = [0, 0, 0];
    emotionDict["Suprize"] = [0, 0, 0];
    emotionDict["Nutural"] = [0, 0, 0];


    Fotozzz = profile.getImages()

    Fotozzz.forEach(pic => {
        emotion = pic.getEmotion()
        console.log(pic.getLikes())
        console.log(emotion)
        emotionDict[emotion][0] += 1
        emotionDict[emotion][2] += pic.getLikes()
        emotionDict[emotion][2] += pic.getComments()

    });

    return  emotionDict
}






console.log(GetTopEmotions(EmmaChamberline))