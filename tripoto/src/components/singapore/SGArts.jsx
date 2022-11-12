import React from 'react'
import {WhatsnewButtonWrapper} from '../../styles/whatsnew.styled'
import { WebseriesWrapper, WeseriesCard } from "../../styles/sgwebseries";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"
const SGArts = () => {
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
    slidesToShow: 3,
    slidesToScroll: 3,
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
  };
  return (
    <>
    <WebseriesWrapper>
    <div>
      <h1>Head out and explore Singapore’s Street Art</h1>
      <text>
      The streets of Singapore have a way of coming alive! Read on to find out the most aesthetic neighbourhoods that will leave you inspired.
      </text>
    </div>
    <Slider {...settings} style={{margin:"auto",alignItems:"center",width:"100%",display:"flex"}}>
      <WeseriesCard>
        <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643104912_1641727053_awli22_black_full_1.png"></img>
        <h3>Cook, Eat, Repeat With Chef Jeremy Nguee</h3>
      </WeseriesCard>
      <WeseriesCard>
        <img  src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643104742_1626404165_img_2855.jpg"></img>
        <h3>10 Dishes Recommended By Top Celebrity Chef That You Need To Try On Your Next Visit To Singapore</h3>
      </WeseriesCard>

      <WeseriesCard>
        <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643104814_1632805706_img_7188.jpg"></img>
        <h3>Indian Foodie In Singapore? Bookmark These Dishes Recommended By A Local Celebrity Chef!</h3>
      </WeseriesCard>
    
      <WeseriesCard>
        <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643104921_1521723509_artwalk_cattleland_resized.jpg"></img>
        <h3>Singapore:The City Where Art Collides With Culture</h3>
      </WeseriesCard>

      <WeseriesCard>
        <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643883515_1610375240_photo_1571063769585_bdaaeba1e48f.jpg"></img>
        <h3>Singapore:The Artistic Abode</h3>
      </WeseriesCard>
    </Slider>
 
  </WebseriesWrapper>
 
     <WhatsnewButtonWrapper>
    <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1610972019_web_exp_more_1.jpg"></img>
     </WhatsnewButtonWrapper>

  </>
  )
}

export default SGArts
