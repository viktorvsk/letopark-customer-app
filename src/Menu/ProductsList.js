import React from 'react';

import { Box } from '@chakra-ui/core';

import ProductItem from './ProductItem';

export default class ProductsList extends React.Component {
    render () {
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: false
      };

      const { items } = this.props;

      return (
        items.map(item => <ProductItem item={item} key={item.id} />)
      );

    }
}

