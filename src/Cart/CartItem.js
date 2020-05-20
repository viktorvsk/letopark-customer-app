import React from 'react';

import { Box, Avatar, SimpleGrid, Flex, IconButton } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

export default class CartItem extends React.Component {
    onAddProduct = () => {
      const {onAdd, item} = this.props;
      onAdd(item.product);
    }

    onRemoveProduct = () => {
      const {onRemove, item} = this.props;
      onRemove(item.product);
    }

    render () {
        const { item } = this.props;

        return (
          <Box>
            <Box p='2' m='2'>
              <Box textAlign='center' p='2'>
                <IconButton size='sm' icon='minus' onClick={this.onRemoveProduct} />
                <Box d='inline' p='4'>{item.product.name}</Box>
                <IconButton size='sm' icon='add' onClick={this.onAddProduct} />
              </Box>
              <SimpleGrid columns={3} spacing={10}>
                <Flex align='center' justify='center'>
                  <NavLink to={`/product/${item.product.id}`}>
                    <Avatar src={item.product.image} />
                  </NavLink>
                </Flex>
                <Flex align='center' justify='center'>
                            
                  <Box fontStyle='italic' color='grey'>
                    {item.qty}
                    {' '}
                    шт.
                  </Box>
                            
                </Flex>
                <Flex align='center' justify='center'>
                  {item.product.price * item.qty}
                  {' '}
                  ₴
                </Flex>
              </SimpleGrid>
            </Box>
            <hr />
          </Box>
        );

    }
}
