import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useSelector, useDispatch } from 'react-redux';
import { readDataOnInit } from '../actions';
import DecadeSelector from './DecadeSelector';
import Comparison from './Comparison';
import BaseballField from './BaseballField';
import PlayerInfo from './PlayerInfo';
import parseCSV from './parseCsv';

const BaseballApp = () => {

  useEffect(() => {
    const dispatch = useDispatch();
    d3.csv('../data/baseball.csv').then(data => {
      dispatch(readDataOnInit(data));
    });
  }, [])

  const decade = useSelector(state => state.filtersReducer.decade);
  return (
    <div>
      <DecadeSelector />
      <BaseballField />
      <PlayerInfo />
      <Comparison />
    </div>
  );
};

export default BaseballApp;