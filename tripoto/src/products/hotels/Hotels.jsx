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
const Hotels = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("https://raspberry-ray-tie.cyclic.app/mumbai/hotel", {})
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setNotes(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SimpleGrid
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(260px, 1fr))"
      >
        {loading && "Loading....."}
        {error && "something went wrong...."}
        {notes &&
          notes.length > 0 &&
          notes.map((note) => {
            return (
              <>
                <Card>
                  <Box paddingBottom="4px" size="25%">
                    <Image
                      boxSize="200px"
                      width="100%"
                      src={note.image}
                      alt="Dan Abramov"
                      borderRadius="10px 10px 0px 0px"
                    />
                  </Box>
                  <CardHeader>
                    <Heading size="md"> {note.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text size="md" fontSize="18px" color="red">
                      {note.places}
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
                      `Prcie $ {note.price} `
                    </Badge>
                  </Stack>
                  <Stack direction="row" spacing={30} justifyContent="space-between" paddingBottom={30}>
                  <Badge variant="outline" colorScheme="green" size="md" >
                  <Heading size="sm" textAlign='center' margin="auto"> Booking.com</Heading>
                    </Badge>
                    <Button colorScheme="green" variant="outline">
                      Book Now
                    </Button>
                  </Stack>
                </Card>
              
              </>
          //     <>
          //   <Box><Button colorScheme="green" variant="outline">
          //   Book Now
          // </Button></Box>
          //     </>
            );
          })}
      </SimpleGrid>
    </>
  );
};
export default Hotels;
