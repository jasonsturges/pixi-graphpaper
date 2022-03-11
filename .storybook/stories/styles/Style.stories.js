import { canvas, viewport } from "../Scene";
import { GraphPaper } from "../../../src";
import { GraphStyleType } from "../../../src/enum/GraphStyleType";
import { GraphStyleFactory } from "../../../src/factory/GraphStyleFactory";

export default {
  title: "Graph Paper/Style Factory",
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    type: {
      control: {
        type: "radio",
        options: GraphStyleType,
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

export const Quad = Template.bind({});
Quad.args = {
  width: 500,
  height: 500,
  type: GraphStyleType.QUAD,
};
