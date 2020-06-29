import React from 'react';

import { connect } from 'react-redux';

import ProductsList from './ProductsList';

class StorePage extends React.Component {
    render () {
        const { match: { params: {id} } } = this.props;
        const { stores } = this.props;
        const store = stores.filter(s => s.id === parseInt(id, 10))[0];

        if (!store) { return null; }

        document.title = `Летопарк – ${store.name}`


        return <ProductsList items={store.products} />;

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
