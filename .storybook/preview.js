import { createScene } from "./stories/Scene";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => {
    createScene({
      width: window.innerWidth - 32,
      height: window.innerHeight - 36,
    });
    return story();
  },
];
