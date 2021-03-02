import * as PIXI from "pixi.js";
import { GraphOptions } from "./GraphOptions";

/**
 * Ruled graph paper, PIXI.Sprite instance able to be
 * added to the display list via `addChild()`.
 */
export class GraphPaper extends PIXI.Sprite {
  private _dirty: boolean = true;
  private _backgroundFillAlpha: number = 1;
  private _backgroundFillColor: number = 0x0;
  private _backgroundVisible: boolean = false;
  private _graphHeight: number = 1000;
  private _graphWidth: number = 1000;
  private _intermediateGridSize: number = 50;
  private _intermediateGridVisible: boolean = true;
  private _intermediateStrokeAlpha: number = 1.0;
  private _intermediateStrokeColor: number = 0x313131;
  private _intermediateStrokeWeight: number = 1;
  private _majorGridSize: number = 100;
  private _majorGridVisible: boolean = true;
  private _majorStrokeAlpha: number = 1.0;
  private _majorStrokeColor: number = 0x424242;
  private _majorStrokeWeight: number = 2;
  private _minorGridSize: number = 10;
  private _minorGridVisible: boolean = true;
  private _minorStrokeAlpha: number = 1.0;
  private _minorStrokeColor: number = 0x2a2a2a;
  private _minorStrokeWeight: number = 0.25;
  private readonly _graphics: PIXI.Graphics;

  //------------------------------
  //  properties
  //------------------------------

  /**
   * Opacity of the background fill, if `backgroundVisible` is set to `true`.
   */
  public get backgroundFillAlpha(): number {
    return this._backgroundFillAlpha;
  }

  public set backgroundFillAlpha(value) {
    if (this._backgroundFillAlpha === value) return;

    this._backgroundFillAlpha = value;
    this._dirty = true;
  }

  /**
   * Color the background, if `backgroundVisible` is set to `true`.
   */
  public get backgroundFillColor(): number {
    return this._backgroundFillColor;
  }

  public set backgroundFillColor(value) {
    if (this._backgroundFillColor === value) return;

    this._backgroundFillColor = value;
    this._dirty = true;
  }

  /**
   * Whether background is visible.
   */
  public get backgroundVisible(): boolean {
    return this._backgroundVisible;
  }

  public set backgroundVisible(value) {
    if (this._backgroundVisible === value) return;

    this._backgroundVisible = value;
    this._dirty = true;
  }

  /**
   * Height of the graph, in pixels.
   */
  public get graphHeight(): number {
    return this._graphHeight;
  }

  public set graphHeight(value) {
    if (this._graphHeight === value) return;

    this._graphHeight = value;
    this._dirty = true;
  }

  /**
   * Width of the graph, in pixels.
   */
  public get graphWidth(): number {
    return this._graphWidth;
  }

  public set graphWidth(value) {
    if (this._graphWidth === value) return;

    this._graphWidth = value;
    this._dirty = true;
  }

  /**
   * Grid size of intermediate lines between major and minor rules.
   */
  public get intermediateGridSize(): number {
    return this._intermediateGridSize;
  }

  public set intermediateGridSize(value) {
    if (this._intermediateGridSize === value) return;

    this._intermediateGridSize = value;
    this._dirty = true;
  }

  /**
   * Whether intermediate grid rule is visible.
   */
  public get intermediateGridVisible(): boolean {
    return this._intermediateGridVisible;
  }

  public set intermediateGridVisible(value) {
    if (this._intermediateGridVisible === value) return;

    this._intermediateGridVisible = value;
    this._dirty = true;
  }

  /**
   * Opacity of intermediate rule stroke.
   */
  public get intermediateStrokeAlpha(): number {
    return this._intermediateStrokeAlpha;
  }

  public set intermediateStrokeAlpha(value) {
    if (this._intermediateStrokeAlpha === value) return;

    this._intermediateStrokeAlpha = value;
    this._dirty = true;
  }

  /**
   * Color of intermediate rule stroke.
   */
  public get intermediateStrokeColor(): number {
    return this._intermediateStrokeColor;
  }

