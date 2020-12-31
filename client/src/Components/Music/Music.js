// import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Songs from '../Songs/Songs';

const Music = () => {
    return(
        <div>
            <h1>Welcome to the music!</h1>
            <Link className="App-link" to="/songs">Click here to see my songs!</Link>
            <Route path="/songs" component={Songs} />
        </div>
    )
}


export default Music;