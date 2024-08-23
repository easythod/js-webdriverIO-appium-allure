const { config } = require('./wdio.shared.conf');
const path = require('path');


// ====================
// Runner Configuration
// ====================
config.port = 4723;
config.services = ['appium'],

// ==================
// Specify Test Files
// ==================
config.specs = [
    // ToDo: define location for spec files here
    // './test/specs/**/*.js',
    './../test/specs/android/add-note-screen*.js',
    // './test/specs/android/*.js',
];

// ============
// Capabilities
// ============
config.capabilities = [{
        'appium:platformName': 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Pixel 3',
        'appium:automationName': 'UIAutomator2',
        // 'appium:app': '/Users/home/Documents/myProjects/automationMobile/webdrivio-appium-v8/app/android/ApiDemos-debug.apk',
        // 'appium:app': path.join(process.cwd(), "./app/android/ApiDemos-debug.apk"),
        "appium:app": path.join(process.cwd(), './app/android/ColorNote+Notepad.apk'),
        "appium:autoGrantPermissions": true
    }];

exports.config = config;