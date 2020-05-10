import React from 'react';

import { Box } from '@chakra-ui/core';

export default class ProductPage extends React.Component {
    render () {
      return (
        <h1>{this.props.match.params.name}</h1>
      );

    }
}

