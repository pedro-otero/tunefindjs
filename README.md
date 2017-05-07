# TunefindJS

TunefindJS is a Node.JS library that provides functions to access the [Tunefind][1] api.

## Usage

In the root of your Node project run `npm install tunefindjs`

Then just load the module as any other Node module in your code like this `const tunefind = require('tunefindjs')`

## Functions

### login(user, pwd)
Stores the API user and password in the module so all requests done by it have the authentication info in them. This is mandatory and you have to make sure this function is called before any actual request is done with this module. Otherwise you would get 401 errors. Check [Tunefind API developer site][1] to know how to get your keys.

### Endpoint functions

All endpoint functions have the following arguments, which have to be passed in this exact order:

- Strings: Arguments of the endpoint, such as ids.
- Pagination: Zero, one or two number arguments for pagination. If you pass only one, it will be treated as the offset. If you pass two, the second one is the limit.
- Callback: If you pass this argument, the function will call it whit the request results. If you don't pass it, the function returns a promise.

Pagination and callback are always optional. Strings may or may not be depending to the endpoint. If an argument is mandatory its name will appear **bold**. Some functions may not need pagination. For every function described below, the possible arguments are listed with it.

TunefindJS uses [unirest][5] to perform the HTTP requests. The responses you get from this module, either using callbacks or promises, are the exact responses you get from that library without any further processing.

Please check [Tunefind][1] site to know more about the endpoints.

#### getArtist(**id**, callback)
Gets the artist whose id is **id**

#### getArtists(offset, limit, callback)
Lists the artists in the database

#### getMovie(**id**, callback)
Gets the movie whose id is **id**

#### getMovies(offset, limit, callback)
Lists the movies in the database

#### getShow(**id**, season, episodeId, callback)
Gets info for a specific show, a season and an episode. The only mandatory argument is the id. However, if you want to get an episode or a season, the preceding arguments have to be set too. So, for example if you want to get the first season of the show *Alias*, you have to run the function like this:

`tunefind.getShow('alias', 'season-1')`

## Testing
TunefindJS uses [Jasmine][6] for testing. The `test` script runs all the tests, including integration tests. For the integration tests to run succesfully you need to provide your own API keys in a `api-keys.json` file in the root of the folder of this project. This file is already ignored in `.gitignore`.

## Author
Pedro Otero
[@pedro__otero][4]
[pedro.otero.prada@gmail.com][2]
[LinkedIn][3]

[1]: https://www.tunefind.com/api
[2]: mailto:pedro.otero.prada@gmail.com
[3]: co.linkedin.com/in/pedrooteroprada
[4]: twitter.com/pedro__otero
[5]: https://github.com/Mashape/unirest-nodejs
[6]: https://jasmine.github.io/