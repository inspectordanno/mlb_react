import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useSelector, useDispatch } from 'react-redux';
import { readData } from '../actions/actions';
import DecadeSelector from './DecadeSelector';
import Comparison from './Comparison';
import BaseballField from './BaseballField';
import PlayerInfo from './PlayerInfo';
import parseCSV from './parseCsv';

const BaseballApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    d3.csv('../data/baseball.csv').then(data => {
      dispatch(readData(data));
    });
  }, []);

  const decade = useSelector(state => state.filtersReducer.decade);


  return (
    <div>
      <DecadeSelector />
      <BaseballField decade={decade} />
      <PlayerInfo />
      <Comparison  />
    </div>
  );
};

export default BaseballApp;