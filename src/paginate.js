"use strict"

module.exports = function (request, offset, limit) {
    let query = {offset};
    if (limit) query.limit = limit;
    request.query(query);
}