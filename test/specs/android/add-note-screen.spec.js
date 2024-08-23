const AddNoteScreen = require("../../screenobjects/android/add-note.screen");
const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe('Add Notes', () => {

    it('skip tutorial', async () => {

        // click Skip 
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();

    });

    it('add a note, save changes & verify note', async () => {

        await AddNoteScreen.addNoteTxt.click();

        await AddNoteScreen.noteTxt.click();

        await expect(AddNoteScreen.noteEditing).toBeDisplayed();

        //add note title
        await AddNoteScreen.addNoteTitle.setValue("Fav Anime List");
        // await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");

        //add note body
        
        await AddNoteScreen.addNoteBody.addValue("Naruto\nOne Piace\nAOT");
        
        //save the changes
        await AddNoteScreen.saveNote();

        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOne Piace\nAOT");

        await driver.pause(3000);
    });

    it('Delete a note', async () => {

        await EditNoteScreen.backStep();

        const note = await(EditNoteScreen.noteTitle).getText();

        //click note
        await(EditNoteScreen.noteTitle).click();

        //click menu
        await EditNoteScreen.menuBtn.click();

        //click Delete
        await EditNoteScreen.deleteBtn.click();

        //click OK button
        await EditNoteScreen.okBtn.click();

        //assertion
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();

        //click nav_menu
        await EditNoteScreen.navMenu.click();

        //click Trash        
        await EditNoteScreen.trash.click();

        //assertion
        await expect($('//*[@text="Fav Anime List"]')).toBeDisplayed();

        await expect(EditNoteScreen.noteTitle).toHaveText(note);

        //failed assertion
        await expect(EditNoteScreen.noteTitle).toHaveText("error");

    });

});