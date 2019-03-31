import { useState } from 'react';
import { getLocations } from '../services/locations';

export default () => {
  const [value, changeValue] = useState('');
  const [matches, setMatches] = useState([]);
  const [isOpen, setIsOpen] = useState(value.length > 1);

  const handleChange = async ({ target: { value: input } }) => {
    changeValue(input);
    setIsOpen(input.length > 1);
    if (input.length > 1)
      try {
        const data = await getLocations(6, input);
        setMatches(data);
      } catch (err) {
        if (err !== 'canceled') setMatches({ error: err });
      }
  };

  return {
    locationInput: {
      value,
      onChange: handleChange,
      onBlur: () => setIsOpen(false),
      onFocus: () => setIsOpen(value.length > 1)
    },
    isOpen,
    matches
  };
};
