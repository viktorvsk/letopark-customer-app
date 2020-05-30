import React from 'react';

import { Box, SimpleGrid, Flex, Button, CircularProgress, CircularProgressLabel, useDisclosure } from '@chakra-ui/core';

import QRCode from 'qrcode.react';

import { baseURL } from '../services/API';

import CancelModal from './CancelModal';

function sum (a, b) { return a + b; }

export default function Order(props) {
    const { order, onCancel } = props;
    const onCancelOrder = () => { onCancel(order); };
    const totalPrice = order.order_items.map(orderItem => parseInt(orderItem.product.price, 10) * orderItem.quantity).reduce(sum, 0);
    const humanStatus = {
      new: 'В очереди',
      in_progress: 'Готовится',
      ready: 'Готово!',
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const cancelRef = React.useRef();

    return(
      <Box>
        <br />
        <SimpleGrid columns={2} spacing={0} p='4'>
          <Flex align='center' justify='flex-start'>
            <QRCode value={`${baseURL}/admin/orders/${order.code}/code`} />
          </Flex>
          {humanStatus[order.status] && (
            <Flex align='center' justify='flex-end'>
              <CircularProgress value={order.readiness_percentage} size='128px' thickness={0.1}>
                <CircularProgressLabel fontSize='12px'>{humanStatus[order.status]}</CircularProgressLabel>
              </CircularProgress>
            </Flex>
          )}

        </SimpleGrid>

        <Box p='4'>
          {order.order_items.map(orderItem => `${orderItem.product.name} (${orderItem.quantity}) `).join(', ')}
        </Box>
        <Box p='4' textAlign='right'>
          Всего
          {' '}
          <b>{totalPrice}</b>
          {' '}
          ₴
        </Box>

        {!!order.comment.length && <Box m='4' p='4' borderRadius='lg' border='#eee solid 1px'>{order.comment}</Box>}
        {humanStatus[order.status] && (
        <Box pr='4' textAlign='right'>
          <Button variant="outline" variantColor='red' size='sm' ref={btnRef} onClick={onOpen}>Отменить</Button>
        </Box>
      )}
        <br />
        <hr />
        <CancelModal onSubmit={onCancelOrder} isOpen={isOpen} btnRef={btnRef} onClose={onClose} cancelRef={cancelRef} />
      </Box>
    );
}
