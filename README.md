# Just Do It

###### Follow me
💻 [Website](https://sebastiendumont.com) 🐦[Twitter](https://twitter.com/sebd86)

## 🔔 Overview

A `Gruntfile.js` and `package.json` template ready to copy into your WordPress plugin projects. Just configure the package.json file to your requirements and run the Grunt commands below after installing the dependencies.

### Developer Dependancies

These are the dependencies in use for testing, building, updating the language POT file and building a deployable plugin zipped up.

* [grunt](https://www.npmjs.com/package/grunt) `v1.0.3`
* [grunt-checktextdomain](https://www.npmjs.com/package/grunt-checktextdomain) `v1.0.1`
* [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean) `v2.0.0`
* [grunt-contrib-compress](https://www.npmjs.com/package/grunt-contrib-compress) `v1.4.3`
* [grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy) `v1.0.0`
* [grunt-contrib-cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin) `v2.2.0`
* [grunt-contrib-jshint](https://www.npmjs.com/package/grunt-contrib-jshint) `v1.0.0`
* [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify) `v1.0.0`
* [grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch) `v1.0.0`
* [grunt-newer](https://www.npmjs.com/package/grunt-newer) `v1.3.0`
* [grunt-potomo](https://www.npmjs.com/package/grunt-potomo) `v3.5.0`
* [grunt-text-replace](https://www.npmjs.com/package/grunt-text-replace) `v0.4.0`
* [grunt-wp-i18n](https://www.npmjs.com/package/grunt-wp-i18n) `v1.0.3`
* [jshint-stylish](https://www.npmjs.com/package/jshint-stylish) `v2.2.0`
* [load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks) `v4.0.0`

#### 💽 Installation

1) Install [Node.js & NPM](https://nodejs.org/) and [Grunt](http://gruntjs.com/getting-started) by following the standard installation instructions or using [Homebrew](http://brew.sh/).

If you've installed NPM correctly, this should display the version:

``$ npm --version``

If you've install Grunt correctly, this should display the version:

``$ grunt --version``

2) Change to the plugin root directory.

Install the Grunt dependencies by running the `npm` installer with the following command:

``$ npm install --dev`` or ``$ npm install --only=dev``

3) Run tests.

``$ grunt test``

Add ` --force` at the end to tell grunt to continue next tasks even if one fails.

``$ grunt test --force``

### 🐽 Grunt Commands

Build the plugin.
> String Replacements (i.e. Plugin Version), Compresses the JavaScript, Checks for Text Domain issues and Updates the POT file.

``$ grunt build``

Similar to the build command except it does not check for text domains issues.

``$ grunt dev``

Checks for any text domain issues and updates the POT file.

``$ grunt update-pot``

Copies the plugin to create deployable plugin, then compresses the folder and then deletes the folder once compressed.

The zip file will be labelled as ``%= pkg.name %-v%= pkg.version %.zip``

``$ grunt zip``

## Contribute

If you or your company use Just Do It or appreciate the work I’m doing in open source, please consider supporting me directly so I can continue maintaining it.

You'll be helping to ensure I can spend the time not just fixing bugs, but keeping the project afloat. Any contribution you make is a big help and is greatly appreciated.

Please also consider starring ✨ and sharing 👍 the project repo! This helps the project getting known and grow with the community. 🙏

I accept one-time donations and monthly via [BuyMeACoffee.com](https://www.buymeacoffee.com/sebastien)
- [My PayPal](https://www.paypal.me/codebreaker)
- [BuyMeACoffee.com](https://www.buymeacoffee.com/sebastien)
- Bitcoin (BTC): `3L4cU7VJsXBFckstfJdP2moaNhTHzVDkKQ`
- Ethereum (ETH): `0xc6a3C18cf11f5307bFa11F8BCBD51F355b6431cB`
- Litecoin (LTC): `MNNy3xBK8sM8t1YUA2iAwdi9wRvZp9yRoi`

Thank you for your support! 🙌


##### License

Just Do It is released under [GNU General Public License v3.0](http://www.gnu.org/licenses/gpl-3.0.html).

---

<p align="center">
	<img src="https://raw.githubusercontent.com/seb86/my-open-source-readme-template/master/a-sebastien-dumont-production.png" width="353">
</p>
