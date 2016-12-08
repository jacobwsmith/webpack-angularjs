# Frontend Guide

A living guide for the CMI Front-end applications. This mini application provides documentation and demos of our styles and our components. Technology used: 
- Javascript Framework: Angular 1.x
- Client Side Routing: Angular UI Router
- CSS Framework: Bootstrap
- CSS Preprocessor: Sass
- Build Tool: npm and Webpack
- Transpilier: Babel
- Linting: ESLint

### Install the Application

`npm install`

### Start the Application on Local Server

`npm start`

### Build the Application

`npm run build`

### Build the Application in a Minimized Production Mode

`npm run build:prod`

### Test the Application

`npm test`

### End to End Tests

`npm run e2e`

### Lint the Application

`npm run lint`

### Validate the Webpack Configuration

`validate-webpack:dev`

`validate-webpack:prod`

## Included in this build process
- imports bootstrap
- scss file compiled into js with source maps
- html templates compiled into js
- copies index.html to htdocs folder with cache busting
- browser auto reloads
- a minimized production build
- lint code
- unit tests with example
- unit test code coverage
- e2e tests with example
- chunk modules by page
- loads icons from font awesome
- loads images
- loads svg
- angular-ui bootstrap w/ modal example
- ngAnnotate to fix uglify breaking

## TODOs for the build process
- hot module reload (HMR), does not seem to be working
- services load data at page level? caching? how do we handle this, ngRedux?
- setup the ideal development environment, watch, test...?
- local "production" build with e2e tests to ensure uglify does not break anything
- better production build with no comments
- understand babels tranpilations settings
- explore if yarn is helpful
- output a vendors script and put in page