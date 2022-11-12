import React from 'react'
import { SGIndividualVideoWrapper, SGVideoWrapper } from '../../styles/sgvideo.styled'
import {WhatsnewButtonWrapper} from '../../styles/whatsnew.styled'
import {BsFillArrowRightCircleFill} from "react-icons/bs";

const SGVideos = () => {
  return (
    <>
   <SGVideoWrapper>
    <SGIndividualVideoWrapper>
      
     
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284307_collector_a.jpg"></img>
    </SGIndividualVideoWrapper>
    <SGIndividualVideoWrapper>
     
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284332_foodie_b.jpg"></img>
    </SGIndividualVideoWrapper>
    <SGIndividualVideoWrapper>
    
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284462_socialiser.jpg"></img>
    </SGIndividualVideoWrapper>
   </SGVideoWrapper>
   <WhatsnewButtonWrapper >
   <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1756031/Image/1593440066_watch_more.jpg"></img>
   </WhatsnewButtonWrapper>

   </>
  )
}

export default SGVideos
