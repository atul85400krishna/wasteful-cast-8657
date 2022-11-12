import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Home2 from "./Home2";
import IndiaCarousel from "./IndiaCarousel";
import PartnershipCaraousel from "./PartnershipCaraousel";
import { Tourism } from "./Tourism";
import TripCarousel from "./TripCaraousel";
import TypeOfTraveller from "./TypeOfTraveller";

const Home_1 = () => {
  return (
    <div>
      <Box id="home1_A">
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"
            alt=""
          />
        </Box>
      </Box>

      <br />
      <br />
      <Box id="carousel-parent">
        <Heading as="h3" marginBottom={"1%"} marginLeft={"5.5%"} size={"lg"}>
          In the SpotLight : Partnerships
        </Heading>
        <PartnershipCaraousel />
      </Box>
      <Box id="carousel-parent">
        <Heading as="h3" marginBottom={"1%"} marginLeft={"5.5%"} size={"lg"}>
        Find Best Places to Visit in India in November & December{" "}
        </Heading>
        <TripCarousel />
      </Box>
    <br />
          <Tourism />
    <br />
    <br />
      <Box id="carousel-parent">
        <Heading as="h3" marginBottom={"1%"} marginLeft={"5.5%"} size={"lg"}>
          Plan You Next International Trip During October & November
        </Heading>
        <IndiaCarousel />
      </Box>
      <Box id="carousel-parent">
        <Heading as="h3" marginBottom={"1%"} marginLeft={"5.5%"} size={"lg"}>
          Check Out Best Hotels and Properties for Every Type of Traveller
        </Heading>
        <TypeOfTraveller />
      </Box>
      
      <Home2 />
    </div>
  );
};

export default Home_1;
