
Introduction
-----------------
This is a demo application which is developed as per the requirement
https://github.com/DaliaResearch/FrontEndChallenge_001

**Knockoutjs** is used as the main front-end framework, apart from Knockout only JQuery is used.

Webpack is used for development and build process.

How to run
---------------
Download the source code and run through any webserver. It will be working as expected.

This repository contains the JavaScript build file app.min.js , build using webpack is served as default.
To debug and further development use webpack

    npm install webpack -g
    npm install webpack-dev-server -g
and start the application with

    webpack-dev-server -d ./src/app.js
Application will be running on `localhost:8080` , `-d` specify to run source map
To check and debug source on runtime , go to source tab in inspector and see `webpack://`folder
