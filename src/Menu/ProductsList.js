import React from 'react';

import ProductItem from './ProductItem';

export default class ProductsList extends React.Component {
    render () {
      const { items } = this.props;

      return (
        items.map(item => <ProductItem item={item} key={item.id} />)
      );

    }
}

