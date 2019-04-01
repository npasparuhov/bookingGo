import React from 'react';
import Suggestion from './Suggestion';
import useSearchBar from '../customHooks/SearchBar';
import './styles.scss';

const SearchBar = () => {
  const { locationInput, isOpen, matches, loading } = useSearchBar();
  return (
    <div className='search-bar'>
      <label className='search-bar__label'>Pick-up Location</label>
      {loading && <div className='loader' />}
      <input
        {...locationInput}
        className='search-bar__field'
        placeholder='city, airport, station, region, district...' />
      {isOpen && !loading && (
        <div className='search-bar__suggestions'>
          {matches.length ?
            matches.map(el => <Suggestion key={el.id} {...el} input={locationInput.value} />) :
            <div className='search-bar__no-results'>No results found</div>}
        </div>)}
    </div>
  );
};

export default SearchBar;
