import { Box, Heading, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ShowContext } from "../Context/ShowContext";
import "../CSS/Homepage.css";
import Home1 from "./Home1";
import Middle6Part from "./Middle6Part";
// import luftansa from "../Images/image1.png";
import { countries } from "./countries";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

import Seacrh from "./Search";

const Homepage = () => {
  const { show, setShow } = useContext(ShowContext);
  const [result, setResults] = useState("");
  const [data, setData] = useState([]);

  const handleResult = (e) => {
    setResults(e.target.value);
  };

  useEffect(() => {
    if (result === "") {
      setData([]);
    } else {
      let show_data = countries.filter((item) => {
        return item.country.toLowerCase().indexOf(result) !== -1 ? true : false;
      });
      // console.log(show_data);
      setData(show_data);
    }
  }, [result]);
  // console.log(data)

  return (
    <div>
      <Box>
        <Box position={"relative"} width="100%">
          <img
            id="banner"
            src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
            alt=""
          />

          {!show && (
            <Box position={"absolute"}>
              <Heading mb={"12px"} size="lg" color={"white"}>
              India's Largest Community of Travellers
              </Heading>
               
             < Seacrh/>
               
              {/* <Input value={result}
                width={"80%"}
                onChange={handleResult}
                backgroundColor={"white"}
                placeholder="Search for itineraries, destinations, hotels or activities"
              /> */}
              {/* // )}
            // {!show && ( */}
              <Resulter id="suggestion" limit={5}>
                {data.map((item) => {
                  return (
                    <Box border={"1px solid silver"} padding={"2"} >
                      <Text display={"flex"} alignItems={"center"} gap={3}>
                        <FaMapMarkerAlt /> {item.country}
                      </Text>
                    </Box>
                  );
                })}
              </Resulter>
            </Box>
          )}
        </Box>
      </Box>
      <br />
      {/* <Box id="luftansa">
        <img style={{ borderRadius: "3px" }} src={luftansa} alt="" />
      </Box> */}
      <Home1 />
      <Middle6Part />
    </div>
  );
};

export const Resulter = styled.div`
  position: absolute;
  top: 100%;
  left: 10%;
  max-height: ${({ limit }) => `${limit * 34}px`};
  border: 1px solid grey;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  width: 80%;
  overflow: scroll;
`;

export default Homepage;
