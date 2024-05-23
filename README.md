# React + TypeScript + Vite

This project involves translating UI/UX designs and wireframes into functional application code and building visual components. I optimize the website for speed and scalability using React.js, Vite, and TypeScript.

## Project Overview

The goal of this project is to create a high-performance, scalable website for Zwilt by implementing new user-facing features and UI components based on provided designs. This involves the following key tasks:

- Translating UI/UX designs into functional code
- Building reusable and responsive UI components
- Optimizing the website for speed and scalability

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Vite: A next-generation front-end tool for faster builds.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

## Prerequisites

Ensure you have the following installed:

- [x] Node.js (version 14.x or later)
- [x] npm (version 6.x or later) or yarn (version 1.x or later)

## Installation

To get started with the development environment, follow these steps:

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

## Features Implemented

### User-Facing Features

- Home Page: A responsive landing page with dynamic content.
- Dashboard: An interactive dashboard displaying user-specific data.
- Fast Development: Utilizes Vite for rapid development.

## UI Components

- Button: A reusable button component with customizable styles.
- Component-Based: Modular and reusable components.
- Navbar: A responsive navigation bar with dropdown support.
- CustomLink: A customizable link component with support for external and internal navigation.
- Typography: Custom text components for consistent styling across headings, paragraphs, and other text elements.

## Optimization Strategies

To ensure the website is optimized for speed and scalability, we implemented the following strategies:

- [x] Code Splitting: I used dynamic imports to split code into smaller bundles.
- [x] Optimized the frontend to load and render data quickly.
- [x] I utilized efficient data structures and algorithms to process

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
