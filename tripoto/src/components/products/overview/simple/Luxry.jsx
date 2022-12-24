import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Box,
  Image,
  Badge,
  Stack,
} from "@chakra-ui/react";
// https://raspberry-ray-tie.cyclic.app/mumbai
const Luxry = () => {
    let reco = [
        {
          title: "Forigner Explores Mumbai ",
          image:
            "https://cdn1.tripoto.com/media/filter/tst/img/1/Image/1516512602_34412063.jpg",
    
          price: "5999",
          Tag: "VIDEO GUIDE",
        },
        {
          title: "Why It's Hard To Live Anywhere ",
          image:
            "https://cdn1.tripoto.com/media/filter/tst/img/1/Image/1516512686_25339753.jpg",
    
          price: "5999",
          Tag: "READ",
        },
        {
          title: "Dehene Village -A Hidden Monsoon",
          image:
            "https://cdn1.tripoto.com/media/filter/tst/img/1/Image/1516512713_103703163.jpg",
    
          price: "5999",
          Tag: "READ",
        },
        {
          title: "Best Hotels In Mumbai",
          image:
            "https://cdn1.tripoto.com/media/filter/tst/img/1/Image/1510074062_100058763_1.jpg",
    
          price: "5999",
          Tag: "STAY",
        },
       
      ];
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
        },
    
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (

    <>
     <Heading paddingBottom={10} size="lg" paddingLeft={0}>Best Luxury Hotels In Mumbai</Heading>
      <SimpleGrid
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(260px, 1fr))"
      >
        
          {reco.map((e) => {
            return (
              <>
                <Card>
                  <Box paddingBottom="4px" size="25%">
                    <Image
                      boxSize="200px"
                      width="100%"
                      src={e.image}
                      alt="Dan Abramov"
                      borderRadius="10px 10px 0px 0px"
                    />
                  </Box>
                  <CardHeader>
                    <Heading size="md"> {e.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text size="md" fontSize="18px" color="red">
                      {e.places}
                    </Text>
                  </CardBody>
                  <Stack
                    direction="row"
                    textAlign="center"
                    margin="auto"
                    size="md"
                    paddingBottom="10px"
                  >
                    <Badge variant="outline" colorScheme="green" size="md">
                      `Prcie $ {e.price} `
                    </Badge>
                  </Stack>
                 
                </Card>
              
              </>
       
            );
          })}
      </SimpleGrid>
    </>
  );
};
export default Luxry;