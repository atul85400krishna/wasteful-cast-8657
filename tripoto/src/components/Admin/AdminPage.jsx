import React from 'react'
import {
    FormControl,
    FormLabel,
   
    FormHelperText,
    Input,
    Select,
  } from '@chakra-ui/react'
function AdminPage() {
  return (
    <FormControl isRequired style={{width:"30%",marginLeft:"40%"}} >
    <FormLabel>Enter Image </FormLabel>
    <Input placeholder='Enter Image URL' />
    <FormLabel>Enter Type</FormLabel>
    <Input placeholder='Enter Type' />
    <FormLabel>Enter Tittle</FormLabel>
    <Input placeholder='Enter Tittle' />
    <FormLabel>Enter Location</FormLabel>
    <Input placeholder='Enter Location' />
    <FormLabel>Enter Price </FormLabel>
    <Input placeholder='First Price' />
    <FormLabel>Enter Brand Logo </FormLabel>
    <Input placeholder='Enter Brand Logo' />
    <FormLabel>Enter Brand name </FormLabel>
    <Input placeholder='Enter Brand name' />
  <Input type="submit" />
  </FormControl>
//     <Select  placeholder='Select Country'>
//     <option value='option1'>India</option>
//     <option value='option2'>Dubai</option>
//     <option value='option3'>Singapur</option>
//     <option value='option4'>Itli</option>
//     <option value='option5'>Malesiya</option>

//   </Select>
//     <FormControl>
//     <FormLabel></FormLabel>
//     <Input type='email' />
//     <FormHelperText>We'll never share your email.</FormHelperText>
//   </FormControl>

  )
}

export default AdminPage