describe('RegisterScreen', () => {

    before(browser => browser.navigateTo('/register'))

    it('Should Register Successfully', (browser) => {
        browser
            .waitForElementVisible('body')
            .assert.visible('input[type=email]')
            .setValue('input[type=email]', 'test@gmail.com')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'password')
            .click('button[type=submit]')
            .back()
    });

    it('Should Show Error Message Field Required', (browser) => {
        browser
            .waitForElementVisible('body')
            .assert.visible('input[type=email]')
            .click('button[type=submit]')
            .assert.visible('.error-message', 'password: Password is required, email: Email is required')
    });

    after(browser => browser.end())
});