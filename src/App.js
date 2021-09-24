import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <Link to='/hats'>Hats</Link> */}

      {/* with switch, we don't need the 'exact' keyword */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
