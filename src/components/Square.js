import React, { useState } from 'react';
import PopUp from './PopUp';

export default function Square({ id, setSelected, selected }) {
  const [children, setChildren] = useState([]);

  function handleClick(event) {
    setChildren([...children, <PopUp />]);
    setSelected(event.target);
  }

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
