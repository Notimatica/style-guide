module.exports = {
  'test example page': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    var devServer = browser.globals.devServerURL

    browser
    .url(devServer)
      .waitForElementVisible('.app-screen', 5000)
      .assert.elementPresent('.navbar-brand img')
      .assert.containsText('h1', 'Main heading')
      .assert.containsText('.footer', 'Notimatica')
      .end()
  }
}
