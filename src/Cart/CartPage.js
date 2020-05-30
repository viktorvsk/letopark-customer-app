import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from "react-router"; // Fng JS bs

import { Button, Box, SimpleGrid, EditablePreview, EditableInput, Editable, useDisclosure } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

import CartItem from './CartItem';

import ConfirmModal from './ConfirmModal';

import { submitOrder, addProduct, removeProduct, cartComment, resetCart } from '../actions';

function CartPage(props) {

    const { items, comment, resetCartDispatched, submitOrderDispatched, addProductDispatched, removeProductDispatched, updateCartComment } = props;

    const { history } = props; // Fng JS bs
    const onSubmit = () => submitOrderDispatched(history); // Fng JS bs

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const cancelRef = React.useRef();


    if (!items.length) {
      return (
        <Box p='8'>
          Нет товаров.
          <Box mt='8'><NavLink to='/menu'><Button>Перейти к меню</Button></NavLink></Box>
        </Box>
      );
    }
    return (
      <Box mb='72px'>
        <hr />
        {items.map(item => <CartItem key={item.product.id} item={item} onAdd={addProductDispatched} onRemove={removeProductDispatched} />)}
        <Box textAlign='right' p='2' m='2'>
          К оплате
          {' '}
          {items.map(item => item.qty * item.product.price).reduce(((a,b)=>a+b), 0)}
          {' '}
          ₴
        </Box>
        <SimpleGrid columns={2} spacing={5} p='4' position='fixed' bottom='0' w='100%' bg='white' borderTop='#eee solid 1px' zIndex='1000'>
          <Button w='100%' onClick={resetCartDispatched}>Отменить</Button>
          <Button w='100%' variantColor='pink' variant='solid' ref={btnRef} onClick={onOpen}>Подтвердить</Button>
        </SimpleGrid>

        <Box p='4' borderWidth='1px' m='4' rounded='lg'>
          <Editable
            value={comment}
            onChange={updateCartComment}
            placeholder='Комментарий к заказу. Укажите, пожалуйста, время, когда вы хотите, чтоб заказ был готов. Так же, можете уточнить, например, на какие ингредиенты у вас аллергия'
            defaultValue=''
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>
        <ConfirmModal onSubmit={onSubmit} isOpen={isOpen} btnRef={btnRef} onClose={onClose} cancelRef={cancelRef} />
      </Box>
    );
}


function mapStateToProps (state) {
  return {
    items: state.cart.items,
    comment: state.cart.comment
  };
}

function mapDispatchToProps (dispatch) {
  return {
    submitOrderDispatched: (history) => dispatch(submitOrder(history)),
    updateCartComment: (comment) => dispatch(cartComment(comment)),
    resetCartDispatched: () => dispatch(resetCart()),
    addProductDispatched: (product) => dispatch(addProduct(product)),
    removeProductDispatched: (product) => dispatch(removeProduct(product)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPage));
