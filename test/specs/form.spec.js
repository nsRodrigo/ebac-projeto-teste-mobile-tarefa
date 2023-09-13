describe('Preencher formulário do App Wdio', () => {
    it('Deve acessar e preencher o formulário do campo Forms', async () => {
        console.log('Acessar página "Forms"');
        await $('~Forms').click();

        console.log('Preencher campo "Teste Ebac Shop"');
        await $('~text-input').setValue('Teste Ebac Shop');

        console.log('Validar texto "Teste Ebac Shop"');
        expect(await $('~input-text-result').getText()).toEqual('Teste Ebac Shop');

        console.log('Clicar no botão "Switch"');
        await $('~switch').click();

        console.log('Validar texto "Click to turn the switch OFF"');
        expect(await $('~switch-text').getText()).toEqual('Click to turn the switch OFF');

        console.log('Clicar no campo "Select an item..."');
        await $('android=new UiSelector().text("Select an item...")').click();

        console.log('Selecionar opção "webdriver.io is awesome"');
        await $('android=new UiSelector().text("webdriver.io is awesome")').click();

        console.log('Clicar no botão "Active"');
        await $('~button-Active').click();

        console.log('Validar texto "This button is active"');
        expect(await $('#message').getText()).toEqual('This button is active');

        console.log('Clicar no campo "OK"');
        await $('#button1').click();
    });
});