  public set intermediateStrokeColor(value) {
    if (this._intermediateStrokeColor === value) return;

    this._intermediateStrokeColor = value;
    this._dirty = true;
  }

  /**
   * Weight of intermediate rule stroke.
   */
  public get intermediateStrokeWeight(): number {
    return this._intermediateStrokeWeight;
  }

  public set intermediateStrokeWeight(value) {
    if (this._intermediateStrokeWeight === value) return;

    this._intermediateStrokeWeight = value;
    this._dirty = true;
  }

  /**
   * Grid size of major line rule.
   */
  public get majorGridSize(): number {
    return this._majorGridSize;
  }

  public set majorGridSize(value) {
    if (this._majorGridSize === value) return;

    this._majorGridSize = value;
    this._dirty = true;
  }

  /**
   * Whether major grid rule is visible.
   */
  public get majorGridVisible(): boolean {
    return this._majorGridVisible;
  }

  public set majorGridVisible(value) {
    if (this._majorGridVisible === value) return;

    this._majorGridVisible = value;
    this._dirty = true;
  }

  /**
   * Opacity of major rule stroke.
   */
  public get majorStrokeAlpha(): number {
    return this._majorStrokeAlpha;
  }

  public set majorStrokeAlpha(value) {
    if (this._majorStrokeAlpha === value) return;

    this._majorStrokeAlpha = value;
    this._dirty = true;
  }

  /**
   * Color of major rule stroke.
   */
  public get majorStrokeColor(): number {
    return this._majorStrokeColor;
  }

  public set majorStrokeColor(value) {
    if (this._majorStrokeColor === value) return;

    this._majorStrokeColor = value;
    this._dirty = true;
  }

  /**
   * Weight of major rule stroke.
   */
  public get majorStrokeWeight(): number {
    return this._majorStrokeWeight;
  }

  public set majorStrokeWeight(value) {
    if (this._majorStrokeWeight === value) return;

    this._majorStrokeWeight = value;
    this._dirty = true;
  }

  /**
   * Grid size of minor line rule.
   */
  public get minorGridSize(): number {
    return this._minorGridSize;
  }

  public set minorGridSize(value) {
    if (this._minorGridSize === value) return;

    this._minorGridSize = value;
    this._dirty = true;
  }

  /**
   * Whether minor grid rule is visible.
   */
  public get minorGridVisible(): boolean {
    return this._minorGridVisible;
  }

  public set minorGridVisible(value) {
    if (this._minorGridVisible === value) return;

    this._minorGridVisible = value;
    this._dirty = true;
  }

  /**
   * Opacity of minor rule stroke.
   */
  public get minorStrokeAlpha(): number {
    return this._minorStrokeAlpha;
  }

  public set minorStrokeAlpha(value) {
    if (this._minorStrokeAlpha === value) return;

    this._minorStrokeAlpha = value;
    this._dirty = true;
  }

  /**
   * Color of minor rule stroke.
   */
  public get minorStrokeColor(): number {
    return this._minorStrokeColor;
  }

  public set minorStrokeColor(value) {
    if (this._minorStrokeColor === value) return;

    this._minorStrokeColor = value;
    this._dirty = true;
  }

  /**
   * Weight of minor rule stroke.
   */
  public get minorStrokeWeight(): number {
    return this._minorStrokeWeight;
  }

  public set minorStrokeWeight(value) {
    if (this._minorStrokeWeight === value) return;

    this._minorStrokeWeight = value;
    this._dirty = true;
  }

  //------------------------------
  //  methods
  //------------------------------

  /**
   * @constructor
   */
  constructor(options: Partial<GraphOptions> = {}) {
    super();

    this.set(options);

    this._graphics = new PIXI.Graphics();
    this.addChild(this._graphics);

    this._dirty = true;
  }

  /**
   * Apply graph options
   * @param {GraphOptions} options - Options to be applied
   */
  public set(options: Partial<GraphOptions> = {}) {
    Object.assign(this, options);
    this._dirty = true;
  }

