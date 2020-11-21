const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ac4e8d3f338608900474f0852d6de0f0&query=' + latitude + ',' + longitude + '&units=f';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('error', undefined)
        } else if (response.body.error) {
            callback('error in response', undefined);
        } else {
            callback(undefined, {
                temp: response.body.current.temperature,
                weather_descriptions: response.body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast;