import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useQuery,
  gql,
} from '@apollo/client';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './graph.css';

const query = gql`
  query {
    scalar: getMetrics
  }
`;

/* eslint-disable react/jsx-props-no-spreading */

const SearchBar = () => {
  const { loading, error, data } = useQuery<any>(query, {
  });
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
      className="searchField"
      onChange={(event, newValue) => handleSubmit(newValue)}
      options={data ? data.scalar : []}
      disabled={loading || error}
      renderTags={(tagValue, getTagProps) => tagValue.map((option, index) => (
        <Chip
          label={option}
          {...getTagProps({ index })}
        />
      ))}
      style={{ width: 1000 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Search Here" />
      )}
    />
  );
};

export default SearchBar;
