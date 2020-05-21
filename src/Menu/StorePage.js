import React from 'react';

import { connect } from 'react-redux';

import { Box, Icon, Flex } from '@chakra-ui/core';

import Store from './Store';

import ProductsList from './ProductsList';

import { NavLink } from 'react-router-dom';


class StorePage extends React.Component {
    render () {
        const { match: { params: {id} } } = this.props;
        const { stores } = this.props;
        const store = stores.filter(store => store.id === parseInt(id, 10))[0];

        if (!store) { return null }


        return (
            <Box>
                <Flex pl='4' align='center'>
                    <NavLink to='/menu'>
                        <Icon name='chevron-left' size='8'/>
                    </NavLink>
                </Flex>
                <ProductsList items={store.products} />
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

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
