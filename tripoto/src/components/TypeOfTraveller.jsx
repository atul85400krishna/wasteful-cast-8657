import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const TypeOfTraveller = () => {
  return (
    <div>
        <Box id='traveller-flex'>
            <Box>
                <Box>
                    <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284466_1501572387_vedicvillage1.jpg" alt="" />
                </Box>
                <Heading  marginBottom={"10px"} marginTop={"7px"} color={"orange.600"} size={"xs"}>LUXURY STAYS</Heading>
                <Heading as={"h4"} marginBottom={"10px"} >Unwind At The Vedic Village Spa Resort In Kolkata</Heading>
                <Heading size={"sm"}>By <span style={{"fontSize":"14px", "color":"darkcyan"}} >Aakanksha Magan</span> </Heading>
            </Box>
            <Box>
                 <Box>
                    <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284743_1633518714_267103469.jpg" alt="" />
                </Box>
                <Heading marginBottom={"10px"} marginTop={"7px"} color={"orange.600"} size={"xs"}>LUXURY STAYS</Heading>
                <Heading as={"h4"} marginBottom={"10px"} >Unwind At The Vedic Village Spa Resort In Kolkata</Heading>
                <Heading size={"sm"}>By <span style={{"fontSize":"14px", "color":"darkcyan"}} >Aakanksha Magan</span> </Heading>
            </Box>
            <Box>
                 <Box>
                    <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661513462_1661510413_pench.jpg" alt="" />
                </Box>
                <Heading marginBottom={"10px"} marginTop={"7px"} color={"orange.600"} size={"xs"}>LUXURY STAYS</Heading>
                <Heading as={"h4"} marginBottom={"10px"} >Unwind At The Vedic Village Spa Resort In Kolkata</Heading>
                <Heading size={"sm"}>By <span style={{"fontSize":"14px", "color":"darkcyan"}} >Aakanksha Magan</span> </Heading>
            </Box>
            <Box>
                 <Box>
                    <img src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664285490_1504715462_29636144.jpg" alt="" />
                </Box>
                <Heading marginBottom={"10px"} marginTop={"7px"} color={"orange.600"} size={"xs"}>LUXURY STAYS</Heading>
                <Heading as={"h4"} marginBottom={"10px"} >Unwind At The Vedic Village Spa Resort In Kolkata</Heading>
                <Heading size={"sm"}>By <span style={{"fontSize":"14px", "color":"darkcyan"}} >Aakanksha Magan</span> </Heading>
            </Box>
        </Box>
    </div>
  )
}

export default TypeOfTraveller