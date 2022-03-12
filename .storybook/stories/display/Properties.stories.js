import { canvas, viewport } from "../Scene";
import { GraphPaper, parseColor } from "../../../src";

export default {
  title: "Graph Paper/Graph Paper",
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    backgroundVisible: { control: "boolean" },
    backgroundFillColor: { control: "color" },
    backgroundFillAlpha: { control: "number" },
    majorGridSize: { control: "number" },
    majorGridVisible: { control: "boolean" },
    majorStrokeAlpha: { control: "number" },
    majorStrokeColor: { control: "color" },
    majorStrokeWidth: { control: "number" },
    intermediateGridSize: { control: "number" },
    intermediateGridVisible: { control: "boolean" },
    intermediateStrokeAlpha: { control: "number" },
    intermediateStrokeColor: { control: "color" },
    intermediateStrokeWidth: { control: "number" },
    minorGridSize: { control: "number" },
    minorGridVisible: { control: "boolean" },
    minorStrokeAlpha: { control: "number" },
    minorStrokeColor: { control: "color" },
    minorStrokeWidth: { control: "number" },
  },
};

/**
 * Pixi logo story
 */
export const Properties = ({
  width,
  height,
  backgroundFillAlpha,
  backgroundFillColor,
  backgroundVisible,
  majorGridSize,
  majorGridVisible,
  majorStrokeAlpha,
  majorStrokeColor,
  majorStrokeWidth,
  intermediateGridSize,
  intermediateGridVisible,
  intermediateStrokeAlpha,
  intermediateStrokeColor,
  intermediateStrokeWidth,
  minorGridSize,
  minorGridVisible,
  minorStrokeAlpha,
  minorStrokeColor,
  minorStrokeWidth,
}) => {
  const paper = new GraphPaper({
    graphWidth: width,
    graphHeight: height,
    backgroundFillAlpha: backgroundFillAlpha,
    backgroundFillColor: parseColor(backgroundFillColor),
    backgroundVisible: backgroundVisible,
    majorGridSize: majorGridSize,
    majorGridVisible: majorGridVisible,
    majorStrokeAlpha: majorStrokeAlpha,
    majorStrokeColor: parseColor(majorStrokeColor),
    majorStrokeWidth: majorStrokeWidth,
    intermediateGridSize: intermediateGridSize,
    intermediateGridVisible: intermediateGridVisible,
    intermediateStrokeAlpha: intermediateStrokeAlpha,
    intermediateStrokeColor: parseColor(intermediateStrokeColor),
    intermediateStrokeWidth: intermediateStrokeWidth,
    minorGridSize: minorGridSize,
    minorGridVisible: minorGridVisible,
    minorStrokeAlpha: minorStrokeAlpha,
    minorStrokeColor: parseColor(minorStrokeColor),
    minorStrokeWidth: minorStrokeWidth,
  });
  viewport.addChild(paper);

  return canvas;
};
Properties.args = {
  width: 500,
  height: 500,
  backgroundFillAlpha: 1,
  backgroundFillColor: 0x0,
  backgroundVisible: false,
  intermediateGridSize: 50,
  intermediateGridVisible: true,
  intermediateStrokeAlpha: 1.0,
  intermediateStrokeColor: "#313131",
  intermediateStrokeWidth: 0.5,
  majorGridSize: 100,
  majorGridVisible: true,
  majorStrokeAlpha: 1.0,
  majorStrokeColor: "#424242",
  majorStrokeWidth: 1,
  minorGridSize: 10,
  minorGridVisible: true,
  minorStrokeAlpha: 1,
  minorStrokeColor: "#2a2a2a",
  minorStrokeWidth: 0.25,
};
