import { GraphOptions } from "./GraphOptions";
import { Graphics, Renderer, Sprite } from "pixi.js";
import { GraphStyle } from "../constant/GraphStyle";

/**
 * Ruled graph paper, PIXI.Sprite instance able to be
 * added to the display list via `addChild()`.
 */
export abstract class AbstractGraphPaper extends Sprite {
  private _backgroundFillAlpha?: number | undefined;
  private _backgroundFillColor?: number | undefined;
  private _backgroundVisible?: boolean | undefined;
  private _graphHeight?: number | undefined;
  private _graphWidth?: number | undefined;
  private _intermediateGridSize?: number | undefined;
  private _intermediateGridVisible?: boolean | undefined;
  private _intermediateStrokeAlpha?: number | undefined;
  private _intermediateStrokeColor?: number | undefined;
  private _intermediateStrokeWeight?: number | undefined;
  private _invalidated?: boolean | undefined;
  private _majorGridSize?: number | undefined;
  private _majorGridVisible?: boolean | undefined;
  private _majorStrokeAlpha?: number | undefined;
  private _majorStrokeColor?: number | undefined;
  private _majorStrokeWeight?: number | undefined;
  private _minorGridSize?: number | undefined;
  private _minorGridVisible?: boolean | undefined;
  private _minorStrokeAlpha?: number | undefined;
  private _minorStrokeColor?: number | undefined;
  private _minorStrokeWeight?: number | undefined;

  //------------------------------
  //  properties
  //------------------------------

  /**
   * Opacity of the background fill, if `backgroundVisible` is set to `true`.
   */
  public get backgroundFillAlpha() {
    return this._backgroundFillAlpha;
  }

  public set backgroundFillAlpha(value) {
    if (this._backgroundFillAlpha === value) return;
    this._backgroundFillAlpha = value;
    this.invalidate();
  }

  /**
   * Color the background, if `backgroundVisible` is set to `true`.
   */
  public get backgroundFillColor() {
    return this._backgroundFillColor;
  }

  public set backgroundFillColor(value) {
    if (this._backgroundFillColor === value) return;
    this._backgroundFillColor = value;
    this.invalidate();
  }

  /**
   * Whether background is visible.
   */
  public get backgroundVisible() {
    return this._backgroundVisible;
  }

  public set backgroundVisible(value) {
    if (this._backgroundVisible === value) return;
    this._backgroundVisible = value;
    this.invalidate();
  }

  /**
   * Height of the graph, in pixels.
   */
  public get graphHeight() {
    return this._graphHeight;
  }

  public set graphHeight(value) {
    if (this._graphHeight === value) return;
    this._graphHeight = value;
    this.invalidate();
  }

  /**
   * Width of the graph, in pixels.
   */
  public get graphWidth() {
    return this._graphWidth;
  }

  public set graphWidth(value) {
    if (this._graphWidth === value) return;
    this._graphWidth = value;
    this.invalidate();
  }

  /**
   * Grid size of intermediate lines between major and minor rules.
   */
  public get intermediateGridSize() {
    return this._intermediateGridSize;
  }

  public set intermediateGridSize(value) {
    if (this._intermediateGridSize === value) return;
    this._intermediateGridSize = value;
    this.invalidate();
  }

  /**
   * Whether intermediate grid rule is visible.
   */
  public get intermediateGridVisible() {
    return this._intermediateGridVisible;
  }

  public set intermediateGridVisible(value) {
    if (this._intermediateGridVisible === value) return;
    this._intermediateGridVisible = value;
    this.invalidate();
  }

  /**
   * Opacity of intermediate rule stroke.
   */
  public get intermediateStrokeAlpha() {
    return this._intermediateStrokeAlpha;
  }

  public set intermediateStrokeAlpha(value) {
    if (this._intermediateStrokeAlpha === value) return;
    this._intermediateStrokeAlpha = value;
    this.invalidate();
  }

  /**
   * Color of intermediate rule stroke.
   */
  public get intermediateStrokeColor() {
    return this._intermediateStrokeColor;
  }

  public set intermediateStrokeColor(value) {
    if (this._intermediateStrokeColor === value) return;
    this._intermediateStrokeColor = value;
    this.invalidate();
  }

  /**
   * Weight of intermediate rule stroke.
   */
  public get intermediateStrokeWeight() {
    return this._intermediateStrokeWeight;
  }

  public set intermediateStrokeWeight(value) {
    if (this._intermediateStrokeWeight === value) return;
    this._intermediateStrokeWeight = value;
    this.invalidate();
  }

  /**
   * Grid size of major line rule.
   */
  public get majorGridSize() {
    return this._majorGridSize;
  }

