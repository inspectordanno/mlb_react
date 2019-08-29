import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useSelector, useDispatch } from 'react-redux';
import { readData } from '../actions/actions';
import DecadeSelector from './DecadeSelector';
import Comparison from './Comparison';
import BaseballField from './BaseballField';
import PlayerInfo from './PlayerInfo';

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
  const data = useSelector(state => state.data)

  return data //only return when data is sent to store
    ? (
      <div>
        <DecadeSelector />
        <BaseballField decade={decade} />
        <PlayerInfo />
        <Comparison  />
      </div>
    )
    : null
};

export default BaseballApp;