import React from 'react'
import { SGWhatsnewCard,SGWhatsnew, MainWhatsnew, WhatsnewButtonWrapper, SGWhatsnewCardWrapper } from '../../styles/whatsnew.styled'
import {BsFillArrowRightCircleFill} from "react-icons/bs";
const SGFoodies = () => {
  return (
    <SGWhatsnew>
    <div>
      <h1>Singapore For Foodies: All You Need To Know</h1>
      <text>
      From the uber-lux kitchens of Michelin-star restaurants to the hawker centres frequented by locals, find out about the best of Singapore’s food scene here.
      </text>
    </div>
    <SGWhatsnewCardWrapper>
    <SGWhatsnewCard>
     <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643375754_container_8_3.jpg"></img>
     <h3>Cook, Eat, Repeat With Chef Jeremy Nguee</h3>
    
    </SGWhatsnewCard>
    <SGWhatsnewCard>
     <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643375702_container_8_1.jpg"></img>
     <h3>10 Dishes Recommended By Top Celebrity Chef That You Need To Try On Your Next Visit To Singapore</h3>
    
    </SGWhatsnewCard>
    <SGWhatsnewCard>
     <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643375764_container_8_4.jpg"></img>
     <h3>Indian Foodie In Singapore? Bookmark These Dishes Recommended By A Local Celebrity Chef!</h3>
    
    </SGWhatsnewCard>
    <SGWhatsnewCard>
     <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643375738_container_8_2.jpg"></img>
     <h3>Dishes You Ought To Order In Singapore</h3>
    
    </SGWhatsnewCard>
    </SGWhatsnewCardWrapper>
    
    <WhatsnewButtonWrapper>
     <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1612855200_know_more_web.jpg"></img>
    </WhatsnewButtonWrapper>
    
    </SGWhatsnew>
  )
}

export default SGFoodies
