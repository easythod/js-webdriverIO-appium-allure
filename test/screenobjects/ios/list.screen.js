class ListScreen {
    get createListBtn(){
        return $('//*[@name="Create list"]');
    }

    get listNemaInput(){
        return $('//*[@value="List Name"]');
    }

    get createBtn(){
        return $('~Create');
    }

    listNameFiels(name){
        return $(`~${name}`);
    }
}

module.exports = new ListScreen();
export default new ListScreen();