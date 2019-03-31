import React from 'react';
import Suggestion from './Suggestion';
import useSearchBar from '../customHooks/SearchBar';
import './styles.scss';

const SearchBar = () => {
  const { locationInput, isOpen, matches } = useSearchBar();

  return (
    <div className='search-bar'>
      <label className='search-bar__label'>Pick-up Location</label>
      <input
        {...locationInput}
        className='search-bar__field'
        placeholder='city, airport, station, region, district...' />
      {isOpen && matches.length ? (
        <div className='search-bar__suggestions'>
          {matches.map(el => <Suggestion key={el.id} {...el} />)}
        </div>) :
        null}
    </div>
  );
};

export default SearchBar;
