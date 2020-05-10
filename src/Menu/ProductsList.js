import React from 'react';

import ProductItem from './ProductItem';

import { Box } from '@chakra-ui/core';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ProductsList extends React.Component {
    render () {
            var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      arrows: false
    };
      return (
            <Box w='100%'>
              <Slider {...settings}>
                  {this.props.items.map(item => <ProductItem item={item} />)}
              </Slider>
            </Box>
      );

    }
}

