# devopness-ui-components

This project is a Web Components implementation of Devopness' design system that intends to be future-proof and interoperable with any frontend library and framework available.

## Usage

### Installing

```
yarn add @devopness/ui-components
```

### Importing

In order to register the Web Components and keep them tree-shakeable, make sure you import each component separately as they are needed:

```jsx
import "@devopness/ui-components/dist/components/Button";
```

### Consuming

Use the components as native HTML tags:

```html
<devopness-button> Click me! </devopness-button>
```

## Storybook

Testing and reviewing can be done using the Storybook instance.

- `yarn storybook` runs Storybook on development mode;
- `yarn build-storybook` generates an static version of the Storybook library.

## Development

- `yarn build` compiles TS into JS sources;

### Components

Components are functional patterns that serve as the building blocks for interfaces and enable users to interact with the application. They can be **buttons**, **tables**, **form elements** etc.

#### Anatomy of a component

Each component must have the following structure:

- src
  - components
    - new-component-name
      - index.ts
      - index.stories.ts
      - index.test.ts

### Tokens

Tokens are perceptual patterns that provide visual coherence among components and communicate the brand's values and personality. They consist of design primitives such as **color**, **spacing**, **typography** and **size**.

The tokens object must follow the [Style Dictionary design token structure](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-structure).
