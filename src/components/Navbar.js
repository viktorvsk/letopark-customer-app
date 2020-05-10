import React from 'react';
import { Box } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
    render () {
        return(
            <Box bg='rgba(255,120,150,1)' color='white' p='8'>
                <NavLink to='/'>Летопарк</NavLink>
            </Box>
        );
    }
}
