import { useState } from 'react';
import { getLocations } from '../services/locations';

//This will indicate when to show/hide the loading spinner
let oldValue = '';

export default () => {
  const [value, changeValue] = useState('');
  const [matches, setMatches] = useState([]);

  //This is used to show/hide the suggestions on focus/blur
  //I use this flag because i do not want to make additional ajax request when the field is focused
  //The solution that i saw in www.rentalcars.com is that on blur suggestions array is deleted
  //On focus you make a request to get the new suggestions, but on focus action the input is the same
  //So there is no need to make duplicate request of the last one
  const [isOpen, setIsOpen] = useState(value.length > 1);

  const changeMatches = (newMatches, input) => {
    oldValue = input;
    setMatches(newMatches);
  };

  const handleChange = async ({ target: { value: input } }) => {
    changeValue(input);
    setIsOpen(input.length > 1);

    if (input.length > 1)
      try {
        const data = await getLocations(6, input);
        changeMatches(data, input);
      } catch (err) {
        if (err !== 'canceled') changeMatches([], input);
      }
    else changeMatches([], input);
  };

  return {
    locationInput: {
      value,
      onChange: handleChange,
      onBlur: () => setIsOpen(false),
      onFocus: () => setIsOpen(value.length > 1)
    },
    isOpen,
    matches,
    loading: value !== oldValue && value.length > 1
  };
};
