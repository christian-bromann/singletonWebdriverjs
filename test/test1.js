var webdriverjs = require('webdriverjs'),
    assert      = require('assert');

describe('my webdriverjs tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(done){
        client = webdriverjs.remote({ singleton: true, desiredCapabilities: {browserName: 'chrome'} });
        client.init(done);
    });

    it('Github test',function(done) {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                assert(err === null);
                assert(result.height === 32);
                assert(result.width  === 89);
            })
            .getTitle(function(err, title) {
                assert(err === null);
                assert(title === 'GitHub · Build software better, together.');
            })
            .getCssProperty('a[href="/plans"]', 'color', function(err, result){
                assert(err === null);
                assert(result === 'rgba(65,131,196,1)');
            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
