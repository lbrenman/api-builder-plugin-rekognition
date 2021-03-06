const util = require('util');
// Note that user must set the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY env vars in their main API Builder project
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const rekognition = new AWS.Rekognition();
const detectLabelsAsync = util.promisify(rekognition.detectLabels)
    .bind(rekognition);
const detectTextAsync = util.promisify(rekognition.detectText)
    .bind(rekognition);
const detectFacesAsync = util.promisify(rekognition.detectFaces)
    .bind(rekognition);
const detectModerationLabelsAsync = util.promisify(rekognition.detectModerationLabels)
    .bind(rekognition);
const detectProtectiveEquipmentAsync = util.promisify(rekognition.detectProtectiveEquipment)
    .bind(rekognition);

/**
 * Action method.
 *
 * @param {object} params - A map of all the parameters passed from the flow.
 * @param {object} options - The additional options provided from the flow
 *	 engine.
 * @param {object} options.pluginConfig - The service configuration for this
 *	 plugin from API Builder config.pluginConfig['api-builder-plugin-pluginName']
 * @param {object} options.logger - The API Builder logger which can be used
 *	 to log messages to the console. When run in unit-tests, the messages are
 *	 not logged.  If you wish to test logging, you will need to create a
 *	 mocked logger (e.g. using `simple-mock`) and override in
 *	 `MockRuntime.loadPlugin`.  For more information about the logger, see:
 *	 https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/logging.html
 * @param {*} [options.pluginContext] - The data provided by passing the
 *	 context to `sdk.load(file, actions, { pluginContext })` in `getPlugin`
 *	 in `index.js`.
 * @return {*} The response value (resolves to "next" output, or if the method
 *	 does not define "next", the first defined output).
 */
 async function detectLabels(params, options) {
     const { Image } = params;
     const { logger } = options;
     if (!Image) {
         throw new Error('Missing required parameter: Image');
     }

     console.log('detectLabels() called');

     // https://stackoverflow.com/questions/43599556/aws-rekognition-js-sdk-invalid-image-encoding-error
     // https://stackoverflow.com/questions/52165333/deprecationwarning-buffer-is-deprecated-due-to-security-and-usability-issues
     const buffer = Buffer.from(Image, 'base64');

     const myparams = {
       Image: {
         Bytes: buffer
       }
     }

     return detectLabelsAsync(myparams);
 }

 async function detectText(params, options) {
     const { Image } = params;
     const { logger } = options;
     if (!Image) {
         throw new Error('Missing required parameter: Image');
     }

     console.log('detectText() called');

     // https://stackoverflow.com/questions/43599556/aws-rekognition-js-sdk-invalid-image-encoding-error
     // https://stackoverflow.com/questions/52165333/deprecationwarning-buffer-is-deprecated-due-to-security-and-usability-issues
     const buffer = Buffer.from(Image, 'base64');

     const myparams = {
       Image: {
         Bytes: buffer
       }
     }

     return detectTextAsync(myparams);
 }

 async function detectFaces(params, options) {
     const { Image } = params;
     const { logger } = options;
     if (!Image) {
         throw new Error('Missing required parameter: Image');
     }

     console.log('detectFaces() called');

     // https://stackoverflow.com/questions/43599556/aws-rekognition-js-sdk-invalid-image-encoding-error
     // https://stackoverflow.com/questions/52165333/deprecationwarning-buffer-is-deprecated-due-to-security-and-usability-issues
     const buffer = Buffer.from(Image, 'base64');

     const myparams = {
       Attributes: ['ALL'],
       Image: {
         Bytes: buffer
       }
     }

     return detectFacesAsync(myparams);
 }

 async function detectModerationLabels(params, options) {
     const { Image } = params;
     const { logger } = options;
     if (!Image) {
         throw new Error('Missing required parameter: Image');
     }

     console.log('detectModerationLabels() called');

     // https://stackoverflow.com/questions/43599556/aws-rekognition-js-sdk-invalid-image-encoding-error
     // https://stackoverflow.com/questions/52165333/deprecationwarning-buffer-is-deprecated-due-to-security-and-usability-issues
     const buffer = Buffer.from(Image, 'base64');

     const myparams = {
       Image: {
         Bytes: buffer
       }
     }

     return detectModerationLabelsAsync(myparams);
 }

 async function detectProtectiveEquipment(params, options) {
     const { Image } = params;
     const { logger } = options;
     if (!Image) {
         throw new Error('Missing required parameter: Image');
     }

     console.log('detectProtectiveEquipment() called');

     // https://stackoverflow.com/questions/43599556/aws-rekognition-js-sdk-invalid-image-encoding-error
     // https://stackoverflow.com/questions/52165333/deprecationwarning-buffer-is-deprecated-due-to-security-and-usability-issues
     const buffer = Buffer.from(Image, 'base64');

     const myparams = {
       Image: {
         Bytes: buffer
       },
       SummarizationAttributes: {
         MinConfidence: 75,
         RequiredEquipmentTypes: ['FACE_COVER', 'HAND_COVER', 'HEAD_COVER']
       }
     }

     return detectProtectiveEquipmentAsync(myparams);
 }

module.exports = {
	detectFaces,
  detectLabels,
  detectModerationLabels,
  detectProtectiveEquipment,
  detectText
};
