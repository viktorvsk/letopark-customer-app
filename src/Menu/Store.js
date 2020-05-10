import React from 'react';

import ProductsList from './ProductsList';

import { Box } from '@chakra-ui/core'

export default class Store extends React.Component {
    render () {
      return (
        <>
            <Box bg='papayawhip' color='peru' fontWeight='bold' pl='8' pr='8' pt='4' pb='4'>{this.props.name}</Box>
            <ProductsList items={this.props.items} />
        </>
      );

    }
}

