import React from 'react';

import { Button, Flex } from '@chakra-ui/core';

export default class CheckoutButton extends React.Component {
    render () {
      return (
        <div style={{ width: '100%', bottom: '48px', position: 'fixed'}}>
            <Flex align='center' justify='center' bottom='48px'>
                    <Button onClick={() => alert() }
                            variant='solid'
                            variantColor='pink'
                            rightIcon='check-circle'
                    >
                        Заказать (4 товара на 512 ₴)
                    </Button>
            </Flex>
        </div>
      );

    }
}
