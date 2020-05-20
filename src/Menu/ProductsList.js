import React from 'react';


import { Box } from '@chakra-ui/core';

import Slider from 'react-slick';
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
        <Box w='100%'>
          <Slider {...settings}>
            {items.map(item => <ProductItem item={item} key={item.id} />)}
          </Slider>
        </Box>
      );

    }
}

