describe('Android Native Feature Tests', () => {
    it('Access an Activuty directly', async () => {

        //start Activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        //pause 3s
        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async () => {
        
        //click on element
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // //accept Alert
        // await driver.acceptAlert();

        //  //dismiss Alert
        //  await driver.dismissAlert();

        //get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());
        
        //click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    });

    it('Vertical scrolling', async() => {
        await $('~App').click();

        await $('~Activity').click();

        // //scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();


        // await $('~Secure Surfaces').click();


        //assertion
        await expect($('//*[@resource-id="android:id/text1"]')).toExist();
    });

    it('Horizontal scrolling', async() =>{

        //start Activity
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1");

        //Horizontal scroll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await driver.pause(3000);

        //Horizontal scroll Backward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    });

    it.only('Working with a date picker', async() =>{

        //start Activity
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");

        // //assertion - date is true
        // await expect($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')).toHaveText("12-27-2022 01:02");

        //get current date
        const date = await($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'));
        const currentDate = await date.getText();

        //click on change the date button
        await $('~change the date').click();

        //scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //select the 10th date
        // await $('~10 January 2023').click();
        await $('//*[@text="10"]').click();

        //click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        //verify the updated date
        // await expect($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')).toHaveText("1-10-2023 01:02");
        await expect(await date.getText()).not.toEqual(currentDate);

        await driver.pause(3000);

    });
});