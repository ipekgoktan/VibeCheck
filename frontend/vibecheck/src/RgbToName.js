//RGB to closest image color
class ColorName {
    r;
    g;
    b;
    name;

    constructor(name,  r,  g,  b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    
    computeMSE(pixR,  pixG, pixB) {
        
        return (((pixR - this.r) * (pixR - this.r) + (pixG - this.g) * (pixG - this.g) + (pixB - this.b)
        * (pixB - this.b)) / 3);
       
    }
 
    getName() {
        return this.name;
    }
}



//red, orange, yellow, green, blue, purple, brown, black, white, pink, tan
function initColorList() {
    colorList = []
    colorList.push(new ColorName("Red", 255, 0, 0));
    colorList.push(new ColorName("Orange", 255, 128, 0));
    colorList.push(new ColorName("Dark-Blue", 0, 0, 255));
    colorList.push(new ColorName("Light-Blue", 102, 178, 255));
    colorList.push(new ColorName("Green", 0, 255, 0));
    colorList.push(new ColorName("Black", 0, 0, 0));
    colorList.push(new ColorName("White", 255, 255, 255));
    colorList.push(new ColorName("Yellow", 255, 255, 0));
    colorList.push(new ColorName("Purple", 102, 0, 204));
    colorList.push(new ColorName("Brown", 155, 103, 60));
    colorList.push(new ColorName("Pink", 255, 150, 205));
    colorList.push(new ColorName("Tan", 210, 180, 140));
    // Add more colors here
    return colorList;
}

function getColorNameFromRgb(r, g, b) {
    colorList = initColorList();
    closestMatch = null;
    minMSE = 10000;
    mse = 0;
    colorList.forEach((c) => {
        mse = c.computeMSE(r, g, b);
        if (mse < minMSE) {
            minMSE = mse;
            closestMatch = c;
        }
    })

   
    if (closestMatch != null) {
        return closestMatch.getName();
    } else {
        return "No matched color name.";
    }
}

//   client.faceDetection(link).then(result => {console.log(result.faceAnnotations); return("hi")});

console.log(getColorNameFromRgb(125, 36, 80))