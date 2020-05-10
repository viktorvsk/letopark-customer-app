import React from 'react';

import { Box, Image, Badge, Button } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

export default class ProductItem extends React.Component {
    render () {
      return (
        <>
          <Box borderWidth='1px' rounded='lg' overflow="hidden" m='5'>
              <Image src={this.props.item.image} w='100%' />
              <Box p='2'>
                  <Badge variantColor='red' p='1'>Остро</Badge>
                  &nbsp;
                  <b>{this.props.item.name}</b>
                  <p><i>{this.props.item.price}</i></p>
              </Box>
              <Box
                mt="1"
                p='2'
                lineHeight="tight"
              >{this.props.item.description}</Box>


              <Box textAlign="center">
                  <Button variantColor="blue" rightIcon="info-outline" mb='24px'>
                      <NavLink to={`/product/${this.props.item.name}`}>Подробнее</NavLink>
                  </Button>
              </Box>
                <Box><Button w='100%' roundedTopLeft='0' roundedTopRight='0' variantColor="teal" rightIcon="small-add">Добавить в корзину</Button></Box>
          </Box>
        </>
      );

    }
}
