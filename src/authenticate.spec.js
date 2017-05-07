"use strict"

describe('authenticate module', function () {

    it('puts authentication headers in the request', function () {
        const unirest = require('unirest');
        const authenticate = require('./authenticate');
        let request = unirest.get('http://www.google.com');

        authenticate(request, 'anyuser', 'anypwd');

        expect(request.options.auth.user).toEqual('anyuser');
        expect(request.options.auth.pass).toEqual('anypwd');
    });

});