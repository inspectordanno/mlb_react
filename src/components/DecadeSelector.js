import React from 'react';
import { useDispatch } from 'react-redux';
import { setDecadeFilter } from '../actions/filter';
import Select from 'react-select';

const DecadeSelector = (props) => {

  const dispatch = useDispatch();

  const dispatchDecade = (decade) => {
      dispatch(setDecadeFilter(decade.value));
      console.log(decade.value);
  }

  const decades = [
    '1910s',
    '1920s',
    '1930s',
    '1940s',
    '1950s',
    '1960s',
    '1970s',
    '1980s',
    '1990s',
    '2000s'
  ];

  const logValue = ({ value }) => {
    console.log(value);
  }

  return (
    <Select 
      options={decades.map(decade => {
        return {
          value: decade, 
          label: decade
        }; 
      })}
      onChange={dispatchDecade}
    />
  );
}
 

export default DecadeSelector;