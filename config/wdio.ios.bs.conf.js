const { config } = require('./wdio.shared.conf');


// ====================
// Runner Configuration
// ====================
// config.port = 4723;

config.user = "dmytro_kFhSlC",
config.key = "XpZNNU4f5JtfJgyMDfSu",
config.services = ['browserstack'];

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
config.capabilities = [
    // {
    // 'appium:platformName': 'ios',
    // 'appium:platformVersion': '14.5',
    // // 'appium:platformVersion': '16.2',
    // 'appium:deviceName': 'iPhone 12 Pro',
    // 'appium:automationName': 'XCUITest',
    // // "appium:app": path.join(process.cwd(), './app/ios/UIKitCatalog.app.zip')
    // "appium:app": path.join(process.cwd(), './app/ios/MVCTodo.app.zip')
    // }
    {
        'applatformName': 'ios',
        'platformVersion': '14',
        'deviceName': 'iPhone 12 Pro',
        'automationName': 'XCUITest',
        // "appium:app": path.join(process.cwd(), './app/ios/MVCTodo.app.zip')
        }
];

exports.config = config;