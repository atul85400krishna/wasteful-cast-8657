import React from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {auth} from "../firebase-config"
import { useContext } from "react";
import {useState} from "react"
import {Navigate} from "react-router-dom"
import { ShowContext } from '../Context/ShowContext'
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc"
import {FaFacebookF} from "react-icons/fa"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Button,
    FormLabel,
    useDisclosure,
    Input,
    Box,
  } from '@chakra-ui/react'
import Signup from './Signup';

  

function Signin() {
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [registerEmail,setRegisterEmail]=useState("")
    const [registerPassword,setRegisterPassword]=useState("")
      
    const {isAuth,setIsAuth}=useContext(ShowContext)


    const provider=new GoogleAuthProvider()

    const signInWithGoogle=()=>{
      signInWithPopup(auth,provider).then((res)=>{
        console.log(res)
           setIsAuth(true)
      }).catch((error)=>{
        alert("Something Went wrong")
        console.log(error)
      })
    }




    const handleSubmit=()=>{
      signInWithEmailAndPassword(auth,registerEmail,registerPassword)
      .then((res)=>{
       setIsAuth(true)
       alert("LogIn Successful !")
      }).then((error)=>{
        
      }) 
    }
  
   
    return (
      <>
       
        <Box onClick={onOpen} className="hover">Sign in</Box>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="xs"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign_In</ModalHeader>
            <Button backgroundColor="rgb(74,102,160)"  color="white" _hover={{bg:"rgb(74,102,160)"}}  letterSpacing="0.6px" fontFamily="sans-serif" fontWeight="500" width="89%" margin="auto" marginTop='5px' marginBottom="5px"><FaFacebookF style={{paddingRight:"5px"}} size={22}/>Log in with Facebook</Button>
           
            <Button backgroundColor="white" fontWeight="500" letterSpacing="0.6px" fontFamily="sans-serif" width="89%" margin="auto" marginTop='5px' marginBottom="5px" onClick={signInWithGoogle}><FcGoogle style={{paddingRight:"5px"}} size={28} />Log in with google</Button>
            <Box  textAlign="center">OR</Box>
            <ModalCloseButton />
            <ModalBody pb={6} fontSize="14px">
              <FormControl>
                {/* <FormLabel>Email</FormLabel> */}
                <Input ref={initialRef} placeholder='Enter Email'  onChange={(e)=>setRegisterEmail(e.target.value)}  />
              </FormControl>
  
              <FormControl mt={4}>
                {/* <FormLabel>Password</FormLabel> */}
                <Input placeholder='Enter password'   onChange={(e)=>setRegisterPassword(e.target.value)}  />
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button bgColor='#f27669' color="white" w="100%" onClick={handleSubmit}>
                LOG IN
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
            <Box  textAlign="center" fontSize="13px" display="flex" alignItems={"center"} gap="5px" justifyContent={"center"}>Don't have an account? <Signup/></Box>
            <br />
          </ModalContent>
            
        </Modal>
          
      </>
    )
  }

export default Signin
