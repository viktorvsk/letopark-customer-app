import React from 'react';

import { Box, Badge, Progress, SimpleGrid, Flex } from '@chakra-ui/core';

import OrderItem from './OrderItem';

import QRCode from 'qrcode.react';

import { baseURL } from '../services/API';

function sum (a, b) { return a + b; }

export default class Order extends React.Component {
    render () {
        const { order } = this.props;
        const totalPrice = order.order_items.map(orderItem => parseInt(orderItem.product.price, 10) * orderItem.quantity).reduce(sum, 0);
        const progress = {
          new: 33,
          in_progress: 66,
          ready: 100,
        }

        return(
          <Box p='4'>
            <SimpleGrid columns={2} spacing={1}>
              <Flex align='center' justify='center'>
                <QRCode value={`${baseURL}/admin/orders/${order.code}`}/>

              </Flex>
              <Box>{order.order_items.map(orderItem => <OrderItem orderItem={orderItem} key={orderItem.product.id} />)}</Box>
            </SimpleGrid>
            

            

            {!!order.comment.length && <Box m='4' p='4' borderRadius='lg' border='#eee solid 1px'>{order.comment}</Box>}


            <Box p='4' textAlign='right'>
              {`Всего ${totalPrice} ₴`}
              {progress[order.status] && <Progress value={progress[order.status]} />}
            </Box>
          </Box>
        );

    }
}
