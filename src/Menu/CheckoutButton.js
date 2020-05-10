import React from 'react';

import { Button, Flex } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

export default class CheckoutButton extends React.Component {
    render () {
      return (
        <div style={{ width: '100%', bottom: '48px', position: 'fixed'}}>
            <Flex align='center' justify='center' bottom='48px'>
                    <Button variant='solid'
                            variantColor='pink'
                            rightIcon='check-circle'
                    >
                        <NavLink to='/cart'>Заказать (4 товара на 512 ₴)</NavLink>
                    </Button>
            </Flex>
        </div>
      );

    }
}
