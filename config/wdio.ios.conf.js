const { config } = require('./wdio.shared.conf');
const path = require('path');


// ====================
// Runner Configuration
// ====================
config.port = 4723;

// ==================
// Specify Test Files
// ==================
config.specs = [
    // ToDo: define location for spec files here
    // './test/specs/**/*.js',
    // './test/specs/**/ios-native*.js',
    // './test/specs/ios/ios-todo-list-screen*.js',
    './../test/specs/ios/ios-todo-item-screen*.js',
];

// ============
// Capabilities
// ============
config.capabilities = [{
    'appium:platformName': 'ios',
    // 'appium:platformVersion': '14.5',
    // 'appium:deviceName': 'iPhone 12 Pro',
    'appium:platformVersion': '16.2',
    'appium:deviceName': 'iPhone 14 Pro',
    'appium:automationName': 'XCUITest',
    // "appium:app": path.join(process.cwd(), './app/ios/UIKitCatalog.app.zip')
    // "appium:app": path.join(process.cwd(), './app/ios/MVCTodo.app.zip')
    "appium:app": path.join(process.cwd(), './app/ios/iOS-NativeDemoApp.app.zip')
}];

config.services = [['appium', {
    args: {
      address: 'localhost',
      port: 4723,
      relaxedSecurity: true
    },
    logPath: './'
}]];

exports.config = config;