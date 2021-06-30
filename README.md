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

Images need to be provided as Base64 encoded strings. You can find many Base64 encoders online such as this [**one**](https://codebeautify.org/image-to-base64-converter).

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
