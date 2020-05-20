import React from 'react';
import {connect} from 'react-redux';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MenuPage from './Menu/MenuPage';
import CartPage from './Cart/CartPage';
import ProductPage from './Product/ProductPage';
import AboutPage from './About/AboutPage';
import OrdersPage from './Orders/OrdersPage';
import Navbar from './components/Navbar';

import { loadStores, loadOrders } from './actions';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class App extends React.Component {

  componentDidMount() {
    const {loadStoresDispatched, loadOrdersDispatched} = this.props;

    loadStoresDispatched();
    loadOrdersDispatched();
  }

  render () {
    return (
      <ThemeProvider>
        <CSSReset />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' component={AboutPage} exact />
            <Route path='/menu' component={MenuPage} exact />
            <Route path='/cart' component={CartPage} />
            <Route path='/orders' component={OrdersPage} />
            <Route path='/product/:id' component={ProductPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    loadStoresDispatched: () => dispatch(loadStores()),
    loadOrdersDispatched: () => dispatch(loadOrders())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
