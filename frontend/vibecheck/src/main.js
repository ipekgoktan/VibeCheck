const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient({
    keyFilename: "../../../frontend/vibecheck/generated-surf-340405-f9295239e3f4.json",
});

const fileName = '../../../frontend/vibecheck/src/picture.jpeg';

const detectLocalFile = async function() { //prints colors
    const [result] = await client.imageProperties(fileName);
    const colors = result.imagePropertiesAnnotation.dominantColors.colors;
    colors.forEach(color => console.log(color));
}

detectLocalFile()


// client
//     .labelDetection("../../../frontend/vibecheck/src/picture.jpeg")
//     .then((results) => {
//         const labels = results[0].labelAnnotations;
//         console.log("Labels: ");
//         labels.forEach((label) => console.log(label.description));
//     })
//     .catch((err) => {
//         console.error("ERROR", err);
//     })


