import React from 'react';

import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Box
} from '@chakra-ui/core';

import { connect } from 'react-redux';

import Store from './Store';
import SearchItem from './SearchItem';

import { searchMenu } from '../actions';

class MenuPage extends React.Component {
  onSearchChanged = (event) => {
    const { searchMenuDispatched } = this.props;

    searchMenuDispatched(event.target.value);
  }

  onSearchReset = () => {
    const { searchMenuDispatched } = this.props;
    searchMenuDispatched('');
  }

    render () {
        const { stores, searchQuery } = this.props;
        const products = stores.map(store => store.products).flat();
        const filteredProducts = products.filter(product => {
          const q = searchQuery.toLowerCase();
          const shouldShow = product.name.toLowerCase().match(q) ||
                            product.ingredients.filter(ingr => ingr.toLowerCase().match(q)).length ||
                            product.tags.filter(tag => tag.toLowerCase().match(q)).length;

          return shouldShow;
        });

        return (
          <Box>
            <FormControl p='8'>
              <InputGroup>
                <Input value={searchQuery} placeholder='Поиск' onChange={this.onSearchChanged} />
                {searchQuery && (
                  <InputRightElement onClick={this.onSearchReset}>
                    <Icon name="small-close" color='gray.500' />
                  </InputRightElement>
                )}
              </InputGroup>
            </FormControl>
            { searchQuery.length ? filteredProducts.map(product => <SearchItem product={product} key={product.id} />) : 
                                     stores.map((store) => <Store name={store.name} id={store.id} products={store.products} key={store.name} />) }
          </Box>
        );

    }
}

function mapStateToProps (state) {
    return {
        stores: state.menu.stores,
        searchQuery: state.menu.searchQuery
    };
}

function mapDispatchToProps (dispatch) {
    return {
      searchMenuDispatched: (searchQuery) => dispatch(searchMenu(searchQuery))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
