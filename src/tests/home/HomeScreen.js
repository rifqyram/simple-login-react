
describe('HomeScreen', () => {

    test('HomeScreen', (browser) => {
        browser
            .waitForElementVisible('body')
            .assert.titleContains('ReactApp')
    })
});