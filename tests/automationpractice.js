module.exports = {
    'Automation Practice' : function (client) {
        client
			.maximizeWindow()
            .url('http://automationpractice.com/index.php')
            .waitForElementVisible('header', 1000)
			.waitForElementVisible('body', 1000)
			.waitForElementVisible('footer', 1000)
            .assert.title('My Store')
            .waitForElementVisible('#search_query_top', 1000)
            .setValue('#search_query_top', 'Shirts')
            .submitForm('#search_query_top')
            .assert.containsText('#center_column > h1 > span:nth-child(2)', '1 result has been found.')
            .end();
    }
};