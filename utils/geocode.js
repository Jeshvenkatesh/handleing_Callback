const request = require('request');

const gencode = (address, callback) => {

    const genoUrl ="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiamVzaHZlbmthdGVzaCIsImEiOiJja2hxNWwyOXkwaDl1MnNyc2V1aGxiOTlwIn0.LA5ZBYJ3TR9VF5qENvzw2g"
    request({ url: genoUrl, json: true }, (error, response) => {
        if (error) {
            callback('error', undefined)
        } else if (response.body.features.length === 0) {
            callback("Error in response", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place_name: response.body.features[0].place_name
            })
        }
    });
}

module.exports = gencode;