describe('LoginScreen', () => {

    before(browser => browser.navigateTo('/login'))

    it('Should Login Successfully', (browser) => {
        browser
            .waitForElementVisible('body')
            .assert.visible('input[type=email]')
            .setValue('input[type=email]', 'rifqyomp@gmail.com')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'P@ssw0rd')
            .click('button[type=submit]')
            .assert.textContains('h1', 'Welcome rifqyomp@gmail.com')
            .click('button')
    });

    it('Should Show Error Message Field Required', (browser) => {
        browser
            .waitForElementVisible('body')
            .assert.visible('input[type=email]')
            .click('button[type=submit]')
            .assert.visible('.error-message', 'password: Password is required, email: Email is required')
    });

    it('Should Show Error Unauthorized', (browser) => {
        browser
            .waitForElementVisible('body')
            .setValue('input[type=email]', 'test@gmail.com')
            .setValue('input[type=password]', 'P@ssw0rd')
            .click('button[type=submit]')
            .assert.visible('.error-message', 'Error: Unauthorized')
    });

    after(browser => browser.end())
});