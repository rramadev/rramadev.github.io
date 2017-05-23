# rramadev.github.io - Website

## Synopsis

A personal github website using:

- Html5 
- CSS3
- SASS
- Bootstrap v4.0.0-alpha.6
- particles.js - A lightweight JavaScript library
- Progressive Web App - meets the key principles of a PWA

* You can see the a running demo [here](http://rramadev.github.io).

## Commands

command | description
--- | ---
`npm run setup`| installs globals/etc
`npm run clean`| clean dist directory
`npm run build`| clean, ts & sass build
`npm run build:sass`| sass build
`npm run watch`| clean/watch ts & sass
`npm run watch:sass`| watch sass
`npm run dev`| build, watch, browsersync

## Installation

1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.

3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes.
    It also starts the lite-server and launches the browser to run the application.
