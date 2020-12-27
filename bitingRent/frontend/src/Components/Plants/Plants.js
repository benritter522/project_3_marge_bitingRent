// // import React from 'react';
import { useState, useEffect } from 'react';

const Plants = () => {
    const [plants, setPlants] = useState([]);

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
        const filteredPlants = plants.filter(plant => plant._id !== data._id);
        setPlants(filteredPlants);
        } catch(error) {
        console.error(error);
        }
    }

    useEffect(() => {
        fetchPlants();
    }, [plants]);

    return(
        <div>
            <h1>Plants</h1>
            <ul className="plants">
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
        </div>
    )
}

export default Plants;