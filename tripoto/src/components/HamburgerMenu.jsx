import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext";
import { auth } from "../firebase-config";
// import Login from "./LoginIn";
import Signin from "./Signin";

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  const { show, setShow } = useContext(ShowContext);
  const [avatar, setAvatar] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [email, setEmail] = useState("");
  const { setIsAuth } = useContext(ShowContext);

  onAuthStateChanged(auth, (currentUser) => {
    setEmail(currentUser.email);
    setAvatarName(currentUser.displayName);
    setAvatar(currentUser.photoURL);
    setIsAuth(true);
  });

  let name = email.split("@");
  name = name[0].toUpperCase();

  function logoutUser() {
    signOut(auth).then((res) => {
      setEmail("");
      setAvatarName("");
      setAvatar("");
      setIsAuth(false);
    });
  }

  return (
    <>
      <Box display={"flex"} justifyContent="space-between" padding={"10px"} backgroundColor="#2f9bdb">
        <NavLink to="/">
          <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
        </NavLink>
        <Button
          onClick={onOpen}
          // position="absolute"
          // top="10px"
          // left={"10px"}
          zIndex={100}
          bgColor="transparent"
        >
          <GiHamburgerMenu size={"sm"} color="white" />
        </Button>
      </Box>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor="#2f9bdb">
          <DrawerHeader borderBottomWidth="1px">
            <NavLink to="/">
              <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
            </NavLink>
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            gap="20px"
            color={"white"}
          >
            <NavLink to="/inspiration/singapore" isOpen={onClose}>
              Visit Singapore
            </NavLink>
            <NavLink to="inspiration/beach">Beaches</NavLink>
            <NavLink to="/packages">Packages</NavLink>
            <Box cursor="pointer" display="flex" alignItems={"center"}>
              {avatarName || name ? (
                <div>
                  {" "}
                  <Avatar src={avatar} w="28px" h="28px" mr="3px" />{" "}
                  {avatarName || name}
                  <button style={{ marginLeft: "10px" }} onClick={logoutUser}>
                    {" "}
                    Log Out
                  </button>{" "}
                </div>
              ) : (
                // <Login />
                <Signin />
              )}
            </Box>
            <br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
