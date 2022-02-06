import os
from google.cloud import vision
from google.cloud.vision_v1 import types


def FindImageItems(text):
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'generated-surf-340405-f9295239e3f4.json'
    client = vision.ImageAnnotatorClient()

    image = types.Image()
    image.source.image_uri = text

    Emotions = []
    Objects = []
    Colors = []


    #### LABEL DETECTION ######
    response_label = client.label_detection(image=image)

    for label in response_label.label_annotations:
        Objects.append(label.description)
        #print({'label': label.description, 'score': label.score})



    response_face = client.face_detection(image=image)



    for face_detection in response_face.face_annotations:
        d = {
            'confidence': face_detection.detection_confidence,
            'joy': face_detection.joy_likelihood,
            'sorrow': face_detection.sorrow_likelihood,
            'surprise': face_detection.surprise_likelihood,
            'anger': face_detection.anger_likelihood
        }
        for item in d:
            if d[item] > 3:
                Emotions.append(item)


    #### IMAGE PROPERTIES ######

    response_image = client.image_properties(image=image)


    for c in response_image.image_properties_annotation.dominant_colors.colors[:3]:
        d = {
            'color': c.color,
            'score': c.score,
            'pixel_fraction': c.pixel_fraction
        }


        Colors.append(c.color)


    return(Emotions, Objects, Colors)



print(FindImageItems('https://i.pinimg.com/originals/e9/d9/c7/e9d9c75e100423632b198c08a5bbc3bd.jpg'))