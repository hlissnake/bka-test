### BKA App for Test 

Application's online demo [hlissnake.github.io/bka-test/](http://hlissnake.github.io/bka-test/)

#### Architecture:
* Angular.js.
* SCSS preprocessor of css.
* Webpack+gulp for project build.
* Using Ramda functional programming lib to do data processing, with great Readability and Maintainability.

#### Unit Testing
* Karma, Mocha, Chai, Angular Mocking.
* Testing for Controller, to verify the data transition.
* BDD style testing.

run `npm start` in CLI to open the local server, then open [localhost:3714/](http://localhost:3714/) to run demo in browser.

run `npm test` in CLI to run testing case on Chrome

run `./node_modules/.bin/karma start --browsers Firefox` to run testing on Firefox