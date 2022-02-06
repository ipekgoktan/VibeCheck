const FindEmotion = async function(inputFile) {
    const vision = require("@google-cloud/vision");
  
    const client = new vision.ImageAnnotatorClient({
        keyFilename: "../../../frontend/vibecheck/generated-surf-340405-f9295239e3f4.json",
    });
    // Make a call to the Vision API to detect the faces
    const [result] = await client.faceDetection(inputFile);
    const faces = result.faceAnnotations;
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
        Emotion = "Joy";
    }
    if (angerMeeter == maxValue){
        Emotion =  "Anger";
    }
    if (sorowMeeter == maxValue){
        Emotion =  "Sad";
    }
    if (SuprizeMeeter == maxValue){
        Emotion = "Suprized";
    }

    console.log(Emotion);
    return Emotion;
}


FindEmotion('https://www.theladders.com/wp-content/uploads/happy-190806.jpg')