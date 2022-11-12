import React, { useContext, useEffect, useState } from "react";
import {
  BeachGridWrapper,
  BeachWrapper,
  VlogWrapper
 
} from "../../styles/beaches.styled";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import Topbeach from "./Topbeach";
import Package from "./Package";
import Comprehensive from "./Comprehensive"
import { ShowContext } from "../../Context/ShowContext";
const Beach = () => {
  const {show,setShow} = useContext(ShowContext)
  const [beachgrid, setBeachgrid] = useState([]);
  const [vlogData, setVlogData] = useState([]);
  //change
  useEffect(() => {
    axios
      .get("https://tripoto-api-demo.herokuapp.com/topbeach")
      // .get("https://tripoto-api-demo.herokuapp.com/vlogbeach")
      .then((res) => {
        setBeachgrid(res.data.TopBeach);
        // setVlogData(res.data.VlogBeach);
  
      });
  }, []);

  //change end
  useEffect(() => {
    axios
      // .get("https://tripoto-api-demo.herokuapp.com/topbeach")
      .get("https://tripoto-api-demo.herokuapp.com/vlogbeach")
      .then((res) => {
        // setBeachgrid(res.data.TopBeach);
        setVlogData(res.data.VlogBeach);
  
      });
  }, []);
  useEffect(()=>{
    setShow(true)
  },[])

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div  style={{fontSize:"45px",color:"rgb(56,159,221)",backgroundColor:"transparent",position:"absolute",right:"-18px"}}>
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
    <BeachWrapper>
      <br />
      <br />
      <br />
      <h1 style={{ }}>Beaches</h1>
      <text >
        The crunch of white sand beneath your feet and the thundering ocean
        beckoning you into its cool waters. Explore all you need to know about
        taking a trip to the beach!
      </text>
      <h1>Tripoto's Top Beach Picks for January, February, March 2022</h1>
      <BeachGridWrapper>
        {beachgrid &&
          beachgrid.map((ele) => (
            <div key={ele._id}>
              <img src={ele.image}></img>
              <h3>{ele.title}</h3>
              <h5>
                <span>By</span>
                {ele.by}
              </h5>
            </div>
          ))}
      </BeachGridWrapper>

       <Topbeach/>
       <Package/>
       <Comprehensive/>
      <div>
        <h1 style={{ fontFamily: "sans-serif" }}>
          Top Tripoto Vlogs for Beaches This Week
        </h1>
        <VlogWrapper>
          {vlogData &&
            vlogData.map((ele) => (
              <div key={ele._id}>
                <img src={ele.image}></img>
                <h3>{ele.title}</h3>
                <h5>
                  <span>By</span>
                  {ele.by}
                </h5>
              </div>
            ))}
        </VlogWrapper>
      </div>
    </BeachWrapper>
  );
};

export default Beach;
