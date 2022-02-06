const Post = require('./Post.js');
const Profile = require("./Profile.js");

//freqency, total likes, totoal comments


post1 = new Post('https://i.pinimg.com/originals/b1/44/68/b1446847e3e6d257eafc72f8fe3a5575.jpg', 50, 3, "Tan")
post2 = new Post('https://medias.spotern.com/spots/w640/235/235052-1569498558.jpg', 399, 3, "Tan")
post3 = new Post('https://im.vsco.co/aws-us-west-2/dcd60a/163078038/60b678adb653a26b26d164c5/vsco60b678b007478.jpg?w=412&dpr=2.625', 500, 12, "Green")
post4 = new Post('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvt3370yccot8ePwfOtHfCMwNETqhNfg5pGg&usqp=CAU', 223, 23, "Yellow")
post5 = new Post('https://i.pinimg.com/originals/31/fc/b6/31fcb6e6eb757ba5a7806cabea62d463.jpg', 43, 2, "Purple")



posts = [post1, post2, post3, post4, post5]

EmmaChamberline = new Profile(posts)

function GetTopTimages(profile){
    var colorDict = {};
colorDict["Red"] = [0, 0, 0];
colorDict["Orange"] = [0, 0, 0];
colorDict["Dark-Blue"] = [0, 0, 0];
colorDict["Light-Blue"] = [0, 0, 0];
colorDict["Green"] = [0, 0, 0];
colorDict["Black"] = [0, 0, 0];
colorDict["White"] = [0, 0, 0];
colorDict["Yellow"] = [0, 0, 0];
colorDict["Purple"] = [0, 0, 0];
colorDict["Brown"] = [0, 0, 0];
colorDict["Pink"] = [0, 0, 0];
colorDict["Tan"] = [0, 0, 0];


Fotozzz = profile.getImages()

Fotozzz.forEach(pic => {
    colorDict[pic.getColor()][0]++
    colorDict[pic.getColor()][1] += pic.getLikes()
    colorDict[pic.getColor()][2] += pic.getComments()
});


let Color1Score = 0;
let Color1;
let Color2Score = 0;
let Color2;
let Color3Score = 0;
let Color3;
let Color4Score = 0;
let Color4;
for (let color in colorDict) {
    if (colorDict[color][0] > Color1Score){
        Color1Scoe = colorDict[color][0];
        Color1 = color
    }
}



for (let color in colorDict) {
    if (colorDict[color][0] > Color2Score && color != Color1){
        Color2Scoe = colorDict[color][0];
        Color2 = color
    }
}


for (let color in colorDict) {
    if (colorDict[color][0] > Color3Score && color != Color1 && color != Color2){
        Color3Scoe = colorDict[color][0];
        Color3 = color
    }
}


for (let color in colorDict) {
    if (colorDict[color][0] > Color4Score && color != Color1 && color != Color2 && color != Color3){
        Color4Scoe = colorDict[color][0];
        Color4 = color
    }
}


var EndingDict = {};
EndingDict[Color1] = colorDict[Color1]
EndingDict[Color2] = colorDict[Color2]
EndingDict[Color3] = colorDict[Color3]
EndingDict[Color4] = colorDict[Color4]


return EndingDict


}

console.log(GetTopTimages(EmmaChamberline))