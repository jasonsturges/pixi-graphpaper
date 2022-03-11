import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";

export const canvas = document.createElement("canvas");

export const app = new PIXI.Application({
  view: canvas,
  width: 300,
  height: 150,
  antialias: true,
  autoDensity: true,
  backgroundColor: 0x131313,
  resolution: devicePixelRatio,
});

export const viewport = new Viewport({
  worldWidth: 1000,
  worldHeight: 1000,
  screenWidth: 300,
  screenHeight: 150,
  divWheel: app.view,
  interaction: app.renderer.plugins.interaction,
})
  .drag()
  .pinch()
  .wheel()
  .decelerate()
  .clampZoom({
    minScale: 0.1,
    maxScale: 10,
  });

app.stage.addChild(viewport);
app.ticker.start();

export const resize = (width, height) => {
  app.renderer.resize(width, height);
  viewport.resize(width, height);
};

window.addEventListener("resize", () => {
  resize(window.innerWidth - 32, window.innerHeight - 36);
});

export const createScene = ({ width, height }) => {
  while (viewport.children.length > 0) {
    const child = viewport.children.shift();
    child.destroy(true);
  }

  resize(width, height);
};
