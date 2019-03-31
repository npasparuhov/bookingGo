import React from 'react';
import PropTypes from 'prop-types';
import places from '../constants/TypeOfPlaces';

const Suggestion = ({ name, placeType, country }) => (
  <div className='search-bar__suggestions-item'>
    <span
      className='badge'
      style={{ backgroundColor: places[placeType.toLowerCase()].color }}>
      {places[placeType.toLowerCase()].label}
    </span>
    <div className='info'>
      {name}
      <span className='info__country'>{country}</span>
    </div>
  </div>
);

Suggestion.propTypes = {
  name: PropTypes.string.isRequired,
  placeType: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Suggestion;

