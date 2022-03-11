import { GraphOptions } from "../display/GraphOptions";
import { GraphStyleType } from "../enum/GraphStyleType";
import { GraphStyle } from "../constant/GraphStyle";

export class GraphStyleFactory {
  static from(type: GraphStyleType): GraphOptions {
    switch (type) {
      case GraphStyleType.BLUEPRINT:
        return GraphStyle.blueprint;
      case GraphStyleType.DARK:
        return GraphStyle.dark;
      case GraphStyleType.ENGINEERING:
        return GraphStyle.engineering;
      case GraphStyleType.QUAD:
        return GraphStyle.quad;

      default:
        throw new Error(`Unknown graph style: ${type}`);
    }
  }
}
