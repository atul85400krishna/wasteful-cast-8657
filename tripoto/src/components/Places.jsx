import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import NextTrip from './NextTrip'
import {TopTravelCarousel} from "./TopTravelCarousel"

export const Places = () => {
  return (
    <div>
      <Box>
          <Box width={"85%"} margin={"auto"} height={"auto"} >
          <Heading marginBottom={"40px"} marginLeft={"5.5%"} size={"lg"}>Plan Your Next Trip Using Tripoto's Complete Destination Guides</Heading>
          <NextTrip/>
      </Box>
      <br />
      <br />
      <Box width={"85%"} margin={"auto"} height={"auto"}>
            <Heading marginBottom={"30px"} marginLeft={"5.5%"} size={"lg"}>Watch Tripoto's Top Travel Vlogs of the Week</Heading>
           <TopTravelCarousel/>
      </Box>
      </Box>
    </div>
  )
}
