# KPCC
> A web application that allows a user to search for KPCC articles.

![Imgur](http://i.imgur.com/by5RQAf.gif)

## Table of Contents
1. [Getting Started](#getting-started)
  1. [Installing Dependencies](#installing-dependencies)
1. [Usage](#usage)
1. [Testing](#testing)
1. [Stack](#stack)
1. [Design Choices](#design-choices)
1. [Notes](#notes)

## Getting Started
### Installing Dependencies
From within the root directory:
```sh
$ npm install
```

## Usage
From within the root directory
```sh
$ npm start
```

Then, open your browser and navigate to [localhost:8080](http://localhost:8080).

## Testing
From within the root directory:
```sh
$ npm test
```

## Stack
* React 15.4.2
* Node 6.3.1
* Express 4.14.1
* Mocha/Chai/Enzyme

## Design Choices
* State-full application parent: 'App'
  * Keeps logic: API calls, capturing input, and initializing state
* State-less children: 'SearchBar', 'ArticleEntry'
  * Renders the input field and binds parent's callback to child's submit event
  * Maps over the state and renders each article

* Client folder structure is organized by component tree
* Basic web server is used to serve static assets and allow for easy testing across multiple platforms

* Styling:
  * The application is responsive to its window's size
  * Uses breakpoint at 600px
  * Primarily uses box-model and floats

![Imgur](http://i.imgur.com/iPRIS2l.gif)

## Notes
* No third party CSS libraries such as Bootstrap or Materialize is used
* Currently tested with Chrome 56 (Desktop)(Main Reference), Chrome 55 (Android), Firefox 49, Safari 10, Edge 38, and Internet Explorer 11
  * Uses polyfills for Fetch API and ES6 promises
* Webpack is used to bundle source code to the public folder
  * If cloned from github, the project should build after running "npm start".
  * If opened from the .zip, the bundle should be in the directory, 'public/dist'. To start, you can use "npm start", or "npm run server";
* Uses [Moment.js](https://momentjs.com/) for relative time.
* Although the exercise was not implemented in Ruby, I'm confident that I can pick up Ruby's syntax and contribute right away
* Thank you so much for the opportunity to participate in this coding challenge! I had a really fun time with it!
