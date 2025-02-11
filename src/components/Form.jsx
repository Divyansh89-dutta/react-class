import React, { useState } from 'react';

function Form({ addSong }) {
  const [formData, setFormData] = useState({ name: '', album: '', singer: '', poster: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedData = {
      name: formData.name.trim(),
      album: formData.album.trim(),
      singer: formData.singer.trim(),
      poster: formData.poster.trim(),
    };

    if (!trimmedData.name || !trimmedData.album || !trimmedData.singer || !trimmedData.poster) {
      alert('All fields are required!');
      return;
    }

    addSong(trimmedData);
    setFormData({ name: '', album: '', singer: '', poster: '' });
  };

  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
        <input
          className="rounded-md px-3 py-2 text-base font-semibold outline-none border border-gray-300 focus:ring-2 focus:ring-sky-400"
          type="text"
          placeholder="Song Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-3 py-2 text-base font-semibold outline-none border border-gray-300 focus:ring-2 focus:ring-sky-400"
          type="text"
          placeholder="Album"
          name="album"
          value={formData.album}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-3 py-2 text-base font-semibold outline-none border border-gray-300 focus:ring-2 focus:ring-sky-400"
          type="text"
          placeholder="Singer"
          name="singer"
          value={formData.singer}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-3 py-2 text-base font-semibold outline-none border border-gray-300 focus:ring-2 focus:ring-sky-400"
          type="text"
          placeholder="Poster URL"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
        />
        <button
          className="px-4 py-2 rounded-md bg-sky-400 text-white font-semibold hover:bg-sky-500 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;