"use strict"

describe('Request factory', function () {

    const createParams = require('./params');

    describe("No args", function () {

        let params = createParams();

        it(".callback is undefined", function () {
            expect(params.callback).toBeUndefined();
        });
        it(".pagination is undefined", function () {
            expect(params.pagination).toBeUndefined();
        });
        it(".path is empty", function () {
            expect(params.path).toEqual([]);
        });

    });

    describe("Empty args array", function () {

        let params = createParams([]);

        it(".callback is undefined", function () {
            expect(params.callback).toBeUndefined();
        });
        it(".pagination is undefined", function () {
            expect(params.pagination).toBeUndefined();
        });
        it(".path is empty", function () {
            expect(params.path).toEqual([]);
        });

    });

    describe("Only strings", function () {

        let params = createParams(['arg1', 'arg2', 'arg3']);

        it(".callback is undefined", function () {
            expect(params.callback).toBeUndefined();
        });
        it(".pagination is undefined", function () {
            expect(params.pagination).toBeUndefined();
        });
        it(".path has all the string params", function () {
            expect(params.path).toEqual(['arg1', 'arg2', 'arg3']);
        });

    });

    describe("Strings and pagination", function () {

        let params = createParams(['arg1', 'arg2', 'arg3', 10, 50]);

        it(".callback is undefined", function () {
            expect(params.callback).toBeUndefined();
        });
        it(".pagination has offset and limit", function () {
            expect(params.pagination).toEqual({offset: 10, limit: 50});
        });
        it(".path has all the string arguments", function () {
            expect(params.path).toEqual(['arg1', 'arg2', 'arg3']);
        });

    });

    describe("Strings, pagination and callback", function () {

        function cb() {
        }

        let params = createParams(['arg1', 'arg2', 'arg3', 10, 50, cb]);

        it(".callback is a function", function () {
            expect(params.callback).toEqual(cb);
        });
        it(".pagination has offset and limit", function () {
            expect(params.pagination).toEqual({offset: 10, limit: 50});
        });
        it(".path has all the string arguments", function () {
            expect(params.path).toEqual(['arg1', 'arg2', 'arg3']);
        });

    });

    describe("Pagination and callback", function () {

        function cb() {
        }

        let params = createParams([0, 50, cb]);

        it(".callback is a function", function () {
            expect(params.callback).toEqual(cb);
        });
        it(".pagination has offset and limit", function () {
            expect(params.pagination).toEqual({offset: 0, limit: 50});
        });
        it(".path is empty", function () {
            expect(params.path).toEqual([]);
        });

    });

    describe("Strings and callback", function () {

        function cb() {
        }

        let params = createParams(['arg1', 'arg2', 'arg3', cb]);

        it(".callback is a function", function () {
            expect(params.callback).toEqual(cb);
        });
        it(".pagination is undefined", function () {
            expect(params.pagination).toBeUndefined();
        });
        it(".path has all the string arguments", function () {
            expect(params.path).toEqual(['arg1', 'arg2', 'arg3']);
        });

    });

    describe("One number", function () {

        let params = createParams([10]);

        it(".callback is undefined", function () {
            expect(params.callback).toBeUndefined();
        });
        it(".pagination has offset only", function () {
            expect(params.pagination).toEqual({offset: 10});
        });
        it(".path is empty", function () {
            expect(params.path).toEqual([]);
        });

    });

    describe("Just the callback", function () {

        let params = createParams([function () {
        }]);

        it(".callback is a function", function () {
            expect(typeof params.callback).toEqual('function');
        });
        it(".pagination is undefined", function () {
            expect(params.pagination).toBeUndefined();
        });
        it(".path is empty", function () {
            expect(params.path).toEqual([]);
        });

    });

    describe("One number and the callback", function () {

        let params = createParams([10, function () {
        }]);

        it(".callback is a function", function () {
            expect(typeof params.callback).toEqual('function');
        });
        it(".pagination has only offset", function () {
            expect(params.pagination).toEqual({offset: 10});
        });
        it(".path is empty", function () {
            expect(params.path).toEqual([]);
        });

    });

    describe("One string and the callback", function () {

        let params = createParams(['arg1', function () {
        }]);

        it(".callback is a function", function () {
            expect(typeof params.callback).toEqual('function');
        });
        it(".pagination is undefined", function () {
            expect(params.pagination).toBeUndefined();
        });
        it(".path has the string", function () {
            expect(params.path).toEqual(['arg1']);
        });

    });

});
