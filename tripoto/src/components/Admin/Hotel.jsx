import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import AdminPage from './AdminPage'
function Hotel({image,type,tittle,location,price,brand_logo,brand_name}) {
 

 
  return (
    
    <div><TableContainer>
    <h1>List of Hotels</h1>
<Table variant='simple'>

{/* <TableCaption>List of Hotels</TableCaption> */}
<Thead>
<Tr>
{/* image,type,tittle,location,price,brand_logo,brand_name */}
<Th>Hotel Images</Th>
<Th>type</Th>
<Th >tittle</Th>
<Th>Location</Th>
<Th>Price</Th>
<Th>Logo</Th>
<Th>Brand Name</Th>
<Th>Remove</Th>
</Tr>
</Thead>
<Tbody>
<Tr>
<Td style={{width:"50%"}} ><img src={image} alt="img" style={{width:"50%"}} /></Td>
<Td>{type}</Td>
<Td >{tittle}</Td>
<Td >{location}</Td>
<Td >{price}</Td>
<Td ><img src={brand_logo} alt="brand_img"/></Td>
<Td>{brand_name}</Td>
<Td><Button  >Delete</Button></Td>

</Tr>

</Tbody>

</Table>
</TableContainer></div>
  )
}

export default Hotel