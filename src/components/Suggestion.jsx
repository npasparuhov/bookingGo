import React from 'react';
import PropTypes from 'prop-types';
import places from '../constants/TypeOfPlaces';

const formatLabel = (label, value) => label.split(value)
  .reduce((prev, current, i) => {
    if (!i) return [current];
    return prev.concat(<b key={value}>{value}</b>, current);
  }, []);

const Suggestion = ({
  input,
  name,
  placeType,
  country,
  region = null,
  city = null,
  isPopular }) =>
  (
    <div className='search-bar__suggestions-item'>
      <span
        className='badge'
        style={{ backgroundColor: places[placeType.toLowerCase()].color }}>
        {places[placeType.toLowerCase()].label}
      </span>
      <div className='info'>
        {formatLabel(name, input)}
        <span className='info__country'>{[country, region, city].filter(Boolean).join(', ')}</span>
      </div>
      {isPopular && <span className='popular'>Popular</span>}
    </div>
  );

Suggestion.propTypes = {
  input: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeType: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string,
  city: PropTypes.string,
  isPopular: PropTypes.bool,
};

export default Suggestion;

