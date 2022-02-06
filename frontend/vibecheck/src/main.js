


//Given file will return rgb array of max color
const FindColors = async function(link) {
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
  console.log(FinalColors)
  return FinalColors;

}


module.exports =  {FindColors}



//FindColors('https://i.pinimg.com/originals/5e/b2/a0/5eb2a018bc696675928494091166ba55.jpg')




//Given file will return main emotions
// const FindEmotions = async function(link) {
//   var faces = "hi";
//   client.faceDetection(link).then(result => {console.log(result.faceAnnotations); return("hi")});
    
//     //(faces = result.faceAnnotations));

//   //const [result] = await client.faceDetection(link);
    
//   //console.log(faces)
//   //return(faces)
// }

/*
async function detectFaces(inputFile) {
  // Make a call to the Vision API to detect the faces
  const request = {image: {source: {filename: inputFile}}};
  const results = await client.faceDetection(request);
  const faces = results[0].faceAnnotations;
  return  faces;
}
//console.log(detectFaces('/Users/nicolerussack/VibeCheck/frontend/vibecheck/src/images.jpg'))



detectFaces('/Users/nicolerussack/VibeCheck/frontend/vibecheck/src/images.jpg').then(res => console.log(res)).catch(err => console.log(err))

/*
const FindEmotion = async function(inputFile) {
  // Make a call to the Vision API to detect the faces
  const [result] = await client.faceDetection(inputFile);
  const faces = result.faceAnnotations;
  console.log(faces);
  return faces;
}

function test(faces){

  joyMeeter = 0;
  angerMeeter = 0;
  sorowMeeter = 0;
  SuprizeMeeter = 0;
  faces.forEach((face) => {
    if (face.joyLikelihood == 'VERY_LIKELY'){
      joyMeeter++;
    }
    if (face.angerLikelihood == 'VERY_LIKELY'){
      angerMeeter++;
    }
    if (face.sorrowLikelihood == 'VERY_LIKELY'){
      sorowMeeter++;
    }
    if (face.surpriseLikelihood == 'VERY_LIKELY'){
      SuprizeMeeter++;
    }
  });

  var maxValue = Math.max(joyMeeter, angerMeeter, sorowMeeter, SuprizeMeeter);
  var Emotion = null;
  if (joyMeeter == maxValue){
    console.log('joy');
    Emotion = "Joy";
  }
  if (angerMeeter == maxValue){
    console.log('a');
    Emotion =  "Anger";
  }
  if (sorowMeeter == maxValue){
    console.log('s');
    Emotion =  "Sad";
  }
  if (SuprizeMeeter == maxValue){
    console.log('su');
    Emotion = "Suprized";
  }

  return Emotion;

}
*/
