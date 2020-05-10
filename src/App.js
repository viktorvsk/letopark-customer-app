import React from 'react';

import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MenuPage from './Menu/MenuPage'
import CartPage from './Cart/CartPage'
import ProductPage from './Product/ProductPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' component={MenuPage} exact/>
          <Route path='/cart' component={CartPage}/>
          <Route path='/product/:name' component={ProductPage}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
