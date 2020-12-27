// import React from 'react';
import { useEffect, useState } from "react";

const Songs = () => {
    const [songs, setSongs] = useState([]);

    // Read
    const fetchSongs = async () => {
        try {
        const response = await fetch('http://localhost:3000/songs');
        const data = await response.json();
        setSongs(data);
        } catch(error) {
        console.error(error); // {msg: error.message} ??
        }
    }

    // Delete
    const deleteSong = async (id) => {
        try {
        const response = await fetch(`http://localhost:3000/songs/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        const filteredSongs = songs.filter(song => song._id !== data._id);
        setSongs(filteredSongs);
        } catch(error) {
        console.error(error);
        }
    }

    useEffect(() => {
        fetchSongs();
    }, [songs]);

    return(
        <div>
            <h1>Songs</h1>
            <ul className="songs">
                {
                    songs.map(song => {
                    return(
                        <li key={song._id}>
                        <p>Title: {song.title}</p>
                        <p>Lyrics: {song.lyrics}</p>
                        <button onClick={
                            (event) => {
                            deleteSong(song._id);
                            }
                        }>Delete {song.title}</button>
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}

export default Songs;