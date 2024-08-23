// const ListScreen = require('../../screenobjects/ios/list.screen')
// const ItemScreen = require('../../screenobjects/ios/item.screen')
import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo List', () => {

    before( async () => {

         //Crate a Todo List
         await ListScreen.createListBtn.click();

         await ListScreen.listNemaInput.addValue("Things to do today");
 
         await ListScreen.createBtn.click();
 
         await expect(await ListScreen.listNameFiels("Things to do today")).toBeExisting();

         await ListScreen.listNameFiels("Things to do today").click();

    });

    // beforeEach(() => {
    //     console.log('BEFORE EACH HOOK')
    // });

    // after(() => {
    //     console.log('AFTER HOOK')
    // });

    // afterEach(() => {
    //     console.log('AFTER EACH HOOK')
    // });

    it('Crate a Todo Item', async () => {

        // //Crate a Todo List
        // await ListScreen.createListBtn.click();
        // await ListScreen.listNemaInput.addValue("Things to do today");
        // await ListScreen.createBtn.click();
        // await expect(await ListScreen.listNameFiels("Things to do today")).toBeExisting();


        //Create Todo Item

        await ItemScreen.createItemBtn.click();

        await ItemScreen.itemTitleInput.addValue("Buy groceries");

        await ItemScreen.itemDueInput.click();

        await ItemScreen.calendarBtn.click();

        await ItemScreen.getByAccessibility("Thursday, January 12").click();

        await ItemScreen.mainWindow.click();

        await ItemScreen.createBtn.click();

        //assertion
        await expect(await ItemScreen.getByAccessibility("Buy groceries")).toBeExisting();

        await expect(await ItemScreen.getByAccessibility("Due January 12, 2023")).toBeExisting();

        // //pause 3s
        // await driver.pause(3000);

    });

    after( async () => {

         //pause 3s
         await driver.pause(3000);

    });
});