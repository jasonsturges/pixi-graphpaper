import { canvas, viewport } from "../Scene";
import { GraphPaper, parseColor } from "../../../src";

export default {
  title: "Graph Paper/Graph Paper",
  argTypes: {
    height: { control: { type: "range", min: 0, max: 1000, step: 1 } },
    width: { control: { type: "range", min: 0, max: 1000, step: 1 } },
    backgroundVisible: { control: "boolean" },
    backgroundFillColor: { control: "color" },
    backgroundFillAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    majorGridSize: { control: { type: "range", min: 0, max: 100, step: 1 } },
    majorGridVisible: { control: "boolean" },
    majorStrokeAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    majorStrokeColor: { control: "color" },
    majorStrokeWidth: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
    intermediateGridSize: { control: { type: "range", min: 0, max: 100, step: 1 } },
    intermediateGridVisible: { control: "boolean" },
    intermediateStrokeAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    intermediateStrokeColor: { control: "color" },
    intermediateStrokeWidth: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
    minorGridSize: { control: { type: "range", min: 0, max: 100, step: 1 } },
    minorGridVisible: { control: "boolean" },
    minorStrokeAlpha: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    minorStrokeColor: { control: "color" },
    minorStrokeWidth: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
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
