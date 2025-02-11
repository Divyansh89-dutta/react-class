import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [songs, setSongs] = useState([]);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <Form addSong={addSong} />

      {/* Song Cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
            <img
              src={song.poster}
              alt={song.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h2 className="text-lg font-semibold text-center mt-2">{song.name}</h2>
            <p className="text-center text-gray-500">Album: {song.album}</p>
            <p className="text-center text-gray-500">Singer: {song.singer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;