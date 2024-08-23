class EditNoteScreen {
    
    get noteTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get menuBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }

    get deleteBtn(){
        return $('//*[@text="Delete"]');
    }

    get okBtn(){
        return $('//*[@resource-id="android:id/button1"]');
    }

    get navMenu(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trash(){
        return $('//*[@text="Trash Can"]');
    }
    
    async backStep(){
        await driver.back();
    }
}

module.exports = new EditNoteScreen();