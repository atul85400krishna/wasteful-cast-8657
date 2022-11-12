import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box,Button,Heading, Image, Input, Textarea } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { TopTravelCarousel } from './TopTravelCarousel';

function SingleCardPage() {
    const params=useParams([])
    const [sPage,setSPage] =useState([]);
    const getPageData =()=>axios.get(`https://tripot.herokuapp.com/partnerships/${params.id}`)
                            .then(r=>setSPage(r.data.PartnershipsData)).catch(err=>console.log(err));
    useEffect(()=>{
        getPageData();
    },[params.id])
  return (
    <div>
        <Box bg="blue.400" h={"60px"} ></Box>

        <Box display={"flex"} 
            w={"90%"} 
            m={"auto"} 
            gap={10} 
            mt={"10px"} 
            justifyContent={"center"}
            >
            <Box w={"628px"} >
                <Box display="flex" justifyContent="left" gap="1" fontSize="8px">
                    <Image w="10px" h="10px" src="https://cdn1.tripoto.com/assets/2.9/img/logo/mini-logo.png" /> 
                    <Box>{">"}</Box>
                    <Box color="blue">Coonoor Travel Guide</Box>
                    {">"}
                    <Box color="blue">Coonoor Trip</Box>
                     {">"} 
                     {sPage.title}
                </Box>
                <Heading fontSize="24px">{sPage.title}</Heading>
                <Box bg="cyan.50" display="flex" p="10px 0">
                    <Box borderRadius="50%" m="5px 0" w="30px" h="32px"  align="center" border="1px solid blue">
                        <Image borderRadius="50%" w="30px" h="30px"  p="1px" src='https://i.pinimg.com/originals/66/d2/f6/66d2f6bcc82586ec07c7288ce558745b.jpg' />
                    </Box>
                    <Box display="flex" w="500px" justifyContent="space-between" >
                        <Box p="15px 0" ml="5px" fontSize="12px" color="blue">By Masai Student</Box>
                        <Box>
                            <Box p="10px 0" >
                                <Image w="40px" h="30px" mr="5px" src='https://th.bing.com/th/id/R.dc210971c6940c5f52f2a8228e6cd4e1?rik=TgWFyN31YyW9sw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flike-transparent-background%2flike-transparent-background-22.png&ehk=KMDfO9rriVtVtv64bbrrgsKNDCdrD%2bkFiv9gag0A1%2bo%3d&risl=&pid=ImgRaw&r=0'/>
                            </Box>
                            <Box></Box>
                        </Box>
                    </Box>
                    <Box m="0 10px" borderLeft="1px solid gray" justifyContent="right">
                        <Box fontSize="16px" m="0 10px" >3K</Box>
                        <Box fontSize="16px" m="0 10px" >Views</Box>
                    </Box>
                </Box>
                <Box mt="2rem" fontWeight="500">
                    {sPage.discreption}
                </Box>
                <Image mt="2rem" src={sPage.image_top} />
                <Heading mt="2rem"  fontSize="20px">About the property</Heading>
                <Box mt="1rem" fontWeight="500">
                    {sPage.about_p1}
                </Box>
                <Box mt="1rem" fontWeight="500">
                    {sPage.about_p2}
                </Box>
                <Box mt="1rem" fontWeight="500">
                    {sPage.about_p3}
                </Box>
                <Image mt="2rem" src={sPage.image_mid} />
                {
                  sPage.about_p4!=="" &&<Box mt="1rem" fontWeight="500">
                   {sPage.about_p3}
               </Box> 
                }
                <Heading mt="2rem"  fontSize="20px">Activities you’d love</Heading>
                <Box mt="1rem" fontWeight="500">
                    {sPage.activity_p1}
                </Box>
                <Image mt="2rem" src={sPage.image_bottom} />
                <Box mt="1rem" fontWeight="500">
                    {sPage.activity_p2}
                </Box>
                <Box mt="1rem" fontWeight="500">
                    {sPage.activity_p3}
                </Box>
                <Box m="1rem 0" display="flex">
                    <Box fontSize="16px" fontWeight="600">Location: </Box>
                    <Box ml="5px" fontSize="16px">264, Off Gymkhana Gold Link Road, Fingerpost, Ooty, Tamil Nadu 643006.</Box>
                </Box>
                <Box m="1rem 0" display="flex">
                    <Box fontSize="16px" fontWeight="600">Price: </Box>
                    <Box ml="5px" fontSize="16px">Prices range from Rs 540 per night for a dorm to Rs 2,700 for a private room.</Box>
                </Box>
                <Box m="1rem 0" display="flex">
                    <Box fontSize="16px" fontWeight="600">Amenities: </Box>
                    <Box ml="5px" fontSize="16px">24X7 check-in facility, lockers, laundry, linen, luggage room, hot water, indoor games, common room, bonfire and the bonus - it’s pet-friendly, so bring along your furry friend for just Rs 500 per day.</Box>
                </Box>
                <Box m="1rem 0" display="flex">
                    <Box fontSize="16px" fontWeight="600">Book your stay </Box>
                    <Box ml="5px" color="blue.400" cursor="pointer" fontSize="16px" fontWeight="600"><i>here.</i></Box>
                </Box>
                <Box m="1rem 0" display="flex">
                    <Box fontSize="16px" fontWeight="600">In association with </Box>
                    <Box ml="5px" color="blue.400" cursor="pointer" fontSize="16px" fontWeight="600"><i>goSTOPS</i></Box>
                </Box>
                <Box fontSize="16px" fontWeight="600"><i>Earn credits and travel for free with Tripoto's weekend getaways, hotel stays and vacation packages!</i> </Box>
                <Box m="1rem 0" display="flex">
                    <Box fontSize="16px" fontWeight="600">Explore the best of travel inspiration on</Box>
                    <Box ml="5px" color="blue.400" cursor="pointer" fontSize="16px" fontWeight="600"><i>Tripoto Instagram!</i></Box>
                </Box>
                <Box p="1rem" boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                    <Box display="flex" justifyContent="space-between" p="1rem">
                        <Box fontSize="20px" fontWeight="800px">1 Comment(s)</Box>
                        <Box fontSize="12px">sort by: 
                            <select name="New" id="">
                                <option textSize="10px" value="new">Newest</option>
                                <option value="old">Oldest</option>
                            </select>
                        </Box>
                    </Box>
                    <Textarea style={{margin:"1rem",
                                    width:"560px", 
                                    border:"1px solid gray",
                                    height:"100px", 
                                    textAlign:"start"
                                    }} type="text" placeHolder="Add a comment ..." />
                    <Button ml="510px" w='60px' h="30px" color="white" bg="blue.500">Post</Button>
                    <Box display="flex">
                        <Image borderRadius="40%" h="40px" w="50px" src='https://64.media.tumblr.com/d13cdf099ec7d8d272394df8c6004964/tumblr_n5l16jid8j1sqf5tdo1_500.jpg'/>
                        <Box ml="5px" p="5px">Dr. Hulk</Box>
                    </Box>
                    <Box m="10px">
                    Thank you so much for share this me .... Real estate transactions are both incredibly exciting and occasionally stressful periods in your life. Whether you're buying your first house or an investment property, Bluestone convincing will help make the process simple. https://bluestoneconveyancing.com.au/
                    </Box>
                    <Box gap="1" display="flex" color="gray" ml="10px" fontSize="12px">Sat 09 24 22, 15:34  · <Box color="blue">Reply</Box>·<Box color="blue">Report</Box>  </Box>
                </Box>



            </Box>
            <Box w={"250px"} p={"2px 10px"} h="600px" borderRadius="8px"
                 boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                 >
                <Heading m="10px 0" fontSize={"16px"}>Want to book a similar trip?</Heading>
                <Input fontSize="10px" type={"email"}  style={{width:"235px", marginTop:"10px"}} placeHolder={"Email"} required/>
                <Input fontSize="10px" type={"text"}  style={{width:"235px",marginTop:"10px"}} placeHolder={"Full Name"} required/>
                <Input fontSize="10px" type={"number"}  style={{width:"235px",marginTop:"10px"}} placeHolder={"Contact Number"} required/>
                <Input fontSize="10px" type={"date"}  style={{width:"235px",marginTop:"10px"}} placeHolder={"Departure Date"} required/>
                <Input fontSize="10px" type={"text"}  style={{width:"235px",marginTop:"10px"}} placeHolder={"Departure City"} required/>
                <Input fontSize="10px" type={"text"}  style={{width:"235px",marginTop:"10px"}} placeHolder={"Destination"} required/>
                <Input fontSize="10px" type={"text"}  style={{width:"235px",marginTop:"10px"}} placeHolder={"Budget Per Person"} required/>
                <select  style={{width:"235px",marginTop:"10px"}} >
                    <option value="Praferred Hotel Category">Praferred Hotel Category</option>
                    <option value="1">2 Star</option>
                    <option value="2">3 Star</option>
                    <option value="3">4 Star</option>
                    <option value="4">Don't need a hotel</option>
                </select>
                <Box fontSize={"16px"} flex="1" marginTop="5px" fontWeight={"600"}>Flights Booked?
                <br/>
                <input type="radio" /><lable style={{marginLeft:"10px"}}>Yes</lable>
                <br />
                <input type="radio" /><lable style={{marginLeft:"10px"}}>No</lable>
                </Box>
                <Button color={"white"} mt="10px" w={"235px"} bg={"blue"}>Request Callback</Button>
                <Box fontSize="9px" m={"10px 0"} color={"gray"}>I accept the Terms of Use and Privacy Policy of Tripoto.</Box>
            </Box>
        </Box>
        <Box w="930px" m="auto" > 
        <Heading mt="2rem"  fontSize="20px">More Stories For Coonoor</Heading>
        <TopTravelCarousel/>
        </Box>
    </div>
  )
}

export default SingleCardPage