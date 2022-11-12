import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ButtonSpecialImage, CrouselButtonWrapper } from '../../styles/sgcrouselbutton.styled';
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"

const Crouselbtn = () => {

  
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div  style={{fontSize:"45px",color:"rgb(56,159,221)",backgroundColor:"transparent",position:"absolute",right:"-18px",}}>
      <IoIosArrowDropright
           onClick={onClick}
        
        
       />
         </div>
     
     
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    
    return (
    <div  style={{fontSize:"45px",color:"rgb(56,159,221)",backgroundColor:"transparent" ,position:"absolute",left:"-18px",zIndex:"999"}}>
 <IoIosArrowDropleft
      onClick={onClick}
   
   
  />
    </div>
   
  
    );
  }
        
  
       let settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
       
        }
         
        

 
  return (
     <CrouselButtonWrapper>
        <h1>Reimagine Singapore With Tripoto</h1>
        
        <Slider {...settings}  style={{margin:"auto",alignItems:"center",width:"100%",display:"flex"}} >
          
            <div>
              <ButtonSpecialImage src="https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1663919630_flipbook_button.jpg">

              </ButtonSpecialImage>
            </div>
            <div>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704984_shop.jpg"></img>
            </div>
            <div>
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643966989_sg_web_series_button.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704774_events.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705006_whats_new_in_sg.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643967015_sg_for_foodies.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704928_singapore_street_art.jpg"></img>
            </div>
            <div>
             <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705019_videos.jpg"></img>
            </div>
            <div>
               <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704729_articles.jpg"></img>
            </div>
           
        </Slider>
        
        </CrouselButtonWrapper>
   
   
  )
}

export default Crouselbtn;


