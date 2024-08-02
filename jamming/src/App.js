import React, { useState } from 'react';
import TrackList from "./components/TrackList";
import Track from "./components/Track";

function App() {

  const [tracks] = useState([
    {"id": 1, "name": "BLUE", "artist": "Billie Eilish", "album": "HIT ME HARD AND SOFT" }, 
    {"id": 2, "name": "Gone", "artist": "Rose", "album": "R" },
    {"id": 3, "name": "Happening Again", "artist": "Katherine Li", "album": "Happening Again" }
  ])

  return (
    <div>
      <ul>
        <TrackList tracks={tracks} />
      </ul>
    </div>
  )}

export default App;
