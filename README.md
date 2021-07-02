# API Builder Plugin for AWS Rekognition for Image Analysis

[**Axway API Builder**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder.html) flow-node that implements [**AWS Rekognition**](https://docs.aws.amazon.com/rekognition/index.html) for image Analysis : *api-builder-plugin-rekognition*.

## About flow-nodes

Flow-nodes are used within Axway API Builder's flow editor that is a low-code / no-code solution to designing and developing services
that integrate to many different connected components, such as databases and APIs.

## Install

After creating your [**API Builder Project**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_getting_started_guide.html), you can install this plugin using npm:

```
npm install api-builder-plugin-rekognition
```

> Note that this command will install from npm. If you want to install locally, then provide the full path to the plugin folder

Before launching your API Builder app that uses this plugin, you must set the following two environment variables as per the [**AWS SDK for JavaScript online docs**](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html):

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY

You should also add the following to the */conf/default.js* file in order to overcome the 1MB default limit on POST data:

```
bodyParser: {
  limit: '5mb'
},
```

## Use

Find the plugin in the AI group in the Flow-Nodes panel. Drag onto the canvas and select the desired method and provide the input Text and wire up to the rest of your flow as shown below:

![](https://i.imgur.com/5hl3tGg.png)

Images (JPEG or PNG) need to be provided as Base64 encoded strings. You can find many Base64 encoders online such as this [**one**](https://codebeautify.org/image-to-base64-converter).

## Methods

The currently implemented methods are described below.

### Detect Labels

AWS docs are [**here**](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html)

Provide the *Image* input as a Base64 encoded string and the output will be similar to below:

Image = Base64 encoded version of the following image:

![](https://i.imgur.com/D9UYxiw.jpg)

```
{
    "Labels": [
        {
            "Name": "Car",
            "Confidence": 98.41893005371094,
            "Instances": [
                {
                    "BoundingBox": {
                        "Width": 0.9095886945724487,
                        "Height": 0.4260041415691376,
                        "Left": 0.044332683086395264,
                        "Top": 0.37117668986320496
                    },
                    "Confidence": 98.41893005371094
                }
            ],
            "Parents": [
                {
                    "Name": "Vehicle"
                },
                {
                    "Name": "Transportation"
                }
            ]
        },
        {
            "Name": "Automobile",
            "Confidence": 98.41893005371094,
            "Instances": [],
            "Parents": [
                {
                    "Name": "Vehicle"
                },
                {
                    "Name": "Transportation"
                }
            ]
        },
        .
        .
        .
        {
            "Name": "Jaguar Car",
            "Confidence": 57.534969329833984,
            "Instances": [],
            "Parents": [
                {
                    "Name": "Car"
                },
                {
                    "Name": "Vehicle"
                },
                {
                    "Name": "Transportation"
                }
            ]
        }
    ],
    "LabelModelVersion": "2.0"
}
```

### Detect Text

AWS docs are [**here**](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html)

Provide the *Image* input as a Base64 encoded string and the output will be similar to below:

Image = Base64 encoded version of the following image:

![](https://i.imgur.com/3GDx91H.jpg)

```
{
    "TextDetections": [
        {
            "DetectedText": "Platforms",
            "Type": "LINE",
            "Id": 0,
            "Confidence": 80.76984405517578,
            "Geometry": {
                "BoundingBox": {
                    "Width": 0.322684109210968,
                    "Height": 0.21306292712688446,
                    "Left": 0.31165120005607605,
                    "Top": 0.20371627807617188
                },
                "Polygon": [
                    {
                        "X": 0.32710322737693787,
                        "Y": 0.20371627807617188
                    },
                    {
                        "X": 0.6343352794647217,
                        "Y": 0.33576905727386475
                    },
                    {
                        "X": 0.6188832521438599,
                        "Y": 0.41677922010421753
                    },
                    {
                        "X": 0.31165120005607605,
                        "Y": 0.28472644090652466
                    }
                ]
            }
        },
        {
            "DetectedText": "Tickets",
            "Type": "LINE",
            "Id": 1,
            "Confidence": 100,
            "Geometry": {
                "BoundingBox": {
                    "Width": 0.26651281118392944,
                    "Height": 0.18099485337734222,
                    "Left": 0.28803831338882446,
                    "Top": 0.3775637149810791
                },
                "Polygon": [
                    {
                        "X": 0.30245441198349,
                        "Y": 0.3775637149810791
                    },
                    {
                        "X": 0.5545511245727539,
                        "Y": 0.4674002528190613
                    },
                    {
                        "X": 0.5401350259780884,
                        "Y": 0.5585585832595825
                    },
                    {
                        "X": 0.28803831338882446,
                        "Y": 0.46872198581695557
                    }
                ]
            }
        },
        .
        .
        .
        {
            "DetectedText": "K",
            "Type": "WORD",
            "Id": 9,
            "ParentId": 4,
            "Confidence": 66.06149291992188,
            "Geometry": {
                "BoundingBox": {
                    "Width": 0.05910034105181694,
                    "Height": 0.0735236182808876,
                    "Left": 0.7411853075027466,
                    "Top": 0.5968468189239502
                },
                "Polygon": [
                    {
                        "X": 0.7411853075027466,
                        "Y": 0.5968468189239502
                    },
                    {
                        "X": 0.7794448733329773,
                        "Y": 0.5518018007278442
                    },
                    {
                        "X": 0.8132032752037048,
                        "Y": 0.6171171069145203
                    },
                    {
                        "X": 0.7749437093734741,
                        "Y": 0.6610360145568848
                    }
                ]
            }
        }
    ],
    "TextModelVersion": "3.0"
}
```

### Detect Faces

AWS docs are [**here**](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html)

Provide the *Image* input as a Base64 encoded string and the output will be similar to below:

Image = Base64 encoded version of the following image:

![](https://i.imgur.com/Eseki3z.jpg)

```
{
    "FaceDetails": [
        {
            "BoundingBox": {
                "Width": 0.37403011322021484,
                "Height": 0.3589228093624115,
                "Left": 0.3247712552547455,
                "Top": 0.07539718598127365
            },
            "AgeRange": {
                "Low": 23,
                "High": 35
            },
            "Smile": {
                "Value": false,
                "Confidence": 98.7928695678711
            },
            "Eyeglasses": {
                "Value": true,
                "Confidence": 99.85688018798828
            },
            .
            .
            .
            "MouthOpen": {
                "Value": false,
                "Confidence": 95.0227279663086
            },
            "Emotions": [
                {
                    "Type": "CALM",
                    "Confidence": 98.27169036865234
                },
                {
                    "Type": "CONFUSED",
                    "Confidence": 0.4600139260292053
                },
                .
                .
                .
                {
                    "Type": "HAPPY",
                    "Confidence": 0.08039141446352005
                }
            ],
            "Landmarks": [
                {
                    "Type": "eyeLeft",
                    "X": 0.4211536645889282,
                    "Y": 0.22201673686504364
                },
                {
                    "Type": "eyeRight",
                    "X": 0.5880940556526184,
                    "Y": 0.22860434651374817
                },
                .
                .
                .
                {
                    "Type": "upperJawlineRight",
                    "X": 0.6837441325187683,
                    "Y": 0.2481657713651657
                }
            ],
            "Pose": {
                "Roll": 2.1925508975982666,
                "Yaw": 0.3401939868927002,
                "Pitch": 11.061576843261719
            },
            "Quality": {
                "Brightness": 77.83470916748047,
                "Sharpness": 94.08262634277344
            },
            "Confidence": 99.99972534179688
        }
    ]
}
```

### Detect Moderation Labels

AWS docs are [**here**](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectModerationLabels.html)

Provide the *Image* input as a Base64 encoded string and the output will be similar to below:

Image = Base64 encoded version of the following image:

![](https://i.imgur.com/D7maIMa.jpg)

```
{
    "ModerationLabels": [
        {
            "Confidence": 95.99689483642578,
            "Name": "Alcoholic Beverages",
            "ParentName": "Alcohol"
        },
        {
            "Confidence": 95.99689483642578,
            "Name": "Alcohol",
            "ParentName": ""
        }
    ],
    "ModerationModelVersion": "4.0"
}
```

### Detect Personal Protective Equipment (PPE)

AWS docs are [**here**](https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectProtectiveEquipment.html)

Provide the *Image* input as a Base64 encoded string and the output will be similar to below:

Image = Base64 encoded version of the following image:

![](https://i.imgur.com/2XU5Y3f.jpg)

```
{
    "ProtectiveEquipmentModelVersion": "1.0",
    "Persons": [
        {
            "BodyParts": [
                {
                    "Name": "FACE",
                    "Confidence": 99.33659362792969,
                    "EquipmentDetections": [
                        {
                            "BoundingBox": {
                                "Width": 0.09513942152261734,
                                "Height": 0.10421869158744812,
                                "Left": 0.4654864966869354,
                                "Top": 0.32142555713653564
                            },
                            "Confidence": 99.97029876708984,
                            "Type": "FACE_COVER",
                            "CoversBodyPart": {
                                "Confidence": 89.59506225585938,
                                "Value": true
                            }
                        }
                    ]
                },
                {
                    "Name": "LEFT_HAND",
                    "Confidence": 97.67623901367188,
                    "EquipmentDetections": []
                },
                {
                    "Name": "RIGHT_HAND",
                    "Confidence": 56.84904479980469,
                    "EquipmentDetections": [
                        {
                            "BoundingBox": {
                                "Width": 0.09019285440444946,
                                "Height": 0.10900517553091049,
                                "Left": 0.22584359347820282,
                                "Top": 0.4841454327106476
                            },
                            "Confidence": 65.1576919555664,
                            "Type": "HAND_COVER",
                            "CoversBodyPart": {
                                "Confidence": 99.8289566040039,
                                "Value": true
                            }
                        }
                    ]
                },
                {
                    "Name": "HEAD",
                    "Confidence": 99.99517822265625,
                    "EquipmentDetections": []
                }
            ],
            "BoundingBox": {
                "Width": 0.4809523820877075,
                "Height": 0.8015267252922058,
                "Left": 0.2380952388048172,
                "Top": 0.18320611119270325
            },
            "Confidence": 99.83000183105469,
            "Id": 0
        },
        {
            "BodyParts": [
                {
                    "Name": "FACE",
                    "Confidence": 99.58224487304688,
                    "EquipmentDetections": [
                        {
                            "BoundingBox": {
                                "Width": 0.08927446603775024,
                                "Height": 0.10428228974342346,
                                "Left": 0.12037970125675201,
                                "Top": 0.33622512221336365
                            },
                            "Confidence": 99.7800521850586,
                            "Type": "FACE_COVER",
                            "CoversBodyPart": {
                                "Confidence": 99.94519805908203,
                                "Value": true
                            }
                        }
                    ]
                },
                {
                    "Name": "LEFT_HAND",
                    "Confidence": 99.28810119628906,
                    "EquipmentDetections": []
                },
                {
                    "Name": "RIGHT_HAND",
                    "Confidence": 99.97966766357422,
                    "EquipmentDetections": []
                },
                {
                    "Name": "HEAD",
                    "Confidence": 99.98377227783203,
                    "EquipmentDetections": []
                }
            ],
            "BoundingBox": {
                "Width": 0.420634925365448,
                "Height": 0.7811704874038696,
                "Left": 0.007936508394777775,
                "Top": 0.20610687136650085
            },
            "Confidence": 99.92481231689453,
            "Id": 1
        },
        {
            "BodyParts": [
                {
                    "Name": "FACE",
                    "Confidence": 99.1600112915039,
                    "EquipmentDetections": [
                        {
                            "BoundingBox": {
                                "Width": 0.09494524449110031,
                                "Height": 0.1097668930888176,
                                "Left": 0.7650715112686157,
                                "Top": 0.31457528471946716
                            },
                            "Confidence": 99.89432525634766,
                            "Type": "FACE_COVER",
                            "CoversBodyPart": {
                                "Confidence": 98.65139770507812,
                                "Value": true
                            }
                        }
                    ]
                },
                {
                    "Name": "LEFT_HAND",
                    "Confidence": 99.19236755371094,
                    "EquipmentDetections": []
                },
                {
                    "Name": "RIGHT_HAND",
                    "Confidence": 99.6152114868164,
                    "EquipmentDetections": []
                },
                {
                    "Name": "HEAD",
                    "Confidence": 99.98148345947266,
                    "EquipmentDetections": []
                }
            ],
            "BoundingBox": {
                "Width": 0.29523810744285583,
                "Height": 0.7913485765457153,
                "Left": 0.7047619223594666,
                "Top": 0.18066157400608063
            },
            "Confidence": 99.99444580078125,
            "Id": 2
        },
        {
            "BodyParts": [
                {
                    "Name": "FACE",
                    "Confidence": 63.59202194213867,
                    "EquipmentDetections": []
                },
                {
                    "Name": "HEAD",
                    "Confidence": 96.91404724121094,
                    "EquipmentDetections": [
                        {
                            "BoundingBox": {
                                "Width": 0.03824697062373161,
                                "Height": 0.041919633746147156,
                                "Left": 0.6655418276786804,
                                "Top": 0.40767616033554077
                            },
                            "Confidence": 60.57323455810547,
                            "Type": "HEAD_COVER",
                            "CoversBodyPart": {
                                "Confidence": 99.9076156616211,
                                "Value": true
                            }
                        }
                    ]
                }
            ],
            "BoundingBox": {
                "Width": 0.06825397163629532,
                "Height": 0.5038167834281921,
                "Left": 0.6555555462837219,
                "Top": 0.40458014607429504
            },
            "Confidence": 98.65675354003906,
            "Id": 3
        }
    ],
    "Summary": {
        "PersonsWithRequiredEquipment": [],
        "PersonsWithoutRequiredEquipment": [
            0,
            1,
            2
        ],
        "PersonsIndeterminate": [
            3
        ]
    }
}
```
