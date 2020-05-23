import React from 'react';

import { Box, Badge, SimpleGrid, Flex, Button } from '@chakra-ui/core';

import QRCode from 'qrcode.react';

import { baseURL } from '../services/API';

function sum (a, b) { return a + b; }

export default class Order extends React.Component {
    onCancelOrder = () => {
      const {onCancel, order} = this.props;
      onCancel(order);
    }

    render () {
        const { order } = this.props;
        const totalPrice = order.order_items.map(orderItem => parseInt(orderItem.product.price, 10) * orderItem.quantity).reduce(sum, 0);
        const humanStatus = {
          new: 'В ожидании',
          in_progress: 'Готовится',
          ready: 'Готово!',
        };

        return(
          <Box>
            <br />
            <SimpleGrid columns={2} spacing={1}>
              <Box textAlign='center'>
                <Flex align='center' justify='center'>
                  <QRCode value={`${baseURL}/admin/orders/${order.code}/code`} />
                </Flex>
                {humanStatus[order.status] && <br />}
                {humanStatus[order.status] && <Box p='4'><Badge w='100%'>{humanStatus[order.status]}</Badge></Box>}
              </Box>
              <Box>
                {order.order_items.map(orderItem => `${orderItem.product.name} (${orderItem.quantity}) `).join(', ')}
                <Box p='4' textAlign='right'>
                  {`Всего ${totalPrice} ₴`}
                </Box>
              </Box>

            </SimpleGrid>
            
            {!!order.comment.length && <Box m='4' p='4' borderRadius='lg' border='#eee solid 1px'>{order.comment}</Box>}
            {humanStatus[order.status] && (
            <Box pr='2' textAlign='right'>
              <Button variant="outline" variantColor='red' size='sm' onClick={this.onCancelOrder}>Отменить</Button>
            </Box>
)}
            <br />
            <hr />

          </Box>
        );

    }
}
