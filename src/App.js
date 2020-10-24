import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import GlobalState from './context/GlobalState';
import CartPage from './pages/Cart';
import ProductsPage from './pages/Products';

const App = () => (
  <GlobalState>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/cart" component={CartPage} exact />
      </Switch>
    </BrowserRouter>
  </GlobalState>
);

export default App;
