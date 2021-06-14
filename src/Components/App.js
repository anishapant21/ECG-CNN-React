import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login';
import Navbar from './Navbar';

const App =() =>{
    return (
        <ChakraProvider>
            
            <Navbar />
        <Login />

        </ChakraProvider>
  
    );

};

export default App;