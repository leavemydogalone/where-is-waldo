import React from 'react';
import { getPeople, getMap } from '../firebase';

export default function GameControl({ setPeople, setCurrentMap }) {
  function GameSet() {
    getPeople(setPeople, 'beach');
    getMap(setCurrentMap, 'waldo_medieval.jpeg');
  }

  return (
    <div>
      <button type="button" onClick={GameSet}>
        button
      </button>
    </div>
  );
}
