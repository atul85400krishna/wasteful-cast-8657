
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ImageCrouselWrapper } from '../../styles/singapore.styled'
import { BorderedCrouselWrapper } from '../../styles/borderedcrousel.styled';
const BorderedCrousel = () => {

    const [image,setImage]=useState([])
    useEffect(()=>{
      axios.get(" http://localhost:8070/data").then((res)=>{
         setImage(res.data[0].BorderedCrousel)
      })
    },[])
  
   
  
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800
      
      }
   
  return (
    <BorderedCrouselWrapper>
        <h1>Find Your Passion, Find Your Tribe</h1>
        <text>What do you seek when you travel? Striking collectibles, flavours to make your taste buds sing or a drink that can be your best pal for the night? In Singapore, you can find your passion and your tribe no matter where you go.</text>
      <Slider {...settings} style={{marginTop:"15px"}}>
      {
        image && image.map((ele)=><img key={ele.id} src={ele.image}></img>)
      }
      </Slider>
    </BorderedCrouselWrapper>
  
 
   
  )
}

export default BorderedCrousel
