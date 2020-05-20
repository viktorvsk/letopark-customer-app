import React from 'react';

import { Box } from '@chakra-ui/core';
import ProductsList from './ProductsList';


export default class Store extends React.Component {
    render () {
      const {name, items } = this.props;

      return (
        <Box mb='16'>
          <Box textAlign='center' fontWeight='bold' pl='8' pr='8' fontSize='24px'>
            {name}
            {' '}
            (
            {items.length}
            )
          </Box>
          <ProductsList items={items} />
        </Box>
      );

    }
}

