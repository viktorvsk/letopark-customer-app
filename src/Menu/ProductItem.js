import React from 'react';
import { connect } from 'react-redux';

import { Box, Image, Badge, Button } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

class ProductItem extends React.Component {
    onAddProduct = () => {
      const {addProduct, item} = this.props;
      addProduct(item);
    }

    render () {
      const { item } = this.props;

      return (
        
        <Box borderWidth='1px' rounded='lg' overflow='hidden' m='5'>
          <NavLink to={`/product/${item.id}`}>
            <Image src={item.image} w='100%' />
          </NavLink>
          <Box p='2'>
            <Badge variantColor='red' p='1'>Остро</Badge>
                &nbsp;
            <b>{item.name}</b>
            <p>
              <i>
                {item.price}
                {' '}
                ₴
              </i>
            </p>
          </Box>
          <Box mt='1' p='2' lineHeight='tight'>{item.description}</Box>

          <Box><Button onClick={this.onAddProduct} w='100%' roundedTopLeft='0' roundedTopRight='0' rightIcon='small-add'>Добавить в корзину</Button></Box>
        </Box>
       
      );

    }
}

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    addProduct: (item) => dispatch(() => dispatch({type: 'CART_ADD_PRODUCT', product: item }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
