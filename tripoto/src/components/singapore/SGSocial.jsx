import React from 'react'
import { SGFirstButtonWrapper, SGHeadingWrapper, SGSecondButtonWrapper, SGSocialIconsWrapper, SGSocialWrapper } from '../../styles/sgsocial.styled'

const SGSocial = () => {
  return (
   <SGSocialWrapper>

    <SGFirstButtonWrapper>
      <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1756031/Image/1593440050_inspire_me_more.jpg"></img>
    </SGFirstButtonWrapper>
    <SGSecondButtonWrapper>
      <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1756031/Image/1594208937_web.jpg"></img>
    </SGSecondButtonWrapper>
    <SGHeadingWrapper><img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1789711/Image/1620218708_web_title.jpg"></img></SGHeadingWrapper>
    <SGSocialIconsWrapper>
     <img src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1621407897_2.jpg"></img>
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1621407910_3.jpg"></img>
      <img src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1621407922_4.jpg"></img>
    </SGSocialIconsWrapper>
   </SGSocialWrapper>
  )
}

export default SGSocial
