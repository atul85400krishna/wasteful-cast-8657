import React from 'react';
import { Link } from 'react-router-dom';

import {
    Drawer,
    DrawerBody,
useDisclosure,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  
    Button,
    Heading,
   

  } from '@chakra-ui/react'

function Menu() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')

    // const navigate=useNavigate()
    return(
      
          
          
              <>
               
                <Heading>Welcome to admin Page</Heading>
                <Button colorScheme='blue' onClick={onOpen}>
                  Menu
                </Button>
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' style={{color:"blue"}} >Tripito</DrawerHeader>
                    <DrawerBody>
                    <Link to='/hotel'  >  <h1>MY DATA </h1></Link>
                      {/* <p>FAVOURITES</p>
                      <p>OCASIONAL</p> */}

                      



                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            
          
    )
}

export default Menu