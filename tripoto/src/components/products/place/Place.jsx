import React,{useState,useEffect} from 'react'
import { Card, CardHeader, CardBody, CardFooter,
Text,
Heading,
Button,
SimpleGrid,
Box,
Image,
Badge,
Stack

} from '@chakra-ui/react'
// https://raspberry-ray-tie.cyclic.app/mumbai
const Place = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  const getdata=()=>{
    setLoading(true);
    fetch("https://raspberry-ray-tie.cyclic.app/mumbai/place", {})
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
    <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(260px, 1fr))'>
    {loading && "Loading....."}
                {error && "something went wrong...."}
                {notes &&
                  notes.length > 0 &&
                  notes.map((note) => {
                    return (
                      <>
  <Card >
  <Box paddingBottom="4px" size="25%">
  <Image boxSize='200px' width="100%"  src={note.image} alt='Dan Abramov' />
</Box>
<CardHeader>
      <Heading size='md'> {note.title}</Heading>
</CardHeader>
<CardBody>
      <Text>{note.description}</Text>
</CardBody>
<Stack direction='row' textAlign="center" margin="auto" size="md" paddingBottom="10px" >
  <Badge variant='outline' colorScheme='green'>
    Default
  </Badge>
  <Badge variant='solid' colorScheme='green'>
    Success
  </Badge>
  <Badge variant='subtle' colorScheme='green'>
    Removed
  </Badge>
</Stack>
   </Card>
                       
                      </>
                    );
                  })}
 
  
</SimpleGrid>
      
    </>
  )
}

export default Place
