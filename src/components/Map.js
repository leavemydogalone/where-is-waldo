import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Square from './Square';

export default function Map({ currentMap }) {
  // make the array a state that gets filled when the component mounts. put a load thign.

  const makeGrid = () => {
    const newG = [];
    for (let i = 0; i < 432; i += 1) {
      newG.push({ selected: false });
    }
    return newG;
  };
  const [grid, setGrid] = useState(makeGrid());

  function setSelected(target) {
    const newGrid = makeGrid();
    newGrid[parseInt(target.id, 10)].selected = true;
    setGrid(newGrid);
  }

  const gridMap = grid.map((thing, index) => (
    <Square
      key={uuidv4()}
      id={index}
      selected={thing.selected}
      setSelected={setSelected}
    />
  ));
  return (
    <div
      className="map"
      style={{ backgroundImage: `url(${currentMap})`, backgroundSize: 'cover' }}
    >
      <div className="container">{gridMap}</div>
    </div>
  );
}
