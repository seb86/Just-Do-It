# Just Do It

A Gruntfile.js and package.json template ready to copy into your WordPress plugin projects. Just configure the requirements needed and run the Grunt commands below.

### Developer Dependancies

These are the dependencies in use for testing, building and updating the language POT file.

* "[grunt](https://www.npmjs.com/package/grunt)" v1.0.1
* "[grunt-contrib-jshint](https://www.npmjs.com/package/grunt-contrib-jshint)" v1.0.0
* "[grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)" v1.0.0
* "[grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch)" v1.0.0
* "[grunt-newer](https://www.npmjs.com/package/grunt-newer)" v1.3.0
* "[grunt-text-replace](https://www.npmjs.com/package/grunt-text-replace)" v0.4.0
* "[grunt-checktextdomain](https://www.npmjs.com/package/grunt-checktextdomain)" v1.0.1
* "[grunt-wp-i18n](https://www.npmjs.com/package/grunt-wp-i18n)" v1.0.0
* "[grunt-potomo](https://www.npmjs.com/package/grunt-potomo)" v3.5.0
* "[jshint-stylish](https://www.npmjs.com/package/jshint-stylish)" v2.2.0
* "[load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks)" v3.5.2

### Installation

1) Install [Node.js & NPM](https://nodejs.org/) and [Grunt](http://gruntjs.com/getting-started) by following the standard installation instructions or using [Homebrew](http://brew.sh/).

If you've installed NPM correctly, this should display the version:

``$ npm --version``

If you've install Grunt correctly, this should display the version:

``$ grunt --version``

2) Change to the plugin root directory.

Install the Grunt dependencies by running the `npm` installer with the following command:

``$ npm install --dev``

3) Run the tests with

``$ grunt test --force``

The `--force` tells grunt to continue next tasks even if one fails.

### Grunt Commands

Build the plugin.
> String Replacements (i.e. Plugin Version), Compresses the JavaScript, Checks for Text Domain issues and Updates the POT file.

``$ grunt build``

Similar to the build command except it does not check for text domains issues.

``$ grunt dev``

Checks for any text domain issues and updates the POT file.

``$ grunt update-pot``
