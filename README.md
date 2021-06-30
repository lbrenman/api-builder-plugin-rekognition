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

## Use

Find the plugin in the AI group in the Flow-Nodes panel. Drag onto the canvas and select the desired method and provide the input Text and wire up to the rest of your flow as shown below:

![](https://i.imgur.com/5hl3tGg.png)

Images need to be provided as Base64 encoded strings. You can find many Base64 encoders online such as this [**one**](https://elmah.io/tools/base64-image-encoder/).

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
