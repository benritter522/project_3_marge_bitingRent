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
    }, []);
    
    // useEffect(() => {
    //     fetchPlants();
    // }, [plants]);

    return(
        <div>
            <h1>Plants</h1>
            <ul className="indexPlants">
                {
                    plants.map(plant => {
                    return(
                        <li className="indexSinglePlant" key={plant._id}>
                        {/* link to show page */}
                        <p>{plant.name} | {plant.color}</p>
                        <p className="indexPlantNickname">{plant.nickname} the </p>
                        <p className="indexPlantName">{plant.name}</p>
                        <img className="indexPlantImg" src={plant.img}/>


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