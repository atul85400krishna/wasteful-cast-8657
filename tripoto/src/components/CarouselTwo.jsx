import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const CaraouselTwo = (props) => {

  const {image, id, para,by} = props

  return (

    <div>
     
        <Box className='content-div' >
            <img style={{"marginBottom":"10px"}} src={image} alt="" />
            <Text marginBottom={"15px"} fontWeight={"medium"} fontSize={"large"} >
                {para}
            </Text>
            <Box>
           <Text  alignItems={"center"} display={"flex"} fontSize={"md"}>
            {"By"} 
            <Text color={"white"}>{"X "}</Text>
            <Text color={"darkcyan"} fontWeight={"bold"}  fontSize={"small"} >
                {by}
            </Text>
            </Text>
            </Box>
        </Box>
        
    </div>
  )
}

export default CaraouselTwo