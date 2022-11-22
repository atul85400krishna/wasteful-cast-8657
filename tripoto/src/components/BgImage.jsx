import { Box, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./BgImage.module.css";
// import { Box, Heading, Input } from "@chakra-ui/react";
// import React, { useState } from "react";
// import styles from "./BgImage.module.css";

function BgImage() {
  return (
    <Box width="100%" position="relative">
      <img id={styles.banner} src="https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg" alt="" />
      <Box
        position={"absolute"}
        top="35%"
        // width={"40%"}
        
        textAlign="center"
      >
        <Heading mb={"12px"} size="lg" color={"white"}>
          Exclusive Tours & Holiday Packages
        </Heading>
        <Input
          width="80%"
          height="45px"
          fontSize="12px"
          backgroundColor={"white"}
          placeholder="Search for destinations"
        />
        <Box className={styles.tags}>
          <Box>Stay with activities</Box>
          <Box>Destination Packages</Box>
          <Box>Rajasthan</Box>
          <Box>Manali</Box>
          <Box>Himanchal</Box>
          <Box>Rishikesh</Box>
          <Box>Uttarakhand</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BgImage;
