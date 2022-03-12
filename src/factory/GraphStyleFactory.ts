import { GraphOptions } from "../display/GraphOptions";
import { GraphStyle } from "../constant/GraphStyle";
import { GraphStyleType } from "../enum/GraphStyleType";

export class GraphStyleFactory {
  static from(type: GraphStyleType): GraphOptions {
    switch (type) {
      case GraphStyleType.BLUEPRINT:
        return GraphStyle.blueprint;
      case GraphStyleType.DARK:
        return GraphStyle.dark;
      case GraphStyleType.ENGINEERING:
        return GraphStyle.engineering;
      case GraphStyleType.LIGHT:
        return GraphStyle.light;
      case GraphStyleType.QUAD:
        return GraphStyle.quad;

      default:
        throw new Error(`Unknown graph style: ${type}`);
    }
  }
}
