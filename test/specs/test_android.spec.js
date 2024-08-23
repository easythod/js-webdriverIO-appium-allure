
describe('Web Browser Access', () => {

    before('skip tutorial', async () => {

        // click Skip 
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

    });

    it('Access external link and verify content in the browser', async () => {

        // click nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // click fb link
        await $('//*[@text="Like us on Facebook"]').click();

        //get current context
        // console.log(await driver.getContext())

        //get all the contexts
        console.log(await driver.getContexts())

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome')

        //pause 3s
        // await driver.pause(3000);

        //assertion
        const coverPhoto = await $('.img.coverPhoto');
        await expect(coverPhoto).toBeDisplayed()

        //switch back to app
        await driver.switchContext('NATIVE_APP')
        await driver.back()

        //continue with the app stuff..
        await $('//*[@text="Notes"]').click();
        const addNoteText = await $('//*[@text="Add note"]')
        await expect(addNoteText).toBeDisplayed()
    });

});