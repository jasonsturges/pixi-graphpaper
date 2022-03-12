import { GraphOptions } from "../display/GraphOptions";

/**
 * Blueprint style graph paper
 */
export const BLUEPRINT: Partial<GraphOptions> = {
  backgroundFillAlpha: 1,
  backgroundFillColor: 0x234283,
  backgroundVisible: true,
  intermediateGridVisible: false,
  majorGridSize: 100,
  majorGridVisible: true,
  majorStrokeAlpha: 0.5,
  majorStrokeColor: 0xbfe0ec,
  majorStrokeWidth: 2,
  minorGridSize: 10,
  minorGridVisible: true,
  minorStrokeAlpha: 0.1,
  minorStrokeColor: 0xbfe0ec,
  minorStrokeWidth: 1,
};

/**
 * Dark (default) style graph paper
 */
export const DARK: Partial<GraphOptions> = {
  backgroundFillAlpha: 1,
  backgroundFillColor: 0x0,
  backgroundVisible: false,
  intermediateGridSize: 50,
  intermediateGridVisible: true,
  intermediateStrokeAlpha: 1.0,
  intermediateStrokeColor: 0x313131,
  intermediateStrokeWidth: 0.5,
  majorGridSize: 100,
  majorGridVisible: true,
  majorStrokeAlpha: 1.0,
  majorStrokeColor: 0x424242,
  majorStrokeWidth: 1,
  minorGridSize: 10,
  minorGridVisible: true,
  minorStrokeAlpha: 1,
  minorStrokeColor: 0x2a2a2a,
  minorStrokeWidth: 0.25,
};

/**
 * Engineering style graph paper
 */
export const ENGINEERING: Partial<GraphOptions> = {
  backgroundFillAlpha: 1,
  backgroundFillColor: 0xfbfbd9,
  backgroundVisible: true,
  intermediateGridVisible: false,
  majorGridSize: 100,
  majorGridVisible: true,
  majorStrokeAlpha: 0.5,
  majorStrokeColor: 0x40a040,
  majorStrokeWidth: 2,
  minorGridSize: 10,
  minorGridVisible: true,
  minorStrokeAlpha: 0.1,
  minorStrokeColor: 0x60e080,
  minorStrokeWidth: 1,
};

/**
 * Light style graph paper
 */
export const LIGHT: Partial<GraphOptions> = {
  backgroundFillAlpha: 1,
  backgroundFillColor: 0xefefef,
  backgroundVisible: true,
  intermediateGridSize: 50,
  intermediateGridVisible: false,
  majorGridSize: 50,
  majorGridVisible: true,
  majorStrokeAlpha: 1.0,
  majorStrokeColor: 0x9a9a9a,
  majorStrokeWidth: 0.5,
  minorGridSize: 10,
  minorGridVisible: true,
  minorStrokeAlpha: 1,
  minorStrokeColor: 0xacacac,
  minorStrokeWidth: 0.25,
};

/**
 * Quad style graph paper
 */
export const QUAD: Partial<GraphOptions> = {
  backgroundFillAlpha: 1,
  backgroundFillColor: 0xcee6f0,
  backgroundVisible: true,
  intermediateGridVisible: false,
  majorGridSize: 100,
  majorGridVisible: true,
  majorStrokeAlpha: 0.4,
  majorStrokeColor: 0x75a2a5,
  majorStrokeWidth: 2,
  minorGridSize: 25,
  minorGridVisible: true,
  minorStrokeAlpha: 0.4,
  minorStrokeColor: 0xb3ced5,
  minorStrokeWidth: 1,
};

export const GraphStyle = {
  BLUEPRINT,
  DARK,
  ENGINEERING,
  LIGHT,
  QUAD,
};
