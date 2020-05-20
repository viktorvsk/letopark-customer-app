import React from 'react';


import { connect } from 'react-redux';

import { Box } from '@chakra-ui/core';
import Store from './Store';

class MenuPage extends React.Component {
    render () {
        const { stores } = this.props;

        return (
          <Box mb='8'>
            {stores.map((store, index) => {
                    return (
                      <Box key={store.name}>
                        <Store name={store.name} items={store.products} key={store.name} />
                        {(index + 1 !== stores.length) && <hr />}
                      </Box>
);
                })}
          </Box>
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
