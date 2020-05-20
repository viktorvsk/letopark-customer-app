import React from 'react';

import { connect } from 'react-redux';

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';

import Order from './Order';

class OrdersPage extends React.Component {
    render () {
        const { orders } = this.props;

        if (!orders.length) { return <Box p='8'>Нет заказов</Box>; }

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
                    {orders.filter(order => order.status === 'new').map(order => <Order order={order} key={order.code} />)}
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    {orders.filter(order => order.status !== 'new').map(order => <Order order={order} key={order.code} />)}
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

function mapDispatchToProps () {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
