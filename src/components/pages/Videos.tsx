import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { useState } from 'react'

import AliceCarousel, { DotsItem } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../scss/pages/videos.scss'


const items = [
  <iframe
    width="100%"
    src="https://www.youtube.com/embed/G0pIKrOVTEI"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />,

  <iframe
    width="100%"
    src="https://www.youtube.com/embed/cTsWwbeezh8"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />,

  <iframe
    width="100%"
    src="https://www.youtube.com/embed/-eixf5-BFMQ"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />,
]

const renderDotsItem = (e: DotsItem) => {
  const dotStyle = {
    margin: '0px 10px',
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: e.isActive ? '#383838' : 'lightgrey',
    cursor: 'pointer'
  }
  return <div style={dotStyle}></div>
}



function Videos() {

  const [thumbIndex, setThumbIndex] = useState<number>(0)

  const slidePrev = () => {
    if (thumbIndex > 0) {
        setThumbIndex((i) => i - 1)
    } else {
      setThumbIndex(items.length - 1)
    }
  }

  const slideNext = () => {
    if (thumbIndex < items.length - 1) {
        setThumbIndex((i) => i + 1)
    } else {
      setThumbIndex(0)
    }
  }

  
  return (
    <Grid
      item
      xs={10}
      container
      justifyContent="center"
      alignItems="center"
      style={{ padding: "15% 0%" }}
    >

      {/* headline */}
      <Grid item xs={12}>
        <Typography 
        variant="h5" 
        align="center"
        style={{ paddingBottom: "8%"}}
        >
          WATCH ME CODE
        </Typography>
      </Grid>


      {/* button previous */}
      <Grid item xs={1}>
        <div className="btn-prev" style={{cursor:"pointer"}} onClick={slidePrev}>&lang;</div>
      </Grid>
      

      {/* carousel */}
      <Grid item xs={10}>
        <AliceCarousel
          mouseTracking
          infinite
          disableButtonsControls
          items={items}
          activeIndex={thumbIndex}
          renderDotsItem={renderDotsItem}
        />
      </Grid>


      {/* button next */}
      <Grid item xs={1}>
        <div className="btn-next" style={{cursor:"pointer"}} onClick={slideNext}>&rang;</div>
      </Grid>

    </Grid>
  )
}

export default Videos