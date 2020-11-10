import React from 'react';
import { getPeople, getMap } from '../firebase';

export default function GameControl({ setPeople, setCurrentMap }) {
  function GameSet() {
    getPeople(setPeople, 'ski');
    getMap(setCurrentMap, 'waldo_ski.jpg');
  }

  return (
    <div>
      <button type="button" onClick={GameSet}>
        button
      </button>
    </div>
  );
}
