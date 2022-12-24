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

const Trip = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  let getdata=()=>{
    setLoading(true);
    fetch("https://raspberry-ray-tie.cyclic.app/mumbai/trip", {})
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
  }
  useEffect(() => {
   getdata()
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
                  <CardBody>
                    <Text  color="red" paddingLeft="0px">
                      {note.Tag}
                    </Text>
                  </CardBody>
                  <CardHeader>
                    <Heading size="sm"> {note.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text
                      size="md"
                      fontWeight={13}
                      fontStyle="bold"
                      noOfLines={[1, 2, 3]}
                    >
                      {note.description}
                    </Text>
                  </CardBody>
                  <Stack
                    direction="row"
                    textAlign="center"
                    margin="auto"
                    size="md"
                    paddingBottom="10px"
                  >
                    <Badge variant="outline" colorScheme="green">
                      Default
                    </Badge>
                    <Badge variant="solid" colorScheme="green">
                      Success
                    </Badge>
                    <Badge variant="subtle" colorScheme="green">
                      Removed
                    </Badge>
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

export default Trip;
