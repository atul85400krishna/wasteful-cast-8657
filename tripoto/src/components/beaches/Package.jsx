import React, { useState, useEffect } from "react";
import axios from "axios";
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

const Package = () => {
  const [packag, setPackage] = useState([]);
  useEffect(() => {
    axios
      .get('https://tripoto-api-demo.herokuapp.com/package')
      .then((res) => {
        setPackage(res.data.PackageData
          );
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
              <img src={ele.image}></img>
              <PackageWrapper>{ele.type}</PackageWrapper>
              <TitleWrapper>{ele.title}</TitleWrapper>
              <LoactionWrapper>
                <LogoWrapper>
                <FaMapMarkerAlt/>
                <h5>{ele.location}</h5>
                </LogoWrapper>
                <DaybuttonWrapper>
                  {ele.button}
                </DaybuttonWrapper>
        
              </LoactionWrapper>
               <PriceWrapper>
                <PersonWrapper>
                <h3>{ele.price}</h3>
                <h6>{ele.person}</h6>
                </PersonWrapper>
                <Getquotes>
                {ele.quotes}
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
