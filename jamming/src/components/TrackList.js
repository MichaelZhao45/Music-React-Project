import React from 'react';
import Track from './Track'

function TrackList(props) {
    return (
        <div>
            {props.tracks.map(track => (
        <Track 
          id={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
        />
      ))}
        </div>
    );
}

export default TrackList;