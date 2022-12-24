import React, { useState, useEffect,useMemo } from "react";
import axios from "axios"
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
const LIMIT = 10;

const totalPagesCalculator = (total, limit) => {
  const pages = [];
  for(let x = 1; x<= parseInt(total)/limit; x++){
    pages.push(x);
  }

  return pages;
}

const Hotel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  
//   const [users, setUsers] = useState([]);
// const [activePage, setActivePage] = useState(1);
// const [totalUsers, setTotalUsers] = useState(0);

//   useMemo(() => {
//     axios.get('http://localhost:8080/mumbai/hotel', {
//       params: {
//         page: activePage,
//         size: LIMIT
//       }
//     }).then(({data}) => {
//         setNotes(data.trip);
//       setTotalUsers(data.total);
//     }).catch(error => {
//       console.log(error.response);
//     })
//   }, [activePage])


  let getdata = () => {
    setLoading(true);
    fetch("http://localhost:8080/mumbai/hotel", {})
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
      setNotes(res)
      

        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    getdata();
  }, []);



  return (
    <>
      <div marginBottom="30px" paddingBottom="40px">
      

        <div>
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
                        <Button colorScheme="green" variant="outline">
                          Book Now
                        </Button>
                      </Stack>
                    </Card>
                    {/* <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        {activePage !== 1 && (
                          <li
                            className="page-item"
                            onClick={() => setActivePage(activePage - 1)}
                          >
                            <a
                              className="page-link"
                              href="javascript:void(null)"
                            >
                              Previous
                            </a>
                          </li>
                        )}
                        {totalPagesCalculator(totalUsers, LIMIT).map((page) => (
                          <li
                            className={`page-item ${
                              activePage === page ? "active" : ""
                            }`}
                            key={page}
                          >
                            <a
                              className="page-link"
                              href="javascript:void(null)"
                              onClick={() => setActivePage(page)}
                            >
                              {page}
                            </a>
                          </li>
                        ))}
                        {activePage !==
                          totalPagesCalculator(totalUsers, LIMIT).length && (
                          <li
                            className="page-item"
                            onClick={() => setActivePage(activePage + 1)}
                          >
                            <a
                              className="page-link"
                              href="javascript:void(null)"
                            >
                              Next
                            </a>
                          </li>
                        )}
                      </ul>
                    </nav> */}
                  </>
                  //     <>
                  //   <Box><Button colorScheme="green" variant="outline">
                  //   Book Now
                  // </Button></Box>
                  //     </>
                );
              })}
          </SimpleGrid>
        </div>
      </div>
    </>
  );
};
export default Hotel;
