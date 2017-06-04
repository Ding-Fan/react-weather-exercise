var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=6ec4731c34afd7c7f1b8b787eba9a2da&units=metric';

//

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.list.length) {
        return res.data.list[0].main.temp;
      } else {
        throw new Error(res.data.message);
      }
    }, function () {
      throw new Error('Unable to fetch weather.');
    });
  }
};