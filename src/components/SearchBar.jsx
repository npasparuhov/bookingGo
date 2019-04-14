import React from 'react';
import Suggestion from './Suggestion';
import useSearchBar from '../customHooks/SearchBar';
import Input from './Input';
import './styles.scss';

const SearchBar = () => {
  const pickUpLocation = useSearchBar();
  // const dropLocation = new useSearchBar();

  return (
    <div className='search-bar' tabIndex="1" onBlur={pickUpLocation.onBlur}>
      <Input
        loading={pickUpLocation.loading}
        label='Pick-up Location'
        inputProps={{
          id: 'PickUp',
          autoFocus: true,
          ...pickUpLocation.locationInput
        }}
      />
      {pickUpLocation.isOpen && !pickUpLocation.loading && (
        <div className='search-bar__suggestions'>
          {pickUpLocation.matches.length ?
            pickUpLocation.matches.map((el, i) =>
              <Suggestion
                key={el.ufi + i}
                {...el}
                onSelect={pickUpLocation.onSelect}
                input={pickUpLocation.locationInput.value} />) :
            <div className='search-bar__no-results'>No results found</div>}
        </div>)}
      {/* <Input
        loading={dropLocation.loading}
        label='Drop Location'
        inputProps={{
          id: 'Drop',
          ...dropLocation.locationInput
        }}
      />
      {dropLocation.isOpen && !dropLocation.loading && (
        <div className='search-bar__suggestions'>
          {dropLocation.matches.length ?
            dropLocation.matches.map(el => <Suggestion key={el.ufi} {...el} input={dropLocation.locationInput.value} />) :
            <div className='search-bar__no-results'>No results found</div>}
        </div>)} */}
    </div>
  );
};

export default SearchBar;
