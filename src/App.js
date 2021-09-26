import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header />

      {/* with switch, we don't need the 'exact' keyword */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

// const HatsPage = (props) => {
//   console.log(props);
//   // <button onClick={() => props.history.push('/hats')}>Hats</button>;

//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// };
