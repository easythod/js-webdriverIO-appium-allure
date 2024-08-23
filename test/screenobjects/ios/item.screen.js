class ItemScreen {
    
    get createItemBtn(){
        return $('//*[@name="Create item"]');
    }

    get itemTitleInput(){
        return $('//*[@value="Title"]');
    }

    get itemDueInput(){
        return $('//*[@value="Due"]');
    }

    get calendarBtn(){
        return $('~Date Picker');
    }

    getByAccessibility(name){
        return $(`~${name}`);
    }

    get mainWindow(){
        return $('//XCUIElementTypeWindow[@index=2]');
    }

    get createBtn(){
        return $('~Create');
    }

}

module.exports = new ItemScreen();
export default new ItemScreen();