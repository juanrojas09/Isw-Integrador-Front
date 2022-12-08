const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  /*helpers: {
    Playwright: {
      url: 'https://isw3-integrador-production.up.railway.app/',
      show: true,
      browser: 'chromium'
    }
    
  },*/
  helpers: {
		REST: {
			endpoint: "https://isw3-integrador-production.up.railway.app/",
			onRequest: () => {
			}
		}
	},
  include: {
    I: './steps_file.js'
  },
  name: 'TestIntegracion',
  mocha:  {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "steps": true,
        }
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/result.xml"
        },
        "attachments": true //add screenshot for a failed test
        }
      }
    }
  
}
