
exports.config = {
    hotname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "pixel-7-pro",
        "appium:automationName": "UIAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".SplashActivity",
        "appium:appWaitActivity": ".MainActivity"
    }],
    framework: 'mocha',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000
    },
}
