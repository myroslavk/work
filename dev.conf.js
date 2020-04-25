require('babel-core/register');
let jasmineReporters = require('jasmine-reporters');

let reportsDirectory = './reports';
let dashboardReportDirectory = reportsDirectory + '/dashboardReport';

exports.config = {

	framework: 'jasmine2',

	allScriptsTimeout: 30000,

	// Do not start a Selenium Standalone sever - only run this using chrome.
	directConnect: true,
	//chromeDriver: '../../node_modules/protractor/selenium/chromedriver',

	baseUrl: 'https://commerceos.staging.devpayever.com',

	// Capabilities to be passed to the webdriver instance.

	// To disable the "unsupported flag" prompt,
	// add --test-type to the command-line flags you're using.
	// This shouldn't affect the browser in any other noticeable way,
	// but it's used for internal testing, so use it at your own risk.

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['--test-type']
		}
	},

	onPrepare: () => {
		// Change browser size after launch
		browser.driver.manage().window().maximize();

		browser.ignoreSynchronization = true; 
		   // xml report generated for dashboard
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: reportsDirectory + '/xml',
            filePrefix: 'xmlOutput'
        }));

        let fs = require('fs-extra');
        if (!fs.existsSync(dashboardReportDirectory)) {
            fs.mkdirSync(dashboardReportDirectory);
        }

        jasmine.getEnv().addReporter({
            specDone: result => {
                if (result.status == 'failed') {
                    browser.getCapabilities().then( caps => {
                        let browserName = caps.get('browserName');
                        browser.takeScreenshot().then( png => {
                            let stream = fs.createWriteStream(dashboardReportDirectory + '/' + result.fullName.split(" ").join("-") + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
	},

	onComplete: () => {
        let browserName, browserVersion;
        let capsPromise = browser.getCapabilities();

        capsPromise.then( caps => {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            let HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: dashboardReportDirectory,
                outputFilename: 'index',
                screenshotPath: './',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
        });
    },

	// Spec patterns are relative to the current working directly when
	// protractor is called.
	specs: [
		'*/spec.js'
	],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		isVerbose: false,
		includeStackTrace: false
	}
};