  /**
   * On invalidation, rendering operations to redraw.
   *
   * @override
   * @param {PIXI.Rectangle} renderer
   */
  public render(renderer: PIXI.Renderer) {
    super.render(renderer);

    if (!this._dirty) return;
    this._dirty = false;
    this._graphics.clear();

    this.renderBackground();
    this.renderMinorGrid();
    this.renderIntermediateGrid();
    this.renderMajorGrid();
  }

  /**
   * Render the background fill
   * @private
   */
  private renderBackground() {
    const {
      _backgroundFillAlpha,
      _backgroundFillColor,
      _graphHeight,
      _graphWidth,
      _backgroundVisible,
      _graphics,
    } = this;

    if (!_backgroundVisible) return;

    _graphics.beginFill(_backgroundFillColor, _backgroundFillAlpha);
    _graphics.drawRect(0, 0, _graphWidth, _graphHeight);
    _graphics.endFill();
  }

  /**
   * Render intermediate grid rule.
   * @private
   */
  private renderIntermediateGrid() {
    const {
      _graphHeight,
      _graphWidth,
      _intermediateGridSize,
      _intermediateStrokeAlpha,
      _intermediateStrokeColor,
      _intermediateStrokeWeight,
      _majorGridSize,
      _majorGridVisible,
      _intermediateGridVisible,
      _graphics,
    } = this;

    if (!_intermediateGridVisible) return;

    _graphics.lineStyle(
      _intermediateStrokeWeight,
      _intermediateStrokeColor,
      _intermediateStrokeAlpha
    );

    for (let i = 0; i < _graphHeight; i += _intermediateGridSize) {
      if (_majorGridVisible && i % _majorGridSize === 0) continue;
      _graphics.moveTo(0, i);
      _graphics.lineTo(_graphWidth, i);
    }

    for (let i = 0; i < _graphWidth; i += _intermediateGridSize) {
      if (_majorGridVisible && i % _majorGridSize === 0) continue;
      _graphics.moveTo(i, 0);
      _graphics.lineTo(i, _graphHeight);
    }
  }

  /**
   * Render major grid rule.
   * @private
   */
  private renderMajorGrid() {
    const {
      _graphHeight,
      _graphWidth,
      _majorGridSize,
      _majorStrokeAlpha,
      _majorStrokeColor,
      _majorStrokeWeight,
      _majorGridVisible,
      _graphics,
    } = this;

    if (!_majorGridVisible) return;

    _graphics.lineStyle(
      _majorStrokeWeight,
      _majorStrokeColor,
      _majorStrokeAlpha
    );

    for (let i = 0; i <= _graphHeight; i += _majorGridSize) {
      _graphics.moveTo(0, i);
      _graphics.lineTo(_graphWidth, i);
    }

    for (let i = 0; i <= _graphWidth; i += _majorGridSize) {
      _graphics.moveTo(i, 0);
      _graphics.lineTo(i, _graphHeight);
    }
  }

  /**
   * Render minor grid rule.
   * @private
   */
  private renderMinorGrid() {
    const {
      _graphHeight,
      _graphWidth,
      _intermediateGridSize,
      _majorGridSize,
      _minorGridSize,
      _minorStrokeAlpha,
      _minorStrokeColor,
      _minorStrokeWeight,
      _intermediateGridVisible,
      _majorGridVisible,
      _minorGridVisible,
      _graphics,
    } = this;

    _graphics.lineStyle(
      _minorStrokeWeight,
      _minorStrokeColor,
      _minorStrokeAlpha
    );

    for (let i = 0; i < _graphHeight; i += _minorGridSize) {
      if (_majorGridVisible && i % _majorGridSize === 0) continue;
      if (_intermediateGridVisible && i % _intermediateGridSize === 0) continue;

      _graphics.moveTo(0, i);
      _graphics.lineTo(_graphWidth, i);
    }

    for (let i = 0; i < _graphWidth; i += _minorGridSize) {
      if (_majorGridVisible && i % _majorGridSize === 0) continue;
      if (_intermediateGridVisible && i % _intermediateGridSize === 0) continue;

      _graphics.moveTo(i, 0);
      _graphics.lineTo(i, _graphHeight);
    }
  }
}
