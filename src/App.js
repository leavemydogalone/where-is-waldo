import React, { useState, useEffect } from 'react';
import firebase from './firebase';

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('People');
  console.log(ref);

  function getPeople() {
    setLoading(true);
    ref.onSnapshot((querySnapShot) => {
      const items = [];
      querySnapShot.forEach((doc) => {
        items.push(doc.data());
      });
      setPeople(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPeople();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="App">
      hi
      {people.map((person, index) => (
        <div key={index}>
          <h2>{person.name}</h2>
          <p>{person.location.join(' ')}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
