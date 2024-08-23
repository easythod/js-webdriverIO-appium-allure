describe('iOS Native Feature Tests', () => {
    xit('Working with alert box', async () => {

        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        //pause 3s
        await driver.pause(3000);

        console.log(await driver.getAlertText());

        // //click ok
        // await $('~OK').click();
            //or
        //accept/dismiss alert
        await driver.dismissAlert();

        //assertion
        await expect($('~OK')).not.toExist();
        
    });

    xit('Working with scrollable elements', async() => {
        
        // //easiest
        // //You can set scroll to any direction "down", "up", "left", "right"
        // await driver.execute('mobile: scroll', { direction: "down" });
        // await driver.execute('mobile: scroll', { direction: "up" });

        //complex
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        // await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: "down" });
        await driver.execute('mobile: scroll', { element: (await $('~Red color component value')).elementId, direction: "down" });

        await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: "down" });
        await driver.execute('mobile: scroll', { element: greenPicker.elementId, direction: "up" });

        await driver.pause(2000);

    });

    it('Working with Picker view', async() =>{

        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        //set purple color (125, 0, 125)
        await redPicker.addValue('125')
        await greenPicker.addValue('0')
        await bluePicker.addValue('125')

        await driver.pause(3000);

    });
});