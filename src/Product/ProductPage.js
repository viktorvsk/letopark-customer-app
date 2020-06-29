import React from 'react';

import { connect } from 'react-redux';

import { Box, Image, Button, Badge } from '@chakra-ui/core';
import { addProduct } from '../actions';


class ProductPage extends React.Component {
    render () {
        const { match: { params: {id} }, addProductDispatched } = this.props;
        const {cartItems, stores} = this.props;
        const products = stores.map(store => store.products).flat();
        const product = products.filter(p => p.id === parseInt(id, 10))[0];
        const cartItem = cartItems.filter(item => item.product.id === product.id)[0];

        if (!product) return (null);

        document.title = `Летопарк – ${product.name}`

        return (
          <Box mb='8'>
            <Box textAlign='center' pt='4' pb='4' fontSize='24px'>{product.name}</Box>
            <Image src={product.image} w='100%' />
            <Box p='4'>
              {cartItem && <Badge>{`В корзине ${cartItem.qty} шт.`}</Badge>}
            </Box>
            <Box p='4'>{product.description}</Box>
            <Box p='4'>
              Ингредиенты:
              {product.ingredients.map(ingr => <Box key={ingr}><Badge>{ingr}</Badge></Box>)}
            </Box>
            <Box p='4'>
              Примечания:
              {product.tags.map(tag => <Box key={tag}><Badge>{tag}</Badge></Box>)}
            </Box>
            <Button onClick={() => addProductDispatched(product)} rightIcon='small-add' w='100%'>Добавить в корзину</Button>
          </Box>
        );

    }
}

function mapStateToProps (state) {
    return {
        stores: state.menu.stores,
        cartItems: state.cart.items
    };
}

function mapDispatchToProps (dispatch) {
  return {
    addProductDispatched: (product) => dispatch(addProduct(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
