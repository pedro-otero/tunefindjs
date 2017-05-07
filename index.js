"use strict"

const unirest = require('unirest');
const authenticate = require('./src/authenticate');
const paginate = require('./src/paginate');
const createParams = require('./src/params');

let auth = {user: undefined, pass: undefined};
const apiConfig = require('./config/api.json');

exports.login = function (user, pass) {
    auth.user = user;
    auth.pass = pass;
};

function execute(request) {
    return function (resolve, reject) {
        request.end(function (response) {
            if (response.statusCode == 200) {
                resolve(response);
            } else {
                reject(response);
            }
        });
    }
}

function run(functionParams, endpoint) {
    let params = createParams(Array.prototype.slice.call(functionParams));
    params.path.unshift(endpoint);
    let request = unirest.get(apiConfig.base + params.path.join('/'));
    authenticate(request, auth.user, auth.pass);
    if (params.pagination) {
        paginate(request, params.pagination.offset, params.pagination.limit);
    }

    if (params.callback) {
        execute(request)(params.callback, params.callback);
    } else {
        return new Promise(execute(request));
    }
}

exports.getArtist = function (id, callback) {
    return run(arguments, 'artist')
};

exports.getArtists = function (offset, limit, callback) {
    return run(arguments, 'artist')
};

exports.getMovie = function (id, callback) {
    return run(arguments, 'movie')
};

exports.getMovies = function (offset, limit, callback) {
    return run(arguments, 'movie')
};

exports.getShow = function (id, season, episodeId, callback) {
    return run(arguments, 'show')
};

exports.getShows = function (offset, limit, callback) {
    return run(arguments, 'show')
};