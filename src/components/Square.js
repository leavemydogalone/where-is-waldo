import React, { useState, useEffect } from 'react';
import PopUp from './PopUp';

export default function Square({ id, setSelected, selected, characters }) {
  const [children, setChildren] = useState([]);

  function handleClick(event) {
    if (event.target.id) {
      setSelected(event.target);
    }
  }
  useEffect(() => {
    if (selected) setChildren([<PopUp characters={characters} />]);
  }, [selected]);

  return (
    <div
      className="square"
      id={id}
      onClick={handleClick}
      onKeyDown={handleClick}
      tabIndex={id}
      role="button"
      aria-label={id}
      style={
        selected
          ? {
              webKitBoxShadow: 'inset 0px 0px 0px 2px #f00',
              MozBoxShadow: 'inset 0px 0px 0px 2px #f00',
              boxShadow: 'inset 0px 0px 0px 2px #f00',
            }
          : null
      }
    >
      {children.map((child) => child)}
    </div>
  );
}
