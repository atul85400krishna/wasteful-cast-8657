import React from 'react';

import {
    Drawer,
    DrawerBody,
useDisclosure,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Heading,
    Link,

  } from '@chakra-ui/react'

function Menu() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
    return(
      
          
          
              <>
                <RadioGroup defaultValue={placement} onChange={setPlacement}>
                  <Stack direction='row' mb='4'>
                    <Radio value='top'>Top</Radio>
                    <Radio value='right'>Right</Radio>
                    <Radio value='bottom'>Bottom</Radio>
                    <Radio value='left'>Left</Radio>
                  </Stack>
                </RadioGroup>
                <Heading>Welcome to admin Page</Heading>
                <Button colorScheme='blue' onClick={onOpen}>
                  Menu
                </Button>
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                     <Link path="./Hotel" ><p>Some contents...</p></Link> 
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            
          
    )
}

export default Menu