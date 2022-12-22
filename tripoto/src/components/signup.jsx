import React from "react";
import { auth } from "../firebase-config";
import { useContext } from "react";
import { useState } from "react";
import { ShowContext } from "../Context/ShowContext";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateCurrentUser,
  signOut,
} from "firebase/auth";

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
} from "@chakra-ui/react";

const Signup = ({ change }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerSurname, setRegisterSurname] = useState("");
  const { isAuth, setIsAuth } = useContext(ShowContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((res) => {
        setIsAuth(true);
        alert("SignUp Successful !");
        setLoading(false);
      })
      .then((err) => {
        setError(err);
      });
  };

  return (
    <>
      <Box onClick={onOpen} className="hover" color="#2f9bdb">
        Sign Up
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xs"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
                onChange={(e) => setRegisterName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Last name"
                onChange={(e) => setRegisterSurname(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter email"
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter Password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bgColor='#f27669' color="white" w="100%" onClick={handleSubmit}>
              Submit
            </Button>
            {/* <Button onClick={() => change()}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
