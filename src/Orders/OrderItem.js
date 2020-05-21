import React from 'react';

import { Box } from '@chakra-ui/core';

export default class OrderItem extends React.Component {
    render () {
        const { orderItem } = this.props;
        const totalPrice = orderItem.product.price * orderItem.quantity;

        return(
          <Box p='2'>
            <i>
              {`${orderItem.product.name} – ${orderItem.quantity} шт. – ${totalPrice} ₴`}
            </i>
          </Box>
        );

    }
}
