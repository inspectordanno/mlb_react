import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useSelector, useDispatch, useCallback } from 'react-redux';
import { readData } from '../actions/actions';
import DecadeSelector from './DecadeSelector';
import Comparison from './Comparison';
import BaseballField from './BaseballField';
import PlayerInfo from './PlayerInfo';
import parseCSV from './parseCsv';

const BaseballApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await d3.csv('./data/baseball.csv');
      dispatch(readData(data));
    }
    fetchData();
  }, []);

  const decade = useSelector(state => state.decade);

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