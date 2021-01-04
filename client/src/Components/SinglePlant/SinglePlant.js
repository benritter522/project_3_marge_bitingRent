// import React from 'react';
import { useState, useEffect } from 'react';

const SinglePlant = (props) => {
    const [singlePlant, setSinglePlant] = useState({});

    // Read
    const fetchSinglePlant = async () => {
        try {
            const response = await fetch(`http://localhost:3000/plants/${props.id}`);
            const data = await response.json();
            setSinglePlant(data);
        } catch(error) {
            console.error(error); // {msg: error.message} ??
        }
    }

    useEffect(() => {
        fetchSinglePlant();
        console.log('use effect running');
    }, []);


    console.log(props);
    return (
        <div>
            <h1>hello plant</h1>
            {/* <h2>{props.routerProps}</h2> */}



            {/* <h2>{plant.nickname} the</h2>
            <h2>{plant.name}</h2>
            <h2>{plant.latinName}</h2>
            <br/><br/>
            <img src={plant.img} className="showImg"/>
            <br/><br/>
            <h2>Origin: {plant.origin}</h2>
            <h2>Description: {plant.description}</h2> */}
            
        </div>
    )
}

export default SinglePlant;