import React from 'react';

import { Flex, SimpleGrid, Image, Icon } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

export default class Store extends React.Component {
    render () {
      const {id, name, items} = this.props;

      return (
        <NavLink to={`/store/${id}`}>
          <SimpleGrid columns={3} padding={8} w='100%' h='100px' mb='8'>
            <Flex align='center' justify='flex-start'>
              <Image src={items[0].image} rounded='full' h='100px'/>
            </Flex>
            <Flex align='center' justify='center'>{name}</Flex>
            <Flex align='center' justify='flex-end'>
              <Icon name='chevron-right' size='8' />
            </Flex>
          </SimpleGrid>
        </NavLink>
      );

    }
}

