import React from 'react';
import { useSelector } from 'react-redux';
import DecadeSelector from './DecadeSelector';
import Comparison from './Comparison';
import BaseballField from './BaseballField';
import PlayerInfo from './PlayerInfo';

const BaseballApp = () => {
  const decade = useSelector(state => state.filtersReducer.decade);
  console.log(decade);

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