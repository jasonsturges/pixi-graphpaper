import { FillStyle, IFillStyleOptions, Renderer, Sprite } from "pixi.js";
import { GraphOptions } from "./GraphOptions";
import { IRule } from "../model/IRule";
import { Rule } from "../model/Rule";

/**
 * Abstract Graph Paper - base class defining presentation model and
 * invalidation lifecycle of graph paper.
 */
export abstract class AbstractGraphPaper extends Sprite {
  private _backgroundVisible?: boolean | undefined;
  private _graphHeight?: number | undefined;
  private _graphWidth?: number | undefined;
  private _invalidated?: boolean | undefined;
  private readonly _backgroundFill?: Partial<IFillStyleOptions> | undefined;
  private readonly _intermediateRule?: IRule | undefined;
  private readonly _majorRule?: IRule | undefined;
  private readonly _minorRule?: IRule | undefined;

  //------------------------------
  //  properties
  //------------------------------

  /**
   * Opacity of the background fill, if `backgroundVisible` is set to `true`.
   */
  public get backgroundFillAlpha() {
    return this._backgroundFill?.alpha;
  }

  public set backgroundFillAlpha(value) {
    if (!this._backgroundFill || this._backgroundFill.alpha === value) return;
    this._backgroundFill.alpha = value;
    this.invalidate();
  }

  /**
   * Color the background, if `backgroundVisible` is set to `true`.
   */
  public get backgroundFillColor() {
    return this._backgroundFill?.color;
  }

  public set backgroundFillColor(value) {
    if (!this._backgroundFill || this._backgroundFill.color === value) return;
    this._backgroundFill.color = value;
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
    return this._intermediateRule?.size;
  }

  public set intermediateGridSize(value) {
    if (!this._intermediateRule || this._intermediateRule.size === value) return;
    this._intermediateRule.size = value;
    this.invalidate();
  }

  /**
   * Whether intermediate grid rule is visible.
   */
  public get intermediateGridVisible() {
    return this._intermediateRule?.visible;
  }

  public set intermediateGridVisible(value) {
    if (!this._intermediateRule || this._intermediateRule.visible === value) return;
    this._intermediateRule.visible = value;
    this.invalidate();
  }

  /**
   * Opacity of intermediate rule stroke.
   */
  public get intermediateStrokeAlpha() {
    return this._intermediateRule?.alpha;
  }

  public set intermediateStrokeAlpha(value) {
    if (!this._intermediateRule || this._intermediateRule.alpha === value) return;
    this._intermediateRule.alpha = value;
    this.invalidate();
  }

  /**
   * Color of intermediate rule stroke.
   */
  public get intermediateStrokeColor() {
    return this._intermediateRule?.color;
  }

  public set intermediateStrokeColor(value) {
    if (!this._intermediateRule || this._intermediateRule.color === value) return;
    this._intermediateRule.color = value;
    this.invalidate();
  }

  /**
   * Width of intermediate rule stroke.
   */
  public get intermediateStrokeWidth() {
    return this._intermediateRule?.width;
  }

  public set intermediateStrokeWidth(value) {
    if (!this._intermediateRule || this._intermediateRule.width === value) return;
    this._intermediateRule.width = value;
    this.invalidate();
  }

  /**
   * Grid size of major line rule.
   */
  public get majorGridSize() {
    return this._majorRule?.size;
  }

  public set majorGridSize(value) {
    if (!this._majorRule || this._majorRule?.size === value) return;
    this._majorRule.size = value;
    this.invalidate();
  }

  /**
   * Whether major grid rule is visible.
   */
  public get majorGridVisible() {
    return this._majorRule?.visible;
  }

  public set majorGridVisible(value) {
    if (!this._majorRule || this._majorRule?.visible === value) return;
    this._majorRule.visible = value;
    this.invalidate();
  }

  /**
   * Opacity of major rule stroke.
   */
  public get majorStrokeAlpha() {
    return this._majorRule?.alpha;
  }

