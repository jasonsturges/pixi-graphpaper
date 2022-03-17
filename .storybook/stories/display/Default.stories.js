import { canvas, viewport } from "../Scene";
import { GraphPaper } from "../../../src";

export default {
  title: "Graph Paper/Graph Paper",
};

/**
 * Pixi logo story
 */
export const Default = () => {
  const paper = new GraphPaper();
  viewport.addChild(paper);

  return canvas;
};
