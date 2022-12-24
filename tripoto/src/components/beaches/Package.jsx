import React, { useState, useEffect } from "react";
import axios from "axios";
// import Carousel from "react-multi-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import {
  DaybuttonWrapper,
  Getquotes,
  LoactionWrapper,
  LogoImage,
  LogoWrapper,
  PersonWrapper,
  PriceWrapper,
  TitleWrapper,
  WebseriesWrapper,
  WeseriesCard,
} from "../../styles/beachpackage.styled";
import {FaMapMarkerAlt} from "react-icons/fa";
import { PackageWrapper } from "../../styles/beachpackage.styled";
import { Link } from "react-router-dom";

const Package = () => {
  const [packag, setPackage] = useState([]);
  useEffect(() => {
    axios
      .get("https://filthy-teal-narwhal.cyclic.app/atul")
      .then((res) => {
        setPackage(res.data);
        setVlogData(res.data);
        // console.log(res.data);
      });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          fontSize: "45px",
          color: "rgb(56,159,221)",
          backgroundColor: "transparent",
          position: "absolute",
          right: "-18px",
          bottom:"285px"
        }}
      >
        <IoIosArrowDropright onClick={onClick} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      //  <div style={{ position: "relative",width:"80%",margin:"auto",marginBottom:'30px' }}>
      // <p id="middlepart_p" style={{fontSize:"30px",fontWeight:"700",marginTop:"20px",textAlign:"start",paddingLeft:"4%",marginBottom:"20px"}}>Travel and Learn with Tripoto's Mindful Retreats</p>
      //   <Carousl responsive={responsive}> 
      <div
        style={{
          fontSize: "45px",
          color: "rgb(56,159,221)",
          backgroundColor: "transparent",
          position: "absolute",
          left: "-18px",
          zIndex: "999",
          bottom:"285px"
        }}
      >
        
        <IoIosArrowDropleft onClick={onClick} />
      </div>
    );
  }

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <WebseriesWrapper>
      <div>
        <h1>Packages</h1>
      </div>
      <Slider
        {...settings}
        style={{
          margin: "auto",
          alignItems: "center",
          width: "100%",
          display: "flex",
        }}
      >
        {packag &&
          packag.map((ele) => (
            <WeseriesCard key={ele._id}>
              <img src={ele.img}></img>
              {/* <PackageWrapper>{ele.type}</PackageWrapper> */}
              {/* <PackageWrapper>hello</PackageWrapper> */}
              <TitleWrapper>{ele.title}</TitleWrapper>
              <LoactionWrapper>
                <LogoWrapper>
                <FaMapMarkerAlt/>
                <h5>{ele.place}</h5>
                </LogoWrapper>
                <DaybuttonWrapper>
                  {/* {ele.button}
                   */}
                2D-1N
                </DaybuttonWrapper>
        
              </LoactionWrapper>
               <PriceWrapper>
                <PersonWrapper>
                <h3>{ele.cost}</h3>
                {/* <h6>{ele.person}</h6> */}
                <h6>/Person</h6>
                </PersonWrapper>
                <Getquotes>
                {/* {ele.quotes} */}
                <Link to={`/TripPage/${ele.id}`}>Book Now</Link>
                </Getquotes>
              
               </PriceWrapper>
             
              <hr style={{marginTop:"5px"}}></hr>
              <LogoImage>
              <img src={ele.brand_logo}></img>
              <h3>{ele.brand_name}</h3>
              </LogoImage>
            
            </WeseriesCard>
          ))}
      </Slider>
    </WebseriesWrapper>
  );
};

export default Package;
