import React from 'react';

import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import MenuPage from './Menu/MenuPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Navbar />
      <MenuPage />
    </ThemeProvider>
  );
}

export default App;
