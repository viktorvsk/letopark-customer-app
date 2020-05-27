import React from 'react';

import {connect} from 'react-redux';

import { Box, SimpleGrid, Flex, Image, Button } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

class SearchItem extends React.Component {
    onAddProduct = () => {
      const {addProduct, product} = this.props;
      addProduct(product);
    }

    render () {
      const {product} = this.props;

      return (
        <Box p='4'>
          <SimpleGrid columns={3} spacing={2}>
            <Flex align='center' justify='center'>
              <NavLink to={`/product/${product.id}`}>
                <Image src={product.image} rounded='full' h='50px' />
              </NavLink>
            </Flex>
            <Flex align='center' justify='center'>
              {product.name}
              <br />
              {product.price}
              {' '}
              ₴
            </Flex>
            <Flex align='center' justify='center'>
              <Button variant='outline' onClick={this.onAddProduct}>Заказать</Button>
            </Flex>
          </SimpleGrid>
        </Box>
      );

    }
}

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    addProduct: (product) => dispatch(() => dispatch({type: 'CART_ADD_PRODUCT', product }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
