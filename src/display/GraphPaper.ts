import { AbstractGraphPaper } from "./AbstractGraphPaper";
import { Graphics, ILineStyleOptions, LINE_CAP, LINE_JOIN } from "pixi.js";
import { GraphOptions } from "./GraphOptions";
import { GraphStyle } from "../styles/GraphStyle";

/**
 * Ruled graph paper, PIXI Sprite instance added to the display list
 * via `addChild()`.
 */
export class GraphPaper extends AbstractGraphPaper {
  private readonly _graphics?: Graphics | undefined;

  /**
   * @constructor
   */
  constructor(options?: Partial<GraphOptions>) {
    super({
      ...GraphStyle.DARK,
      ...options,
    });

    this._graphics = new Graphics();
    this.addChild(this._graphics);
  }

  /**
   * On invalidation, rendering operations to redraw.
   */
  protected override validate() {
    super.validate();

    this._graphics?.clear();

    this.renderBackground();
    this.renderMinorGrid();
    this.renderIntermediateGrid();
    this.renderMajorGrid();
  }

  /**
   * Render the background fill
   */
  protected renderBackground() {
    if (!this.backgroundVisible) return;

    this._graphics?.beginFill(this.backgroundFillColor, this.backgroundFillAlpha);
    this._graphics?.drawRect(0, 0, this.graphWidth ?? 0, this.graphHeight ?? 0);
    this._graphics?.endFill();
  }

  /**
   * Render intermediate grid rule.
   */
  protected renderIntermediateGrid() {
    if (
      !this.intermediateGridVisible || //
      !this.intermediateGridSize ||
      !this.graphHeight ||
      !this.graphWidth
    )
      return;

    this._graphics?.lineStyle(<ILineStyleOptions>{
      width: this.intermediateStrokeWidth,
      color: this.intermediateStrokeColor,
      alpha: this.intermediateStrokeAlpha,
      join: LINE_JOIN.MITER,
      cap: LINE_CAP.SQUARE,
    });

    for (let i = 0; i < this.graphHeight; i += this.intermediateGridSize) {
      if (this.majorGridVisible && this.majorGridSize && i % this.majorGridSize === 0) continue;
      this._graphics?.moveTo(0, i);
      this._graphics?.lineTo(this.graphWidth, i);
    }

    for (let i = 0; i < this.graphWidth; i += this.intermediateGridSize) {
      if (this.majorGridVisible && this.majorGridSize && i % this.majorGridSize === 0) continue;
      this._graphics?.moveTo(i, 0);
      this._graphics?.lineTo(i, this.graphHeight);
    }
  }

  /**
   * Render major grid rule.
   */
  protected renderMajorGrid() {
    if (
      !this.majorGridVisible || //
      !this.majorGridSize ||
      !this.graphHeight ||
      !this.graphWidth
    )
      return;

    this._graphics?.lineStyle(<ILineStyleOptions>{
      width: this.majorStrokeWidth,
      color: this.majorStrokeColor,
      alpha: this.majorStrokeAlpha,
      join: LINE_JOIN.MITER,
      cap: LINE_CAP.SQUARE,
    });

    for (let i = 0; i <= this.graphHeight; i += this.majorGridSize) {
      this._graphics?.moveTo(0, i);
      this._graphics?.lineTo(this.graphWidth, i);
    }

    for (let i = 0; i <= this.graphWidth; i += this.majorGridSize) {
      this._graphics?.moveTo(i, 0);
      this._graphics?.lineTo(i, this.graphHeight);
    }
  }

  /**
   * Render minor grid rule.
   */
  protected renderMinorGrid() {
    if (
      !this.minorGridVisible || //
      !this.minorGridSize ||
      !this.graphHeight ||
      !this.graphWidth
    )
      return;

    this._graphics?.lineStyle(<ILineStyleOptions>{
      width: this.minorStrokeWidth,
      color: this.minorStrokeColor,
      alpha: this.minorStrokeAlpha,
      join: LINE_JOIN.MITER,
      cap: LINE_CAP.SQUARE,
    });

    for (let i = 0; i < this.graphHeight; i += this.minorGridSize) {
      if (this.majorGridVisible && this.majorGridSize && i % this.majorGridSize === 0) continue;
      if (this.intermediateGridVisible && this.intermediateGridSize && i % this.intermediateGridSize === 0) continue;

      this._graphics?.moveTo(0, i);
      this._graphics?.lineTo(this.graphWidth, i);
    }

    for (let i = 0; i < this.graphWidth; i += this.minorGridSize) {
      if (this.majorGridVisible && this.majorGridSize && i % this.majorGridSize === 0) continue;
      if (this.intermediateGridVisible && this.intermediateGridSize && i % this.intermediateGridSize === 0) continue;

      this._graphics?.moveTo(i, 0);
      this._graphics?.lineTo(i, this.graphHeight);
    }
  }
}
