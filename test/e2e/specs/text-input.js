module.exports = {
  'test error disapear after value change': function (browser) {
    var devServer = browser.globals.devServerURL

    browser
    .url(devServer)
      .waitForElementVisible('.app-screen', 5000)
      .assert.elementPresent('#text-input-error')
      .assert.cssClassPresent('#text-input-error', 'has-error')
      .setValue('#text-input-error input[type=text]', 'foo')
      .assert.cssClassNotPresent('#text-input-error', 'has-error')
      .assert.elementNotPresent('#text-input-error > .help-block')
      .end()
  },

  'test disabled input': function (browser) {
    var devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.app-screen', 5000)

    browser.expect.element('#text-input-disabled input[type=text]').to.have.attribute('disabled')

    browser.end()
  },

  'test group inputs': function (browser) {
    var devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.app-screen', 5000)
      .assert.elementPresent('#text-input-group-left > .input-group > .input-group-addon:first-child')
      .assert.elementPresent('#text-input-group-right > .input-group > .input-group-addon:last-child')

    browser.end()
  }
}
