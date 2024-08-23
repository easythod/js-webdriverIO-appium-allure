const ListScreen = require('../../screenobjects/ios/list.screen')

describe('Todo List', () => {
    it('Crate a Todo List', async () => {

        await ListScreen.createListBtn.click();

        await ListScreen.listNemaInput.addValue("Things to do today");

        await ListScreen.createBtn.click();

        await expect(await ListScreen.listNameFiels("Things to do today")).toBeExisting();

    });
});