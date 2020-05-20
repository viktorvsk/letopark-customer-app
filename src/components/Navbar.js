import React from 'react';

import { SimpleGrid, Image, Flex } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

import CheckoutButton from './CheckoutButton';

import MenuDrawer from './MenuDrawer';

export default class Navbar extends React.Component {
    render () {
        return(
          <SimpleGrid columns={3} spacing={10} bg='rgba(255,255,255,0.85)' position='fixed' zIndex='1000' top='0' w='100%'>
            <Flex align='center' justify='center'>
              <MenuDrawer />
            </Flex>
            <Flex justify='center'>
              <NavLink to='/'>
                <Image src='/fdp.png' h='100px' />
              </NavLink>
            </Flex>
            <Flex align='center' justify='center'><CheckoutButton /></Flex>
          </SimpleGrid>
        );
    }
}
