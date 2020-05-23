import React from 'react';

export default class OrderItem extends React.Component {
    render () {
        const { orderItem } = this.props;

        return(
          <i>
            {`${orderItem.product.name} (${orderItem.quantity}) `}
          </i>
        );

    }
}
