import { GraphOptions } from "../display/GraphOptions";
import { GraphStyle } from "../styles/GraphStyle";
import { GraphStyleType } from "../enum/GraphStyleType";

export class GraphStyleFactory {
  /**
   * Create graph style from named graph style types.
   *
   * Usage:
   *
   * ```js
   *   const paper = new GraphPaper({
   *     ...GraphStyleFactory.from(GraphStyleType.DARK),
   *     graphWidth: width,
   *     graphHeight: height,
   *   });
   * ```
   */
  static from(type: GraphStyleType): GraphOptions {
    switch (type) {
      case GraphStyleType.BLUEPRINT:
        return GraphStyle.BLUEPRINT;
      case GraphStyleType.DARK:
        return GraphStyle.DARK;
      case GraphStyleType.ENGINEERING:
        return GraphStyle.ENGINEERING;
      case GraphStyleType.LIGHT:
        return GraphStyle.LIGHT;
      case GraphStyleType.QUAD:
        return GraphStyle.QUAD;

      default:
        throw new Error(`Unknown graph style: ${type}`);
    }
  }
}
