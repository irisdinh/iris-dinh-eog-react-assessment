import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useQuery,
  gql,
} from '@apollo/client';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const query = gql`
  query {
    scalar: getMetrics
  }
`;

/* eslint-disable react/jsx-props-no-spreading */

const SearchBar = () => {
  const { loading, error, data } = useQuery<any>(query, {
  });
  console.log(loading, error);
  const dispatch = useDispatch();
  const [chosenItems, setChosenItems] = useState([]);

  const handleSubmit = (option: any) => {
    dispatch({
      type: 'UPDATE_SEARCH_ITEM',
      searchItem: option,
    });
    setChosenItems(option);
  };

  return (
    <Autocomplete
      multiple
      value={chosenItems}
      onChange={(event, newValue) => handleSubmit(newValue)}
      options={data ? data.scalar : []}
      renderTags={(tagValue, getTagProps) => tagValue.map((option, index) => (
        <Chip
          label={option}
          {...getTagProps({ index })}
        />
      ))}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Fixed tag" placeholder="Favorites" />
      )}
    />
  );
};

export default SearchBar;
