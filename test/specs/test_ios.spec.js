
describe('iOS Webview', () => {

    it('Working with dynamic webview', async () => {

        await $("~Webview").click()

        // //get current context
        // await driver.getContext()
        // //pause
        // await driver.pause(5000);
        // //get all the contexts
        // await driver.getContexts()
        // //pause
        // await driver.pause(5000);

        //wait until you get mutliple context
        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;  // true || false
        }, { timeout: 30000, timeoutMsg: 'Timed out waiting for another context' });

        //get all the contexts
        const contexts = await driver.getContexts()

        //switch to the webview context
        await driver.switchContext(contexts[1])

        //assertion
        const subtitleTxt = await $('.hero__subtitle')
        // console.log(subtitleTxt)
        await expect(subtitleTxt).toHaveTextContaining('automation')

        //switch back to NATIVE_APP
        await driver.switchContext('NATIVE_APP')
        await $('~Home').click()

        //assertion
        const webdriverTxt = await $('//*[@name="WEBDRIVER"]')
        await expect(webdriverTxt).toBeDisplayed()

    });
});