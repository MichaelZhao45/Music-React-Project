import React from 'react';

function Track({id, name, artist, album}) {
    return (
        <div>
        <li>
      <div><strong>Name:</strong> {name}</div>
      <div><strong>Artist:</strong> {artist}</div>
      <div><strong>Album:</strong> {album}</div>
        </li>
        </div>
    )
}

export default Track;
