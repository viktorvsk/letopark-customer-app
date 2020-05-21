import React from 'react';


import { connect } from 'react-redux';

import { Box } from '@chakra-ui/core';
import Store from './Store';

class MenuPage extends React.Component {
    render () {
        const { stores } = this.props;

        return (
          stores.map((store, index) => <Store name={store.name} id={store.id} items={store.products} key={store.name} />)
        );

    }
}

function mapStateToProps (state) {
    return {
        stores: state.menu.stores
    };
}

function mapDispatchToProps () {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
