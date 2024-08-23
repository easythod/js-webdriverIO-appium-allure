require('dotenv').config()
const { config } = require('./wdio.shared.conf');


// ====================
// Runner Configuration
// ====================
// config.port = 4723;


// ========================
// BrowserStack Credentials
// ========================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY ;
config.services = ['browserstack'];


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
config.capabilities = [
    // {
    //     'appium:platformName': 'Android',
    //     'appium:platformVersion': '11.0',
    //     'appium:deviceName': 'Google Pixel 3',
    //     'appium:automationName': 'UIAutomator2',
    //     // 'appium:app': '/Users/home/Documents/myProjects/automationMobile/webdrivio-appium-v8/app/android/ApiDemos-debug.apk',
    //     // 'appium:app': path.join(process.cwd(), "./app/android/ApiDemos-debug.apk"),
    //     // "appium:app": path.join(process.cwd(), './app/android/ColorNote+Notepad.apk'),
    //     "appium:app": "bs://d0e08c933128672fd9d3f1f5c4b6f5e52944558c",
    //     "appium:autoGrantPermissions": true
    // }
    {
        'platformName': 'Android',
        'platformVersion': '9.0',
        'deviceName': 'Google Pixel 3',
        'automationName': 'UIAutomator2',
        "app": "bs://7e3826285b94a2c23dd53bfa1ba47cff3fad908f",
        "autoGrantPermissions": true
    }
];


// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
// config.services = ['browserstack'];

exports.config = config;