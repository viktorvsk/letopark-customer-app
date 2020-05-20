import React from 'react';

import { Box } from '@chakra-ui/core';

export default class OrderItem extends React.Component {
    render () {
        const { orderItem } = this.props;

        return(
          <Box p='2'>
            <p>
              {orderItem.product.name}
              {' '}
              - 
              {' '}
              {orderItem.quantity}
              {' '}
              шт. - 
              {' '}
              {orderItem.product.price * orderItem.quantity}
              {' '}
              ₴
            </p>
          </Box>
        );

    }
}
