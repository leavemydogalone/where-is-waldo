import React, { useEffect, useState } from 'react';
// import { setCharImgs } from '../firebase';
// put chars in map
export default function PopUp({ characters }) {
  // const [characters, setCharacters] = useState([
  //   { name: 'waldo', found: false, img: 'waldo.png', url: false },
  //   { name: 'wilma', found: false, img: 'woman.webp', url: false },
  //   { name: 'odlaw', found: false, img: 'odlaw.jpg', url: false },
  // ]);

  // function changeChars() {
  //   const newChars = characters
  //     .slice()
  //     .map((thing) => setCharImgs(thing, thing.img));

  //   setCharacters(newChars);
  // }

  const charImgs = characters
    ? characters.map((thing) => (
        <div>
          <img src={thing.url} alt="loading" />
          <br />
        </div>
      ))
    : 'loading';

  // useEffect(() => {
  //   changeChars();
  // }, []);

  return <div className="popUp">{charImgs}</div>;
}
