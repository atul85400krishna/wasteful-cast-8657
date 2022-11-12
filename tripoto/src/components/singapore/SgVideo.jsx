import React from 'react'
import { VideoWrapper } from '../../styles/singapore.styled'
const SgVideo = () => {
  return (
    <div>
        <VideoWrapper
        controls
        poster="https://cdn1.tripoto.com/media/filter/nxxl/img/319486/Image/1640238919_singapore_web.png"
        playsinline
        loop
        autoPlay
        preload="auto"
        muted={true}
      >

       <source
          src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/medium.mp4"
          type="application/x-mpegURL"
        />
        <source
          src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/medium.mp4"
          type="video/webm"
        />

        <source
          src="//stream.mux.com/ynvXtB01mp4Nor01SVD9TvRTsu00RQ95SPQ/low.mp4"
          type="video/mp4"
        />
      </VideoWrapper>
    </div>
  )
}

export default SgVideo
