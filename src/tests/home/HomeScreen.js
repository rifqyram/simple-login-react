
describe('HomeScreen', () => {

    before(browser => browser.navigateTo('/'))

    test('HomeScreen', (browser) => {
        browser
            .waitForElementVisible('body')
            .setValue('input[type=email]', 'rifqyomp@gmail.com')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'P@ssw0rd')
            .click('button[type=submit]')
            .assert.textContains('h1', 'Welcome rifqyomp@gmail.com')
    })
});