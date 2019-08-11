import React from 'react';
import DecadeSelector from './DecadeSelector';
import Comparison from './Comparison';
import BaseballField from './BaseballField';
import PlayerInfo from './PlayerInfo';

const BaseballApp = () => (
  <div>
    <DecadeSelector />
    <BaseballField />
    <PlayerInfo />
    <Comparison />
  </div>
);

export default BaseballApp;