const { expect } = require('chai');
const { MockRuntime } = require('@axway/api-builder-test-utils');
const getPlugin = require('../src');
const car = require('./car.js');
const text = require('./text.js');
const faces = require('./faces.js');
const moderation = require('./moderation.js');
const ppe = require('./ppe.js');

describe('flow-node rekognition', () => {
	let plugin;
	let flowNode;
	beforeEach(async () => {
		plugin = await MockRuntime.loadPlugin(getPlugin);
		plugin.setOptions({ validateOutputs: true });
		flowNode = plugin.getFlowNode('rekognition');
	});

	describe('#constructor', () => {
		it('should define flow-nodes', () => {
			expect(plugin).to.be.a('object');
			expect(plugin.getFlowNodeIds()).to.deep.equal([
				'rekognition'
			]);
			expect(flowNode).to.be.a('object');

			// Ensure the flow-node matches the spec
			expect(flowNode.name).to.equal('Rekognition');
			expect(flowNode.description).to.equal('Rekognition image analysis.');
			expect(flowNode.icon).to.be.a('string');
			expect(flowNode.getMethods()).to.deep.equal([
				'detectFaces',
				'detectLabels',
				'detectModerationLabels',
				'detectProtectiveEquipment',
				'detectText'
			]);
		});

		// It is vital to ensure that the generated node flow-nodes are valid
		// for use in API Builder. Your unit tests should always include this
		// validation to avoid potential issues when API Builder loads your
		// node.
		it('should define valid flow-nodes', () => {
			// if this is invalid, it will throw and fail
			plugin.validate();
		});
	});

	describe('#detectLabels', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.detectLabels({
				Image: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Image');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectLabels({ Image: car.car });

			expect(value.Labels[0].Name).to.equal('Car');
			expect(output).to.equal('next');
		});
	});

	describe('#detectText', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.detectText({
				Image: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Image');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectText({ Image: text.text });

			expect(value.TextModelVersion).to.equal('3.0');
			expect(output).to.equal('next');
		});
	});

	describe('#detectModerationLabels', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.detectModerationLabels({
				Image: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Image');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectModerationLabels({ Image: moderation.moderation });

			expect(value.ModerationLabels[0].Name).to.equal('Alcoholic Beverages');
			expect(output).to.equal('next');
		});
	});

	describe('#detectFaces', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.detectFaces({
				Image: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Image');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectFaces({ Image: faces.faces });

			expect(value.FaceDetails[0].Eyeglasses.Value).to.equal(true);
			expect(output).to.equal('next');
		});
	});

	describe('#detectProtectiveEquipment', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.detectProtectiveEquipment({
				Image: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Image');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectProtectiveEquipment({ Image: faces.faces});

			expect(value.Persons[0].BodyParts[0].Name).to.equal('FACE');
			expect(output).to.equal('next');
		});
	});

});
