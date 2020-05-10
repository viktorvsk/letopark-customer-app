import React from 'react';

import { Box, Button } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

export default class CartPage extends React.Component {
    render () {
      return (
        <>
            <Button><NavLink to='/'>Вернуться к меню</NavLink></Button>
            <h1>CART PAGE</h1>
        </>
      );

    }
}

