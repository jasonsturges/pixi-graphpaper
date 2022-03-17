import { canvas, viewport } from "../Scene";
import { GraphPaper, GraphStyleFactory, GraphStyleType } from "../../../src";

export default {
  title: "Graph Paper/Styles",
  argTypes: {
    height: { control: { type: "range", min: 0, max: 1000, step: 1 } },
    width: { control: { type: "range", min: 0, max: 1000, step: 1 } },
    type: {
      options: GraphStyleType,
      control: {
        type: "radio",
      },
    },
  },
};

/**
 * Template to load job from S3 SDK-TEST bucket.
 */
const Template = ({ width, height, type }) => {
  const paper = new GraphPaper({
    ...GraphStyleFactory.from(type),
    graphWidth: width,
    graphHeight: height,
  });
  viewport.addChild(paper);

  return canvas;
};

export const Blueprint = Template.bind({});
Blueprint.args = {
  width: 500,
  height: 500,
  type: GraphStyleType.BLUEPRINT,
};

export const Dark = Template.bind({});
Dark.args = {
  width: 500,
  height: 500,
  type: GraphStyleType.DARK,
};

export const Engineering = Template.bind({});
Engineering.args = {
  width: 500,
  height: 500,
  type: GraphStyleType.ENGINEERING,
};

export const Light = Template.bind({});
Light.args = {
  width: 500,
  height: 500,
  type: GraphStyleType.LIGHT,
};

export const Quad = Template.bind({});
Quad.args = {
  width: 500,
  height: 500,
  type: GraphStyleType.QUAD,
};
