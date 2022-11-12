import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"
import { WebseriesWrapper, WeseriesCard } from "../../styles/sgarticles.styled";
const SGArticles = () => {
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
    <WebseriesWrapper>
      <div>
        <h1> Bookmark these articles before you fly to Singapore</h1>
        <text>
The streets and skyscrapers of Singapore inhabit wondrous experiences for travellers. From effervescent bars and exciting restaurants to stores where you can shop to your heart’s delight – here are our top suggestions for a memorable trip in Singapore.

 
        </text>
      </div>
      <Slider {...settings} style={{margin:"auto",alignItems:"center",width:"100%",display:"flex"}}>
        <WeseriesCard>
          <img src="https://static2.tripoto.com/media/filter/tst/img/279691/SpotDocument/1520606744_1520606739_regent_singapore_gallery_09_restaurant_manhatten.jpg"></img>
          <h3>7 Best Pubs In Singapore For A Stylish Night Out</h3>
          <h5> <span>By</span>Tripoto</h5>
        </WeseriesCard>
        <WeseriesCard>
          <img src="https://static2.tripoto.com/media/filter/tst/img/7372/TripDocument/1552982001_singapore_cover.jpeg"></img>
          <h3>The Ultimate Guide To Singapore's Nightlife: 8 Spots To Hit When The Sun Goes Down</h3>
          <h5> <span>By</span>Prateek Dham</h5>
        </WeseriesCard>

        <WeseriesCard>
          <img src="https://static2.tripoto.com/media/filter/tst/img/308363/TripDocument/1520421297_singapore1.jpeg"></img>
          <h3>Shopping In Singapore: The Hottest Shopping Destination IN Southeast Asia</h3>
          <h5> <span>By</span>Kadambari Bhatte</h5>
        </WeseriesCard>
        <WeseriesCard>
          <img src="https://static2.tripoto.com/media/filter/tst/img/4335/TripDocument/1589201984_1589201899_editorial_generic_co_thumbnail_overview_image_1460_822.jpg"></img>
          <h3>Gon ON An Endless Shopping Spree At These Delightful Markets In Singapore!</h3>
          <h5> <span>By</span>Gunjan Upreti</h5>
        </WeseriesCard>

        <WeseriesCard>
          <img src="https://static2.tripoto.com/media/filter/tst/img/208459/TripDocument/1552559595_coverrr.jpg"></img>
          <h3>Amazing Restaurants In Singapore You Must Check Out If You're A Vegetarian</h3>
          <h5> <span>By</span>Mahima Agrawal</h5>
        </WeseriesCard>
        <WeseriesCard>
          <img src="https://static2.tripoto.com/media/filter/tst/img/245847/TripDocument/1604652256_chinatown_mural_art.jpg"></img>
          <h3>Nine Resturants In SG Whose Home Delivered Dishes Will Transport You To The Places You Miss Most!</h3>
          <h5> <span>By</span>Akansha Magan</h5>
        </WeseriesCard>
      </Slider>
    </WebseriesWrapper>
  );
};

export default SGArticles