  public set majorGridSize(value) {
    if (this._majorGridSize === value) return;
    this._majorGridSize = value;
    this.invalidate();
  }

  /**
   * Whether major grid rule is visible.
   */
  public get majorGridVisible() {
    return this._majorGridVisible;
  }

  public set majorGridVisible(value) {
    if (this._majorGridVisible === value) return;
    this._majorGridVisible = value;
    this.invalidate();
  }

  /**
   * Opacity of major rule stroke.
   */
  public get majorStrokeAlpha() {
    return this._majorStrokeAlpha;
  }

  public set majorStrokeAlpha(value) {
    if (this._majorStrokeAlpha === value) return;
    this._majorStrokeAlpha = value;
    this.invalidate();
  }

  /**
   * Color of major rule stroke.
   */
  public get majorStrokeColor() {
    return this._majorStrokeColor;
  }

  public set majorStrokeColor(value) {
    if (this._majorStrokeColor === value) return;
    this._majorStrokeColor = value;
    this.invalidate();
  }

  /**
   * Weight of major rule stroke.
   */
  public get majorStrokeWeight() {
    return this._majorStrokeWeight;
  }

  public set majorStrokeWeight(value) {
    if (this._majorStrokeWeight === value) return;
    this._majorStrokeWeight = value;
    this.invalidate();
  }

  /**
   * Grid size of minor line rule.
   */
  public get minorGridSize() {
    return this._minorGridSize;
  }

  public set minorGridSize(value) {
    if (this._minorGridSize === value) return;
    this._minorGridSize = value;
    this.invalidate();
  }

  /**
   * Whether minor grid rule is visible.
   */
  public get minorGridVisible() {
    return this._minorGridVisible;
  }

  public set minorGridVisible(value) {
    if (this._minorGridVisible === value) return;
    this._minorGridVisible = value;
    this.invalidate();
  }

  /**
   * Opacity of minor rule stroke.
   */
  public get minorStrokeAlpha() {
    return this._minorStrokeAlpha;
  }

  public set minorStrokeAlpha(value) {
    if (this._minorStrokeAlpha === value) return;
    this._minorStrokeAlpha = value;
    this.invalidate();
  }

  /**
   * Color of minor rule stroke.
   */
  public get minorStrokeColor() {
    return this._minorStrokeColor;
  }

  public set minorStrokeColor(value) {
    if (this._minorStrokeColor === value) return;
    this._minorStrokeColor = value;
    this.invalidate();
  }

  /**
   * Weight of minor rule stroke.
   */
  public get minorStrokeWeight() {
    return this._minorStrokeWeight;
  }

  public set minorStrokeWeight(value) {
    if (this._minorStrokeWeight === value) return;
    this._minorStrokeWeight = value;
    this.invalidate();
  }

  //------------------------------
  //  methods
  //------------------------------

  constructor(options: Partial<GraphOptions> = GraphStyle.dark) {
    super();

    this.backgroundFillAlpha = options.backgroundFillAlpha;
    this.backgroundFillAlpha = options.backgroundFillAlpha;
    this.backgroundFillColor = options.backgroundFillColor;
    this.backgroundVisible = options.backgroundVisible;
    this.graphHeight = options.graphHeight;
    this.graphWidth = options.graphWidth;
    this.intermediateGridSize = options.intermediateGridSize;
    this.intermediateGridVisible = options.intermediateGridVisible;
    this.intermediateStrokeAlpha = options.intermediateStrokeAlpha;
    this.intermediateStrokeColor = options.intermediateStrokeColor;
    this.intermediateStrokeWeight = options.intermediateStrokeWeight;
    this.majorGridSize = options.majorGridSize;
    this.majorGridVisible = options.majorGridVisible;
    this.majorStrokeAlpha = options.majorStrokeAlpha;
    this.majorStrokeColor = options.majorStrokeColor;
    this.majorStrokeWeight = options.majorStrokeWeight;
    this.minorGridSize = options.minorGridSize;
    this.minorGridVisible = options.minorGridVisible;
    this.minorStrokeAlpha = options.minorStrokeAlpha;
    this.minorStrokeColor = options.minorStrokeColor;
    this.minorStrokeWeight = options.minorStrokeWeight;
  }

  /**
   * Invalidate component, forcing validation on next render cycle.
   */
  protected invalidate() {
    this._invalidated = true;
  }

  /**
   * Render override for invalidation pipeline
   */
  render(renderer: Renderer) {
    super.render(renderer);

    if (this._invalidated) {
      this.validate();
    }
  }

  /**
   * Validation pipeline.
   */
  protected validate() {
    this._invalidated = false;
  }
}
