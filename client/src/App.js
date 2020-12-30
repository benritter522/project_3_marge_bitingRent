import './App.css';
// import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// reference /Users/Ben/SEIR/lectures/w08d03/react-router/react-bitcoin-router

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Music from './Components/Music/Music';
// import Songs from './Components/Songs/Songs';
import Plants from './Components/Plants/Plants';

function App() {
  // const [token, setToken] = useState(''); // use for auth

  // Register
  // Login

  return (
    <div className="App">
      <header className="App-header">
        <h1>BitingRent</h1>
        <img src="https://i.imgur.com/4CbaLZT.png" />



        <nav>
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/about">About</Link>
          <Link className="App-link" to="/music">Music</Link>
          {/* <Link to="/songs">Songs</Link> */}
          <Link className="App-link" to="/plants">Plants</Link>
        </nav>
      </header>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/music" component={Music} />
          {/* <Route path="/songs" component={Songs} /> */}
          <Route path="/plants" component={Plants} />
        </Switch>
    </div>
  );
}

export default App;
