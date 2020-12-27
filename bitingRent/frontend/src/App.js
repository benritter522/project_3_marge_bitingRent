import './App.css';
import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// reference /Users/Ben/SEIR/lectures/w08d03/react-router/react-bitcoin-router

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Songs from './Components/Songs/Songs';
import Plants from './Components/Plants/Plants';

function App() {
  // const [token, setToken] = useState(''); // use for auth

  // Register
  // Login

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">
            <h1>BitingRent</h1>
          </Link>
          <Link to="/about">About</Link>
          <Link to="/songs">Songs</Link>
          <Link to="/plants">Plants</Link>
        </nav>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/songs" component={Songs} />
      <Route path="/plants" component={Plants} />
    </Switch>
      </header>
    </div>
  );
}

export default App;
