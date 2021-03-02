import { GraphOptions } from "./GraphOptions";

export class GraphPaperStyle {
  /**
   * Blueprint style graph paper
   */
  public static blueprint(): GraphOptions {
    return {
      backgroundFillAlpha: 1,
      backgroundFillColor: 0x234283,
      backgroundVisible: true,
      intermediateGridVisible: false,
      majorGridSize: 100,
      majorGridVisible: true,
      majorStrokeAlpha: 0.5,
      majorStrokeColor: 0xbfe0ec,
      majorStrokeWeight: 2,
      minorGridSize: 10,
      minorGridVisible: true,
      minorStrokeAlpha: 0.1,
      minorStrokeColor: 0xbfe0ec,
      minorStrokeWeight: 1,
    } as GraphOptions;
  }

  /**
   * Dark (default) style graph paper
   */
  public static dark(): GraphOptions {
    return {
      backgroundFillAlpha: 1,
      backgroundFillColor: 0x0,
      backgroundVisible: false,
      intermediateGridSize: 50,
      intermediateGridVisible: true,
      intermediateStrokeAlpha: 1.0,
      intermediateStrokeColor: 0x313131,
      intermediateStrokeWeight: 1,
      majorGridSize: 100,
      majorGridVisible: true,
      majorStrokeAlpha: 1.0,
      majorStrokeColor: 0x424242,
      majorStrokeWeight: 2,
      minorGridSize: 10,
      minorGridVisible: true,
      minorStrokeAlpha: 1,
      minorStrokeColor: 0x2a2a2a,
      minorStrokeWeight: 0.25,
    } as GraphOptions;
  }

  /**
   * Engineering style graph paper
   */
  public static engineering(): GraphOptions {
    return {
      backgroundFillAlpha: 1,
      backgroundFillColor: 0xfbfbd9,
      backgroundVisible: true,
      intermediateGridVisible: false,
      majorGridSize: 100,
      majorGridVisible: true,
      majorStrokeAlpha: 0.5,
      majorStrokeColor: 0x40a040,
      majorStrokeWeight: 2,
      minorGridSize: 10,
      minorGridVisible: true,
      minorStrokeAlpha: 0.1,
      minorStrokeColor: 0x60e080,
      minorStrokeWeight: 1,
    } as GraphOptions;
  }

  /**
   * Quad style graph paper
   */
  public static quad(): GraphOptions {
    return {
      backgroundFillAlpha: 1,
      backgroundFillColor: 0xcee6f0,
      backgroundVisible: true,
      intermediateGridVisible: false,
      majorGridSize: 100,
      majorGridVisible: true,
      majorStrokeAlpha: 0.4,
      majorStrokeColor: 0x75a2a5,
      majorStrokeWeight: 2,
      minorGridSize: 25,
      minorGridVisible: true,
      minorStrokeAlpha: 0.4,
      minorStrokeColor: 0xb3ced5,
      minorStrokeWeight: 1,
    } as GraphOptions;
  }
}
