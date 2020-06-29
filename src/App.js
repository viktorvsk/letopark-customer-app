import React from 'react';
import {connect} from 'react-redux';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MenuPage from './Menu/MenuPage';
import StorePage from './Menu/StorePage';
import CartPage from './Cart/CartPage';
import ProductPage from './Product/ProductPage';
import AboutPage from './About/AboutPage';
import OrdersPage from './Orders/OrdersPage';
import ProfilePage from './Profile/ProfilePage';
import Navbar from './components/Navbar';

import { loadStores, loadOrders, loadCart } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ordersSyncInterval: null };
  }

  componentDidMount() {
    const {loadStoresDispatched, loadOrdersDispatched, loadCartDispatched} = this.props;

    const ordersSyncInterval = setInterval(loadOrdersDispatched, 5000);

    this.setState({ ordersSyncInterval });

    loadStoresDispatched();
    loadOrdersDispatched();
    loadCartDispatched();
  }

  componentWillUnmount() {
    const { ordersSyncInterval } = this.state;
    clearInterval(ordersSyncInterval);
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
            <Route path='/profile' component={ProfilePage} />
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/store/:id' component={StorePage} />
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
    loadOrdersDispatched: () => dispatch(loadOrders()),
    loadCartDispatched: () => dispatch(loadCart())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
