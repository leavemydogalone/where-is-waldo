import React, { useState, useEffect } from 'react';
import GameControl from './GameControl';
import Map from './Map';
import { setCharImgs } from '../firebase';

export default function Central({ setPeople, setCurrentMap, currentMap }) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([
    { name: 'waldo', found: false, img: 'waldo.png', url: false },
    { name: 'wilma', found: false, img: 'woman.webp', url: false },
    { name: 'odlaw', found: false, img: 'odlaw.jpg', url: false },
  ]);
  function changeChars() {
    const newChars = characters
      .slice()
      .map((thing) => setCharImgs(thing, thing.img));

    setCharacters(newChars);
  }
  useEffect(() => {
    changeChars();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="central">
      <GameControl setPeople={setPeople} setCurrentMap={setCurrentMap} />
      {currentMap && <Map currentMap={currentMap} characters={characters} />}
    </div>
  );
}
