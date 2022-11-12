import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { EventImageWrapper, SGEventWrapper } from '../../styles/sgevents.styled';
const SGEvents = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://tripoto-api-demo.herokuapp.com/events").then((res)=>{
      setData(res.data.Events)
    })
  },[]);

  return (
    <>
      <SGEventWrapper>

          <h1>Festivals You Can't Miss in Singapore</h1>
          <text>Whether it’s the festive celebration of Chinese New Year or the roar of Formula 1 cars, there’s always a party going on somewhere on the island. These are some of the top annual festivals and events in Singapore from January to December that should be on your travel calendar.</text>

        <EventImageWrapper>
        {
          data && data.map((ele)=><img key={ele._id} src={ele.link}></img>)
        }
        </EventImageWrapper>
       
      </SGEventWrapper>
    </>
  )
}

export default SGEvents
