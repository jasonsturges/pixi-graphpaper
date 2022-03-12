import { IRule } from "./IRule";

/**
 * Rule presentation model, used for major, intermediate, and minor
 * graph paper rule lines.
 */
export class Rule implements IRule {
  public alpha?: number | undefined;
  public color?: number | undefined;
  public size?: number | undefined;
  public visible?: boolean | undefined;
  public width?: number | undefined;

  constructor(options?: Partial<IRule>) {
    this.alpha = options?.alpha;
    this.color = options?.color;
    this.size = options?.size;
    this.visible = options?.visible;
    this.width = options?.width;
  }
}
