
describe('Add Notes', () => {
    it('skip tutorial', async () => {

        // click Skip 
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();

    });

    it('add a note, save changes & verify note', async () => {

        await $('//*[@text="Add note"]').click();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]').click();

        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List");
        // await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");

        //add note body
        
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOne Piace\nAOT");
        
        //save the changes
        await driver.back();
        await driver.back();

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Naruto\nOne Piace\nAOT");

        await driver.pause(3000);
    });

    it('Delete a note', async () => {

        await driver.back();

        const note = await($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).getText();

        //click note
        await($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).click();

        //click menu
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();

        //click Delete
        await $('//*[@text="Delete"]').click();

        //click OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion
        await expect($('//*[@text="Add note"]')).toBeDisplayed();

        //click nav_menu
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //click Trash        
        await $('//*[@text="Trash Can"]').click();

        //assertion
        await expect($('//*[@text="Fav Anime List"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText(note);

        //failed assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText('dsfsf');
    });

});