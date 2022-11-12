import React, { useState } from 'react'
import "../Admin/Admin.css"
import {
    FormControl,
    FormLabel,
   
   
    Input,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,

  } from '@chakra-ui/react'
  const initialAtate = {
    image: "",
    type: "",
    tittle: "",
    location:"",
    price:"",
    brand_logo:"",
    brand_name:"",
};


function AdminPage() {
  const [data, setData] = useState(initialAtate);
  const [show, setShow] = useState([]);
  // const [arr,setArr]=useState([])


  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (data) => {
    // setShow({...data})
    const newArr = [...show, data];
    setShow(newArr);
 localStorage.setItem("key_data",JSON.stringify(newArr))
    console.log(setShow);
  };

  const { image,type,tittle,location,price,brand_logo,brand_name} = data;
  return (
    <div>
    <FormControl isRequired className='kp_form' style={{width:"30%",marginLeft:"40%"}} >
    <FormLabel>Enter Image </FormLabel>
    <Input placeholder='Enter Image URL'  
    type="url"
     name="image"
    value={image}
        onChange={handleChange}/>
    <FormLabel>Enter Type</FormLabel>
    <Input placeholder='Enter Type' 
      name="type"
      value={type}
      onChange={handleChange}/>
    <FormLabel>Enter Tittle</FormLabel>

    <Input placeholder='Enter Tittle'
      name="tittle"
      value={tittle}
      onChange={handleChange} />
    <FormLabel>Enter Location</FormLabel>
    <Input placeholder='Enter Location'
      name="location"
      value={location}
      onChange={handleChange} />
    <FormLabel>Enter Price </FormLabel>
    <Input placeholder='First Price'
      name="price"
      value={price}
      onChange={handleChange} />
    <FormLabel>Enter Brand Logo </FormLabel>
    <Input placeholder='Enter Brand Logo'
      name="brand_logo"
      type="url"
      value={brand_logo}
      onChange={handleChange} />
    <FormLabel>Enter Brand name </FormLabel>
    <Input placeholder='Enter Brand name' 
      name="brand_name"
      value={brand_name}
      onChange={handleChange}/>
  <Input type="submit" style={{color:"white",backgroundColor:"blue",marginTop:"1rem",width:"95%"}} 
  onClick={handleSubmit}/>
  </FormControl>

{/* //data */}

<div>

            <TableContainer>
  <Table variant='simple'>
    <TableCaption>List of Hotels</TableCaption>
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
      </Tr>
    </Thead>
    {show.map((item) => {
          return (
    <Tbody  key={item.id} >
      <Tr>
        <Td  ><img src={image} alt="img" style={{width:"50%"}} /></Td>
        <Td>{type}</Td>
        <Td >{tittle}</Td>
        <Td >{location}</Td>
        <Td >{price}</Td>
        <Td ><img src={brand_logo} alt="brand_img"/></Td>
      <Td>{brand_name}</Td>

      </Tr>
     
    </Tbody>
    );
  })}
  </Table>
</TableContainer>
            {/* // <div key={item.id}>
              
            //  <img src={image} alt="img"/> <p>{type}</p>  <p>{tittle}</p>
            //  <p>{location}</p> <p>{price}</p> <img src={brand_logo} alt="brand_img"/> <p>{brand_name}</p>
            // </div>
         */}
</div>


  </div>

  )
}

export default AdminPage