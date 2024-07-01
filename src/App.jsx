import React from 'react';

import ProductsDetails from './components/ProductsDetails'; 


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductsDetails}/>

          <Route exact component={HomePage} />

        </Switch>
      </BrowserRouter>
  )
}

export default App