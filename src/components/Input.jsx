import React from 'react';
import PropTypes from 'prop-types';

const InputWithLabelAndLoader = ({ loading, label, inputProps }) => (
  <>
    <label className='search-bar__label' htmlFor={inputProps.id}>{label}</label>
    {loading && <div className='loader' />}
    <input
      { ...inputProps }
      className='search-bar__field'
      placeholder='city, airport, station, region, district...' />
  </>
);

InputWithLabelAndLoader.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  inputProps: PropTypes.object,
};

export default InputWithLabelAndLoader;
