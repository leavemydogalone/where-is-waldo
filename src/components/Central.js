import React from 'react';
import GameControl from './GameControl';

export default function Central({ setPeople, setCurrentMap }) {
  return (
    <div className="central">
      <GameControl setPeople={setPeople} setCurrentMap={setCurrentMap} />
    </div>
  );
}
