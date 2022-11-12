import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const SpotLight = () => {
  return (
    <div>
      <Box id="spot-flex">
        <Box>
          <Heading style={{"marginBottom":"15px"}} size={"lg"}>
            In the Spotlight: Tripoto Creators of the Month - September 2022
          </Heading>
          <p style={{"marginBottom":"10px"}}>
            Tripoto Family is a community of travel content creators who create
            stunning photo blogs, engaging reels and videos as well as
            informative articles. Here are the most promising creators of the
            month who took us on a beautiful journey across India and the world
            through their content. Kudos to Tripoto's best creators for July
            2022!
          </p>
        </Box>
        <Box id="spot-flex-2">
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660286748_12.jpg" alt="" />
            </Box>
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290817_13.jpg" alt="" />
            </Box>
            <Box>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1660290935_11.jpg" alt="" />
            </Box>
        </Box>
      </Box>
    </div>
  );
};
