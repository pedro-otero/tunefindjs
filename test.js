"use strict"

class Test {
    constructor(promise) {
        this.promise = promise;
    }

    withArgs(args) {
        this.functionParams = args;
        return this;
    }

    expectingResponseToHave(key) {
        this.key = key;
        return this;
    }

    withCallback() {
        this.withCallback = true;
        return this;
    }

    then(finish) {
        function checkKey(response) {
            expect(response.body[this.key]).toBeDefined();
            finish();
        }

        function onError(err) {
            expect(true).toBeFalsy(err.statusCode + ': ' + err.error.message);
            finish();
        }

        if (this.withCallback === true) {
            this.functionParams.push(checkKey.bind(this));
            this.promise.apply(null, this.functionParams);
        } else {
            var promise = this.promise.apply(null, this.functionParams);
            promise.then(checkKey.bind(this), onError);
        }
    }
}

module.exports = Test;
