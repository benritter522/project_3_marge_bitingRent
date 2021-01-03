// // import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';


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
            <div className="indexPlants">
                {
                    plants.map(plant => {
                    return(
                        <div className="indexSinglePlant" key={plant._id}>
                            <Link   className="App-link" 
                                    plant={plant}
                                    to={`/plants/${plant._id}`}>
                                {/* <p className="indexPlantNickname">{plant.nickname}, the {plant.color} </p> */}
                                <p className="indexPlantName">{plant.name}</p>
                                <img className="indexPlantImg" src={plant.img}/>
                            </Link>
                            {/* <button onClick={
                                (event) => {
                                deletePlant(plant._id);
                                }
                            }>Delete {plant.name}</button> */}
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Plants;