import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleSubmit = (event: any) => {
    dispatch({
      type: 'UPDATE_SEARCH_ITEM',
      searchItem: event.value,
    });
    setInput(event.value);
  };

  return (
    <input
      value={input}
      placeholder='Search Here'
      onChange={(e) => handleSubmit(e.target)}
    />
  );
};

export default SearchBar;
