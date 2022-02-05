const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient({
    keyFilename: "../../../frontend/vibecheck/generated-surf-340405-f9295239e3f4.json",
});

client
    .labelDetection("/Users/ipekgoktan/Documents/git/VibeCheck/frontend/vibecheck/src/picture.jpeg")
    .then((results) => {
        const labels = results[0].labelAnnotations;
        console.log("Labels: ");
        labels.forEach((label) => console.log(label.description));
    })
    .catch((err) => {
        console.error("ERROR", err);
    })
