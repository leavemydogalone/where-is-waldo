import React from 'react';

export default function Map({ currentMap }) {
  // make the array a state that gets filled when the component mounts. put a load thign.
  const grid = new Array(1000).fill('hi');
  const gridMap = grid.map((thing, index) => (
    <div className="square">{index}</div>
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
