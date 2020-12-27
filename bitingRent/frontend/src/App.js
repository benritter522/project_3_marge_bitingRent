import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [songs, setSongs] = useState([]);
  const [plants, setPlants] = useState([]);
  // const [token, setToken] = useState(''); // use for auth

  // ======================================================================================
  //                                  APP - SONGS
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

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

  // ======================================================================================
  //                                  APP - PLANTS
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


  // Read
  const fetchPlants = async () => {
    try {
      const response = await fetch('http://localhost:3000/plants');
      const data = await response.json();
      setPlants(data);
    } catch(error) {
      console.error(error); // {msg: error.message} ??
    }
  }

  // Delete
  const deletePlant = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/plants/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
      const data = await response.json();
      const filteredPlants = songs.filter(plant => plant._id !== data._id);
      setPlants(filteredPlants);
    } catch(error) {
      console.error(error);
    }
  }

  // Register
  // Login

  useEffect(() => {
    fetchSongs();
    fetchPlants();
  }, [songs, plants]);
  // ^ this is to make songs and plants update without refreshing
  // I did it right, yes?

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>hello world</h1> */}
        <h1>Songs</h1>
        <ul>
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
        <h1>Plants</h1>
        <ul>
          {
            plants.map(plant => {
              return(
                <li key={plant._id}>
                  <p>{plant.name} | {plant.color}</p>
                  <button onClick={
                    (event) => {
                      deletePlant(plant._id);
                    }
                  }>Delete {plant.name}</button>
                </li>
              )
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
