"use strict"

describe('TunefindJS', function () {

    const tunefind = require('./index');
    const apiKeys = require('./api-keys.json');
    tunefind.login(apiKeys.user, apiKeys.pass);
    const timeout = 10000;
    const Test = require('./test');

    describe("gets artists", function () {

        describe("as promises:", function () {
            it("all", function (finish) {
                new Test(tunefind.getArtists)
                    .withArgs([])
                    .expectingResponseToHave('artists')
                    .then(finish);
            }, timeout);
            it("all with offset", function (finish) {
                new Test(tunefind.getArtists)
                    .withArgs([10])
                    .expectingResponseToHave('artists')
                    .then(finish);
            }, timeout);
            it("all with offset and limit", function (finish) {
                new Test(tunefind.getArtists)
                    .withArgs([10, 50])
                    .expectingResponseToHave('artists')
                    .then(finish);
            }, timeout);
            it("by id", function (finish) {
                new Test(tunefind.getArtist)
                    .withArgs(['lady-gaga'])
                    .expectingResponseToHave('songs')
                    .then(finish);
            }, timeout);
        });

        describe("with callbacks:", function () {
            it("all", function (finish) {
                new Test(tunefind.getArtists)
                    .withArgs([])
                    .expectingResponseToHave('artists')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("all with offset", function (finish) {
                new Test(tunefind.getArtists)
                    .withArgs([10])
                    .expectingResponseToHave('artists')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("all with offset and limit", function (finish) {
                new Test(tunefind.getArtists)
                    .withArgs([10, 50])
                    .expectingResponseToHave('artists')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("by id", function (finish) {
                new Test(tunefind.getArtist)
                    .withArgs(['lady-gaga'])
                    .expectingResponseToHave('songs')
                    .withCallback()
                    .then(finish);
            }, timeout);
        });
    });

    describe("gets movies", function () {

        describe("as promises:", function () {
            it("all", function (finish) {
                new Test(tunefind.getMovies)
                    .withArgs([])
                    .expectingResponseToHave('movies')
                    .then(finish);
            }, timeout);
            it("all with offset", function (finish) {
                new Test(tunefind.getMovies)
                    .withArgs([10])
                    .expectingResponseToHave('movies')
                    .then(finish);
            }, timeout);
            it("all with offset and limit", function (finish) {
                new Test(tunefind.getMovies)
                    .withArgs([10, 50])
                    .expectingResponseToHave('movies')
                    .then(finish);
            }, timeout);
            it("by id", function (finish) {
                new Test(tunefind.getMovie)
                    .withArgs(['ghosts-of-girlfriends-past'])
                    .expectingResponseToHave('songs')
                    .then(finish);
            }, timeout);
        });

        describe("with callbacks:", function () {
            it("all", function (finish) {
                new Test(tunefind.getMovies)
                    .withArgs([])
                    .expectingResponseToHave('movies')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("all with offset", function (finish) {
                new Test(tunefind.getMovies)
                    .withArgs([10])
                    .expectingResponseToHave('movies')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("all with offset and limit", function (finish) {
                new Test(tunefind.getMovies)
                    .withArgs([10, 50])
                    .expectingResponseToHave('movies')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("by id", function (finish) {
                new Test(tunefind.getMovie)
                    .withArgs(['ghosts-of-girlfriends-past'])
                    .expectingResponseToHave('songs')
                    .withCallback()
                    .then(finish);
            }, timeout);
        });
    });

    describe("gets shows", function () {

        describe("as promises:", function () {
            it("all", function (finish) {
                new Test(tunefind.getShows)
                    .withArgs([])
                    .expectingResponseToHave('shows')
                    .then(finish);
            }, timeout);
            it("all with offset", function (finish) {
                new Test(tunefind.getShows)
                    .withArgs([10])
                    .expectingResponseToHave('shows')
                    .then(finish);
            }, timeout);
            it("all with offset and limit", function (finish) {
                new Test(tunefind.getShows)
                    .withArgs([10, 50])
                    .expectingResponseToHave('shows')
                    .then(finish);
            }, timeout);
            it("by id", function (finish) {
                new Test(tunefind.getShow)
                    .withArgs(['alias'])
                    .expectingResponseToHave('seasons')
                    .then(finish);
            }, timeout);
            it("season", function (finish) {
                new Test(tunefind.getShow)
                    .withArgs(['alias', 'season-1'])
                    .expectingResponseToHave('episodes')
                    .then(finish);
            }, timeout);
            it("episode", function (finish) {
                new Test(tunefind.getShow)
                    .withArgs(['alias', 'season-1', '286'])
                    .expectingResponseToHave('songs')
                    .then(finish);
            }, timeout);
        });

        describe("with callbacks:", function () {
            it("all", function (finish) {
                new Test(tunefind.getShows)
                    .withArgs([])
                    .expectingResponseToHave('shows')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("all with offset", function (finish) {
                new Test(tunefind.getShows)
                    .withArgs([10])
                    .expectingResponseToHave('shows')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("all with offset and limit", function (finish) {
                new Test(tunefind.getShows)
                    .withArgs([10, 50])
                    .expectingResponseToHave('shows')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("by id", function (finish) {
                new Test(tunefind.getShow)
                    .withArgs(['alias'])
                    .expectingResponseToHave('seasons')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("season", function (finish) {
                new Test(tunefind.getShow)
                    .withArgs(['alias', 'season-1'])
                    .expectingResponseToHave('episodes')
                    .withCallback()
                    .then(finish);
            }, timeout);
            it("episode", function (finish) {
                new Test(tunefind.getShow)
                    .withArgs(['alias', 'season-1', '286'])
                    .expectingResponseToHave('songs')
                    .withCallback()
                    .then(finish);
            }, timeout);
        });
    });

});