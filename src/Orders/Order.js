import React from 'react';

import { Box, Badge } from '@chakra-ui/core';

import OrderItem from './OrderItem';

function sum (a, b) { return a + b; }

export default class Order extends React.Component {
    render () {
        const { order } = this.props;

        return(
          <Box p='8'>
            <h1>
              Заказ №
              <Badge variantColor='green'>{order.code}</Badge> 
              {' '}
              <Badge>{order.status}</Badge>
            </h1>

            {order.order_items.map(orderItem => <OrderItem orderItem={orderItem} key={orderItem.product.id} />)}

            {!!order.comment.length && <Box>{order.comment}</Box>}
            <hr />
            <Box p='4' textAlign='right'>
              Всего 
              {' '}
              {order.order_items.map(orderItem => parseInt(orderItem.product.price, 10) * orderItem.quantity).reduce(sum, 0)}
              {' '}
              ₴
            </Box>
          </Box>
        );

    }
}
