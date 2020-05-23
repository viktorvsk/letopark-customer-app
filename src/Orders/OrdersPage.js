import React from 'react';

import { connect } from 'react-redux';

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';

import {cancelOrder} from '../actions';

import Order from './Order';

class OrdersPage extends React.Component {
    render () {
        const { orders, cancelOrderDispatched } = this.props;
        const activeOrders = orders.filter(order => ['new', 'in_progress', 'ready'].includes(order.status));
        const oldOrders = orders.filter(order => ['completed', 'canceled_by_waiter', 'canceled_by_customer'].includes(order.status));

        return(
          <Box>
            <Tabs>
              <TabList>
                <Tab>Активные</Tab>
                <Tab>Старые</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box>
                    {!activeOrders.length && <Box p='8'>Пусто</Box>}
                    {activeOrders.map(order => <Order onCancel={cancelOrderDispatched} order={order} key={order.code} />)}
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    {!oldOrders.length && <Box p='8'>Пусто</Box>}
                    {oldOrders.map(order => <Order onCancel={cancelOrderDispatched} order={order} key={order.code} />)}
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        );

    }
}

function mapStateToProps (state) {
    return {
        orders: state.orders.orders
    };
}

function mapDispatchToProps (dispatch) {
  return {
    cancelOrderDispatched: (order) => dispatch(cancelOrder(order))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
