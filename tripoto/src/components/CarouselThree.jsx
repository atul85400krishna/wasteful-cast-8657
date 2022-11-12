import { Box } from "@chakra-ui/react";
import React from "react";

const CaraouselThree = (props) => {
  const { image } = props;

  return (
    <div>
      <Box className="content-div">
        <img src={image} alt="" />
      </Box>
    </div>
  );
};

export default CaraouselThree;
