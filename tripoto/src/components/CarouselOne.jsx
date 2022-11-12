import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const CarouselOne = (props) => {

  const {image, id, para,} = props

  return (

    <div>
      <Link to={`/partnership/${id}`} >
        <Box className='content-div' >
            <img style={{"marginBottom":"10px"}} src={image} alt="" />
            <Heading as={"h5"} size={"xs"} style={{"marginBottom":"10px"}} >
                {"GO STOPS"}
            </Heading>
            <Heading as={"h4"} size={"lg"} >
                {para}
            </Heading>
        </Box>
        </Link>
    </div>
  )
}

export default CarouselOne