var webdriverjs = require('webdriverjs');

h = {
    setup: (function() {
        var client;

        return function() {

            if (client) {
                this.client = client;
            } else {
                this.client = client = new webdriverjs({ singleton: true, logLevel: 'command', desiredCapabilities: {browserName: 'phantomjs'} }).init();
            }

        };
    })()
};