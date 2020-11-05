import React, { useState, useEffect } from 'react';
// import firebase from './firebase';
import Navigation from './components/Navigation';
import Central from './components/Central';
import Map from './components/Map';

function App() {
  const [people, setPeople] = useState({});
  const [currentMap, setCurrentMap] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="App">
      hi
      <Navigation />
      <Central setPeople={setPeople} setCurrentMap={setCurrentMap} />
      <Map currentMap={currentMap} />
    </div>
  );
}

export default App;
