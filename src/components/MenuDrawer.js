import React from 'react';

import { connect } from 'react-redux';

import { RiMenuLine } from 'react-icons/ri';

import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
} from '@chakra-ui/core';

import { NavLink } from 'react-router-dom';


function MenuDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { orders } = props;
  const activeOrders = orders.filter(order => ['new', 'in_progress', 'ready'].includes(order.status));

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <RiMenuLine />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Летопарк</DrawerHeader>

          <DrawerBody>
            <List>
              <ListItem><NavLink to='/'><Button w='100%'>О проекте</Button></NavLink></ListItem>
              <br />
              <ListItem><NavLink to='/menu'><Button w='100%'>Меню</Button></NavLink></ListItem>
              <br />
              <ListItem><NavLink to='/cart'><Button w='100%'>Корзина</Button></NavLink></ListItem>
              <br />
              <ListItem>
                <NavLink to='/orders'>
                  <Button w='100%'>
                    {activeOrders.length ? `Заказы (${activeOrders.length})` : 'Заказы'}
                  </Button>
                </NavLink>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            г. Харьков, парк им. Горького, ул. Сумская, 81
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function mapStateToProps (state) {
  return {
    orders: state.orders.orders
  };
}

function mapDispatchToProps () {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer);