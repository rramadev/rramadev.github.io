# rramadev.github.io - Website

## Synopsis

A personal github website using:

- Html5 
- CSS3
- SASS
- Bootstrap v4.0.0-alpha.6
- particles.js - A lightweight JavaScript library
- Progressive Web App - meets the key principles of a PWA

This site contains a collection of personal projects, including sample applications of web front-end and back-end technologies.

*You can see a running demo* [here](https://rramadev.github.io).

## Commands

command | description
--- | ---
`npm run start`| build, start concurrently watch sass and lite-server
`npm run server`| start lite-server
`npm run build`| sass build and clean unused css styles
`npm run build:sass`| sass build
`npm run watch:sass`| watch sass
`npm run clean:css`| clean unused css styles

## Installation

1) Open a command prompt in the project's root directory

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.

3) Type: `npm start`
    This launches the builder to compile the sass files to css, clean the minified css file and wait for changes. It also starts the lite-server and launches the browser to run the application.
