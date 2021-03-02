# Pixi Graph Paper
Ruled graph paper, PIXI.Sprite instance able to be added to the display list via `addChild()`.

![dark](https://user-images.githubusercontent.com/1213591/109616919-62ecd400-7afb-11eb-9e6f-0f2fc9efeba9.png)

CodeSandbox Demo: https://xn2rm.csb.app/

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
  graphHeight: 2000
});
```

Or, set options via the `set()` function:
```js
let paper = new GraphPaper();

paper.set({
  graphWidth: 4000,
  graphHeight: 4000
});
```

Or, set via properties:

```js
let paper = new GraphPaper();

paper.graphWidth = 2000;
paper.graphHeight = 2000;

```

## Graph Paper Styles

Optionally, there are built-in styles via the `GraphPaperStyle` class.

![blueprint](https://user-images.githubusercontent.com/1213591/109616946-6a13e200-7afb-11eb-8e24-6015f8adf8b0.png)

Apply via the constructor:

```js
import { GraphPaper, GraphPaperStyle } from "pixi-graphpaper";

let paper = new GraphPaper({
  graphWidth: 2000,
  graphHeight: 2000,
  ...GraphPaperStyle.blueprint()
});
```

Or, via `set()` function:

```js
import { GraphPaper, GraphPaperStyle } from "pixi-graphpaper";

let paper = new GraphPaper();
paper.set(GraphPaperStyle.engineering());
```
