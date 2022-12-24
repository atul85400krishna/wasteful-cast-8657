import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  HStack,
} from "@chakra-ui/react";
// https://raspberry-ray-tie.cyclic.app/mumbai
const Hotels = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  const [price,setPrice]=useState(1)
  const [page,setPage]=useState(1)
  const [total,setTotal]=useState(1)
  
  let getdata=()=>{
    setLoading(true);
    fetch(`https://raspberry-ray-tie.cyclic.app/mumbai/hotel?page=${page}&size=8&price=${price}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("hotels",res.records);
        setNotes(res.records)
        setTotal(res.total)
        console.log(res.total)
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }
  useEffect(() => {
   getdata()
  }, [price,page,total]);


  return (
    <>
      <div marginBottom="30px" paddingBottom="40px">
        <div marginBottom="30px">
          <Stack
            direction="row"
            spacing={4}
            align="center"
            marginBottom="30px"
            paddingBottom="40px"
          >
            <div>
              SORT :
              <select id="sort_price" class="cursor_" onChange={()=>{price==1 ?setPrice(-1):setPrice(1)}}>
                <option value={price}>All</option>
                <option value={1} >Low To High</option>
                <option value={-1}>High To Low</option>
              </select>
            </div>
          
            {/* <Button colorScheme="teal" variant="solid"  onClick={() => {asc(notes)}}>
              Button
            </Button> */}
          </Stack>
        </div>

        <div >
          <SimpleGrid
            spacing={10}
            templateColumns="repeat(auto-fill, minmax(260px, 1fr))"
            paddingBottom="35px"
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
                      <Stack
                        direction="row"
                        spacing={30}
                        justifyContent="space-between"
                        paddingBottom={30}
                      >
                        <Button
                          colorScheme="green"
                          variant="outline"
                          bg="teal.100"
                        >
                          Booking.com
                        </Button>
                        <NavLink to={`view/${note._id}`}>
                        <Button colorScheme="green" variant="outline">
                          Book Now
                        </Button>

                        </NavLink>
                      </Stack>
                    </Card>
                  </>
                 
                );
              })}
          </SimpleGrid>
        
        </div>
        <HStack marginBottom={20} display="flex" justifyContent="flex-end" >
          <Button disabled={page===1} onClick={()=>(setPage((pre)=>pre-1))  } bg="teal.200">Previous</Button>
          <Button >{page}</Button>
          <Button disabled={page===2}onClick={()=>(setPage((pre)=>pre+1)) } bg="teal.200">Next</Button>
        </HStack>
      </div>
    </>
  );
};
export default Hotels;
