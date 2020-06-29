import React from 'react';

import { connect } from 'react-redux';

import { Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/core';
import { addProduct } from '../actions';

class ProfilePage extends React.Component {
    componentDidMount() { document.title = 'Летопарк – Профиль' }
    render () {

        return (
          <Box p='8'>
            <FormControl mb='4'>
              <FormLabel>Имя</FormLabel>
              <Input placeholder='Имя' />
            </FormControl>
            <FormControl>
              <FormLabel>Телефон</FormLabel>
              <Input placeholder='Имя' />
            </FormControl>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
