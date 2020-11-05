import React from 'react';
import GameControl from './GameControl';
import Map from './Map';

export default function Central({ setPeople, setCurrentMap, currentMap }) {
  return (
    <div className="central">
      <GameControl setPeople={setPeople} setCurrentMap={setCurrentMap} />
      {currentMap && <Map currentMap={currentMap} />}
    </div>
  );
}
