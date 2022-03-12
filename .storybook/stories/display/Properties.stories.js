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
    majorStrokeWeight: { control: "number" },
    intermediateGridSize: { control: "number" },
    intermediateGridVisible: { control: "boolean" },
    intermediateStrokeAlpha: { control: "number" },
    intermediateStrokeColor: { control: "color" },
    intermediateStrokeWeight: { control: "number" },
    minorGridSize: { control: "number" },
    minorGridVisible: { control: "boolean" },
    minorStrokeAlpha: { control: "number" },
    minorStrokeColor: { control: "color" },
    minorStrokeWeight: { control: "number" },
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
  majorStrokeWeight,
  intermediateGridSize,
  intermediateGridVisible,
  intermediateStrokeAlpha,
  intermediateStrokeColor,
  intermediateStrokeWeight,
  minorGridSize,
  minorGridVisible,
  minorStrokeAlpha,
  minorStrokeColor,
  minorStrokeWeight,
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
    majorStrokeWeight: majorStrokeWeight,
    intermediateGridSize: intermediateGridSize,
    intermediateGridVisible: intermediateGridVisible,
    intermediateStrokeAlpha: intermediateStrokeAlpha,
    intermediateStrokeColor: parseColor(intermediateStrokeColor),
    intermediateStrokeWeight: intermediateStrokeWeight,
    minorGridSize: minorGridSize,
    minorGridVisible: minorGridVisible,
    minorStrokeAlpha: minorStrokeAlpha,
    minorStrokeColor: parseColor(minorStrokeColor),
    minorStrokeWeight: minorStrokeWeight,
  });
  viewport.addChild(paper);

  return canvas;
};
Properties.args = {
  width: 500,
  height: 500,
  backgroundFillAlpha: 1,
  backgroundFillColor: "#000000",
  backgroundVisible: false,
  majorGridSize: 100,
  majorGridVisible: true,
  majorStrokeAlpha: 1.0,
  majorStrokeColor: "#424242",
  majorStrokeWeight: 2,
  intermediateGridSize: 50,
  intermediateGridVisible: true,
  intermediateStrokeAlpha: 1.0,
  intermediateStrokeColor: "#313131",
  intermediateStrokeWeight: 1,
  minorGridSize: 10,
  minorGridVisible: true,
  minorStrokeAlpha: 1,
  minorStrokeColor: "#2a2a2a",
  minorStrokeWeight: 0.25,
};
