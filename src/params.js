"use strict"

module.exports = function (args) {

    let result = {path: []};

    function addToPath(arg) {
        result.path.push(arg);
    }

    function addToPagination(arg) {
        if (!result.pagination) {
            result.pagination = {};
        }
        if (typeof result.pagination.offset === 'undefined') {
            result.pagination.offset = arg;
        } else {
            result.pagination.limit = arg;
        }
    }

    if (args) args.forEach(arg => {
        switch (typeof arg) {
            case 'string':
                addToPath(arg);
                break;
            case 'number':
                addToPagination(arg);
                break;
            case 'function':
                result.callback = arg;
                break;
        }
    });

    return result;
};