import React from 'react';

import { connect } from 'react-redux';

import { Box } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

class CheckoutButton extends React.Component {
    render () {
      const {items} = this.props;
      const count = items.map(item => item.qty).reduce(((a,b)=>a+b), 0);
      const totalPrice = items.map(item => item.product.price * item.qty).reduce(((a,b)=>a+b), 0);
      if (count === 0) { return null; }
      return (
        <Box textAlign='center' align='center' justify='center'>
          <NavLink to='/cart'>
            <FaShoppingCart size='28' color='#00a8ff' />
              
            <small>
              {totalPrice}
              {' '}
              ₴
            </small>
          </NavLink>
        </Box>
      );

    }
}

function mapStateToProps (state) {
    return {
        items: state.cart.items
    };
}

function mapDispatchToProps () {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutButton);