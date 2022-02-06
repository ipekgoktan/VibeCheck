
//given image will return color
FindColors = async function (link) {
    const vision = require("@google-cloud/vision");
  
    const client = new vision.ImageAnnotatorClient({
        keyFilename: "../../../frontend/vibecheck/generated-surf-340405-f9295239e3f4.json",
    });
    
    const [result] = await client.imageProperties( link );
    const colors = result.imagePropertiesAnnotation.dominantColors.colors;
        
        //find max color
        var maxColorScore = 0;
        var maxColor = null;
        colors.forEach((color) => {
            if(color['score'] > maxColorScore){
              maxColorScore = color['score'];
              maxColor = color;
            }
        });
      
        //return array of rgb 
        FinalColors = []
        FinalColors.push(maxColor['color']['red'])
        FinalColors.push(maxColor['color']['green'])
        FinalColors.push(maxColor['color']['blue'])
        return  FinalColors;
      
}



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


//console.log(FindColors('/Users/nicolerussack/VibeCheck/frontend/vibecheck/src/images.jpg'))




Find = async function(link) {
    const vision = require("@google-cloud/vision");
  
    const client = new vision.ImageAnnotatorClient({
        keyFilename: "../../../frontend/vibecheck/generated-surf-340405-f9295239e3f4.json",
    });
    
    const [result] = await client.imageProperties( link );
    const colors = result.imagePropertiesAnnotation.dominantColors.colors;
    return colors;
}



//everhthing done in here 


/*
let a;
const Color = FindColors('https://images.squarespace-cdn.com/content/v1/572731df1bbee0567229919e/1635936394898-JS98GW0TOD79E1X6HJLY/Peach+PRC+-+Press+Image+6+%28Jess+Gleeson%29.jpg?format=2500w')
  .then((response) =>  a = getColorNameFromRgb(response[0], response[1], response[2]),
  //console.log(a)
  )
  .then((user) => {
    return a;
  });

const printAddress = async () => {
  const a = await Color;
  //console.log(a);
};

console.log(printAddress())
*/

const address = FindColors("https://images.squarespace-cdn.com/content/v1/572731df1bbee0567229919e/1635936394898-JS98GW0TOD79E1X6HJLY/Peach+PRC+-+Press+Image+6+%28Jess+Gleeson%29.jpg?format=2500w")
  .then((response) => a = getColorNameFromRgb(response[0], response[1], response[2]))
  .then((user) => {
    return a;
  });

const printAddress = async () => {
  const a = await address;
  console.log(a);
};

console.log(printAddress())

/*
const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = async () => {
  const a = await address;
  console.log(a);
};

printAddress();
*/

/*
mport {useState, useEffect} from 'react';

function hi(){
  const [colors, setColors] = useState([]); 
  const [displayText, setDisplayText] = useState([]); 

  // function definition for FInd and FindCOlors here
  function clicked(){
    Find('/Users/russack/VibeCheck/frontend/vibecheck/src/images.jpg').then(setColors)
  }

  useEffect(() => {
    if(colors.length !== 0) {
       setDisplayText(FindColors(colors));
    }
  }, [colors]);
  
  return (
    <div>
      <p>{JSON.stringify(displayText)}</p>
      <button onClick={clicked}> click </button>
    </div>
  )
}

*/