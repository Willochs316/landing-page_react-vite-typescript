# React + TypeScript + Vite

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

## Prerequisites

Ensure you have the following installed:

- [x] Node.js (version 14.x or later)
- [x] npm (version 6.x or later) or yarn (version 1.x or later)

## Installation

1. Clone the repository:

```javascript
git clone https://github.com/Willochs316/React.Js-Evaluation-Round-2.git
cd React.Js-Evaluation-Round-2
```

2. Install dependencies:

```javascript
npm install
```

## Running the Development Server

To start the development server, run:

Using npm:

```js
npm run dev
```

The application will be available at http://localhost:5173/.

## Features

- Responsive Design: Optimized for various screen sizes.
- Fast Development: Utilizes Vite for rapid development.
- Component-Based: Modular and reusable components.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
