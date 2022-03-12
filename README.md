# Pixi Graph Paper

Ruled graph paper, PIXI.Sprite instance able to be added to the display list via `addChild()`.

![pixi-graph-paper](https://user-images.githubusercontent.com/1213591/109711264-4a64d400-7b64-11eb-97bd-5472bd9f6453.gif)

- CodeSandbox Demo: https://codesandbox.io/s/pixi-graph-paper-xn2rm
- Storybook Demo: https://jasonsturges.github.io/pixi-graphpaper


# Getting Started

To install, execute:

    npm i pixi-graphpaper

Then, import into a project as:

```js
import { GraphPaper } from "pixi-graphpaper";
```


# Usage

By default, a dark theme graph paper will be applied in a 1000 x 1000 pixel grid, with:

- Major grid every 100-pixels
- Intermediate grid every 50-pixels
- Minor grid every 10-pixels

Instantiate and add to the display list:

```js
import { GraphPaper } from "pixi-graphpaper";

let paper = new GraphPaper();
stage.addChild(paper);
```

Options may be passed to the constructor:

```js
let paper = new GraphPaper({
  graphWidth: 2000,
  graphHeight: 2000,
});
```

Or, set via properties:

```js
let paper = new GraphPaper();

paper.graphWidth = 2000;
paper.graphHeight = 2000;
```


## Properties

The following properties may be set on a `GraphPaper` instance:

| Type    | Param                     | Description                                                   |
|---------|---------------------------|---------------------------------------------------------------|
| number  | `backgroundFillAlpha`     | Opacity of the background fill                                |
| number  | `backgroundFillColor`     | Color of the background                                       |
| boolean | `backgroundVisible`       | Whether background is visible                                 |
| number  | `graphHeight`             | Width of the graph                                            |
| number  | `graphWidth`              | Height of the graph                                           |
| number  | `intermediateGridSize`    | Grid size of intermediate lines between major and minor rules |
| boolean | `intermediateGridVisible` | Whether intermediate grid rule is visible                     |
| number  | `intermediateStrokeAlpha` | Opacity of the intermediate rule stroke                       |
| number  | `intermediateStrokeColor` | Color of the intermediate rule stroke                         |
| number  | `intermediateStrokeWidth` | Width of the intermediate rule stroke                         |
| number  | `majorGridSize`           | Grid size of the major rule                                   |
| boolean | `majorGridVisible`        | Whether major grid rule is visible                            |
| number  | `majorStrokeAlpha`        | Opacity of the major rule stroke                              |
| number  | `majorStrokeColor`        | Color of the major rule stroke                                |
| number  | `majorStrokeWidth`        | Width of the major rule stroke                                |
| number  | `minorGridSize`           | Grid size of the minor rule                                   |
| boolean | `minorGridVisible`        | Whether minor grid rule is visible                            |
| number  | `minorStrokeAlpha`        | Opacity of the minor rule stroke                              |
| number  | `minorStrokeColor`        | Color of the minor rule stroke                                |
| number  | `minorStrokeWidth`        | Width of the minor rule stroke                                |


## Graph Paper Styles

Optionally, there are built-in styles via the `GraphStyle` class.

![blueprint](https://user-images.githubusercontent.com/1213591/109616946-6a13e200-7afb-11eb-8e24-6015f8adf8b0.png)

Apply via the constructor:

```js
import { GraphPaper, GraphStyle } from "pixi-graphpaper";

let paper = new GraphPaper({
  ...GraphStyle.BLUEPRINT,
  graphWidth: 2000,
  graphHeight: 2000,
});
```
