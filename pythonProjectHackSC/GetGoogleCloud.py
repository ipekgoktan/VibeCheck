import os
from google.cloud import vision
from google.cloud.vision_v1 import types


def FindImageItems(image):
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'generated-surf-340405-f9295239e3f4.json'
    client = vision.ImageAnnotatorClient()

    image = types.Image()
    image.source.image_uri = 'https://img.artpal.com/51411/44-17-1-3-3-45-10m.jpg'


    #### LABEL DETECTION ######

    response_label = client.label_detection(image=image)

    for label in response_label.label_annotations:
        print({'label': label.description, 'score': label.score})


    response_face = client.face_detection(image=image)

    face_data = []

    for face_detection in response_face.face_annotations:
        d = {
            'confidence': face_detection.detection_confidence,
            'joy': face_detection.joy_likelihood,
            'sorrow': face_detection.sorrow_likelihood,
            'surprise': face_detection.surprise_likelihood,
            'anger': face_detection.anger_likelihood
        }
        print("Face detection")
        print(d)



    #### IMAGE PROPERTIES ######

    response_image = client.image_properties(image=image)

    image_data = []

    for c in response_image.image_properties_annotation.dominant_colors.colors[:3]:
        d = {
            'color': c.color,
            'score': c.score,
            'pixel_fraction': c.pixel_fraction
        }
        print("Image Properties")
        print(d)


    #### TEXT DETECTION ######

    response_text = client.text_detection(image=image)

    for r in response_text.text_annotations:
        d = {
            'text': r.description
        }
        print("Text detection")
        print(d)


