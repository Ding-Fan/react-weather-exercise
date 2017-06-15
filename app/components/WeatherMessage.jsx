// var React = require('react')

import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's {temp} in {location}. </h3>
  );
};

// module.exports = WeatherMessage;

export default WeatherMessage;
