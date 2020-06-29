import React from 'react';

import { Box, Button } from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';

export default class AboutPage extends React.Component {
    componentDidMount() { document.title = 'Летопарк – О нас' }
    render () {
        return(
          <Box p='8'>
            <p>Мы открылись и ждем всех в Летопарке, в парке Горького!</p>
            <p>Во время карантина сделать заказ можно на сайте, будьте здоровы.</p>
            <Box textAlign='center' mt='8'><NavLink to='/menu'><Button>Перейти к меню</Button></NavLink></Box>
          </Box>
        );
    }
}
