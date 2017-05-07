"use strict"

describe('Paginate', function () {

    const unirest = require('unirest');
    const paginate = require('./paginate');

    it('puts offset and limit in request', function () {
        let request = unirest.get('http://domain.com');
        paginate(request, 20, 500);
        expect(request.options.url).toEqual('http://domain.com?offset=20&limit=500');
    });

    it('puts offset in request', function () {
        let request = unirest.get('http://domain.com');
        paginate(request, 20);
        expect(request.options.url).toEqual('http://domain.com?offset=20');
    });

});
