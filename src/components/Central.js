import React, { useState } from 'react';
import GameControl from './GameControl';
import Map from './Map';

export default function Central({ setPeople, setCurrentMap, currentMap }) {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="central">
      <GameControl setPeople={setPeople} setCurrentMap={setCurrentMap} />
      {currentMap && <Map currentMap={currentMap} />}
    </div>
  );
}