  public set majorStrokeAlpha(value) {
    if (!this._majorRule || this._majorRule?.alpha === value) return;
    this._majorRule.alpha = value;
    this.invalidate();
  }

  /**
   * Color of major rule stroke.
   */
  public get majorStrokeColor() {
    return this._majorRule?.color;
  }

  public set majorStrokeColor(value) {
    if (!this._majorRule || this._majorRule?.color === value) return;
    this._majorRule.color = value;
    this.invalidate();
  }

  /**
   * Width of major rule stroke.
   */
  public get majorStrokeWidth() {
    return this._majorRule?.width;
  }

  public set majorStrokeWidth(value) {
    if (!this._majorRule || this._majorRule?.width === value) return;
    this._majorRule.width = value;
    this.invalidate();
  }

  /**
   * Grid size of minor line rule.
   */
  public get minorGridSize() {
    return this._minorRule?.size;
  }

  public set minorGridSize(value) {
    if (!this._minorRule || this._minorRule?.size === value) return;
    this._minorRule.size = value;
    this.invalidate();
  }

  /**
   * Whether minor grid rule is visible.
   */
  public get minorGridVisible() {
    return this._minorRule?.visible;
  }

  public set minorGridVisible(value) {
    if (!this._minorRule || this._minorRule?.visible === value) return;
    this._minorRule.visible = value;
    this.invalidate();
  }

  /**
   * Opacity of minor rule stroke.
   */
  public get minorStrokeAlpha() {
    return this._minorRule?.alpha;
  }

  public set minorStrokeAlpha(value) {
    if (!this._minorRule || this._minorRule?.alpha === value) return;
    this._minorRule.alpha = value;
    this.invalidate();
  }

  /**
   * Color of minor rule stroke.
   */
  public get minorStrokeColor() {
    return this._minorRule?.color;
  }

  public set minorStrokeColor(value) {
    if (!this._minorRule || this._minorRule?.color === value) return;
    this._minorRule.color = value;
    this.invalidate();
  }

  /**
   * Width of minor rule stroke.
   */
  public get minorStrokeWidth() {
    return this._minorRule?.width;
  }

  public set minorStrokeWidth(value) {
    if (!this._minorRule || this._minorRule?.width === value) return;
    this._minorRule.width = value;
    this.invalidate();
  }

  //------------------------------
  //  methods
  //------------------------------

  protected constructor(options?: Partial<GraphOptions>) {
    super();

    this.graphHeight = options?.graphHeight ?? 1000;
    this.graphWidth = options?.graphWidth ?? 1000;

    this._backgroundFill = new FillStyle();
    this._backgroundFill.alpha = options?.backgroundFillAlpha;
    this._backgroundFill.color = options?.backgroundFillColor;
    this._backgroundVisible = options?.backgroundVisible;

    this._intermediateRule = new Rule({
      alpha: options?.intermediateStrokeAlpha,
      color: options?.intermediateStrokeColor,
      size: options?.intermediateGridSize,
      visible: options?.intermediateGridVisible,
      width: options?.intermediateStrokeWidth,
    });

    this._majorRule = new Rule({
      alpha: options?.majorStrokeAlpha,
      color: options?.majorStrokeColor,
      size: options?.majorGridSize,
      visible: options?.majorGridVisible,
      width: options?.majorStrokeWidth,
    });

    this._minorRule = new Rule({
      alpha: options?.minorStrokeAlpha,
      color: options?.minorStrokeColor,
      size: options?.minorGridSize,
      visible: options?.minorGridVisible,
      width: options?.minorStrokeWidth,
    });
  }

  /**
   * Invalidate component, forcing validation on next render cycle.
   */
  protected invalidate() {
    this._invalidated = true;
  }

  /**
   * Render override for invalidation pipeline.
   */
  override render(renderer: Renderer) {
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
