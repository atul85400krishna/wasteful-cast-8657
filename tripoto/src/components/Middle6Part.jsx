// Travel and Learn with Tripoto's Mindful Retreats
import React from "react";
import { useEffect} from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import {GoLocation } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import "../CSS/Homepage.css"


export default function Middle6Part() {
  
    const [data,setData] =useState([]);


  useEffect(()=>{
        getData()
    },[])
    
    function getData(){
       axios.get("https://filthy-teal-narwhal.cyclic.app/atul").then((res)=>setData(res.data
       ))
    }


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div >
     
      <div style={{ position: "relative",width:"80%",margin:"auto",marginBottom:'30px' }}>
      <p id="middlepart_p" style={{fontSize:"30px",fontWeight:"700",marginTop:"20px",textAlign:"start",paddingLeft:"4%",marginBottom:"20px"}}>Travel and Learn with Tripoto's Mindful Retreats</p>
        <Carousel responsive={responsive}>  
            
            {data.map((item)=>(
                <div style={{width:"80%",margin:"auto"}} key={item.id}>
                    <img  style={{borderRadius:"5%",height:"100%",width:"100%"}} src={item.img} alt="" />
                    <p style={{color:"green",textAlign:"start"}}>Package</p>
                  <p style={{fontWeight:"700",marginTop:"5px",textAlign:"start",color:"black",fontSize:"17px"}}>{item.title}</p>
                  <div style={{display:"flex",marginTop:"5px",justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}><GoLocation style={{marginRight:"10px",marginTop:"2px",color:"green"}}/> <p style={{color:"teal",fontWeight:"600"}}> {item.place}</p> </div>
                    <div><div style={{color:"white",backgroundColor:"rgb(89, 181, 189)",borderRadius:"10px",padding:"3px 6px"}}>3D .2N</div></div>
                  </div>
                   <div style={{marginBottom:"10px",display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
                  <p style={{textAlign:"start",fontSize:"19px",fontWeight:"700"}}>₹ {item.cost} /person</p>
                  <Button><Link to={`/TripPage/${item.id}`}>Book Now</Link></Button>
                  </div>
                  <hr />
   
               
                </div>
            ))}
        </Carousel>
      </div>
    
    </div>
  );
}
