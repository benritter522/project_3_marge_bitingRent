const SinglePlant = (props) => {
    plant = props.plant;
    return (
        <div>
            <h2>{plant.nickname} the</h2>
            <h2>{plant.name}</h2>
            <h2>{plant.latinName}</h2>
            <br/><br/>
            <img src={plant.img} className="showImg"/>
            <br/><br/>
            <h2>Origin: {plant.origin}</h2>
            <h2>Description: {plant.description}</h2>
            
        </div>
    )
}