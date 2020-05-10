import React from 'react';

import Store from './Store';

import CheckoutButton from './CheckoutButton';

import { Box } from '@chakra-ui/core';

const stores = [
    {
        name: 'Бургеры', items: [
            { name: 'КРЕВЕТКА JACK', description: 'Булка бриошь,рваная телятина в соусе Jack Daniels,хвосты тигровых креветок, чеддер и пармезан, салат айсберг', price: '239 ₴ за 100 грам', image: 'https://img.postershop.me/3951/Products/1212245_1587580235.6335_original.jpg' },
            { name: 'СЫРНЫЙ ПАПА (4 сыра)', description: 'Булка бриошь,говяжья котлета,чеддер,моцарелла,пармезан,дор блю, карамелезированный лук, помидор, фирменные соусы bbq ', price: '179 ₴', image: 'https://img.postershop.me/3951/Products/1212248_1585909808.4505_original.jpg' },
            { name: 'ТУПО ЛОСЬ', description: 'Булка бриошь, филе лосося, руккола,сыр пармезан, свежие помидоры, свежие огурцы, фирменный соус тар-тар', price: '219 ₴ ', image: 'https://img.postershop.me/3951/Products/1212257_1588699039.553_original.jpg' },
            { name: 'ТУПО БУРГЕР', description: 'Булка бриошь, говяжья котлета, жаренный бекон,сыр чеддер свежие помидоры, маринованные огурцы, салат ', price: '159 ₴ ', image: 'https://img.postershop.me/3951/Products/1212254_1585912705.2786_original.jpg' },
        ]
    },
    {
        name: 'Пицца', items: [
            { name: 'КРЕВЕТКА JACK', description: 'Булка бриошь,рваная телятина в соусе Jack Daniels,хвосты тигровых креветок, чеддер и пармезан, салат айсберг', price: '239 ₴ за 100 грам', image: 'https://img.postershop.me/3951/Products/1212245_1587580235.6335_original.jpg' },
            { name: 'СЫРНЫЙ ПАПА (4 сыра)', description: 'Булка бриошь,говяжья котлета,чеддер,моцарелла,пармезан,дор блю, карамелезированный лук, помидор, фирменные соусы bbq ', price: '179 ₴', image: 'https://img.postershop.me/3951/Products/1212248_1585909808.4505_original.jpg' },
            { name: 'ТУПО ЛОСЬ', description: 'Булка бриошь, филе лосося, руккола,сыр пармезан, свежие помидоры, свежие огурцы, фирменный соус тар-тар', price: '219 ₴ ', image: 'https://img.postershop.me/3951/Products/1212257_1588699039.553_original.jpg' },
            { name: 'ТУПО БУРГЕР', description: 'Булка бриошь, говяжья котлета, жаренный бекон,сыр чеддер свежие помидоры, маринованные огурцы, салат ', price: '159 ₴ ', image: 'https://img.postershop.me/3951/Products/1212254_1585912705.2786_original.jpg' },
        ]
    },
    {
        name: 'Мексиканская кухня', items: [
            { name: 'КРЕВЕТКА JACK', description: 'Булка бриошь,рваная телятина в соусе Jack Daniels,хвосты тигровых креветок, чеддер и пармезан, салат айсберг', price: '239 ₴ за 100 грам', image: 'https://img.postershop.me/3951/Products/1212245_1587580235.6335_original.jpg' },
            { name: 'СЫРНЫЙ ПАПА (4 сыра)', description: 'Булка бриошь,говяжья котлета,чеддер,моцарелла,пармезан,дор блю, карамелезированный лук, помидор, фирменные соусы bbq ', price: '179 ₴', image: 'https://img.postershop.me/3951/Products/1212248_1585909808.4505_original.jpg' },
            { name: 'ТУПО ЛОСЬ', description: 'Булка бриошь, филе лосося, руккола,сыр пармезан, свежие помидоры, свежие огурцы, фирменный соус тар-тар', price: '219 ₴ ', image: 'https://img.postershop.me/3951/Products/1212257_1588699039.553_original.jpg' },
            { name: 'ТУПО БУРГЕР', description: 'Булка бриошь, говяжья котлета, жаренный бекон,сыр чеддер свежие помидоры, маринованные огурцы, салат ', price: '159 ₴ ', image: 'https://img.postershop.me/3951/Products/1212254_1585912705.2786_original.jpg' },
        ]
    },
]

export default class MenuPage extends React.Component {
    render () {

      return (
        <>
            <Box mb='96px'>
                {stores.map(store => <Store name={store.name} items={store.items}/>)}
            </Box>
            <CheckoutButton />
        </>
      );

    }
}

