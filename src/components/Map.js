import React from 'react';

export default function Map({ currentMap }) {
  const grid = new Array(2500).fill('hi');
  const gridMap = grid.map((thing) => <div className="square" />);
  return (
    <div
      className="map"
      style={{ backgroundImage: `url(${currentMap})`, backgroundSize: 'cover' }}
    >
      <div className="container">{gridMap}</div>
    </div>
  );
}
