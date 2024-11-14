import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react'

import AliceCarousel, { DotsItem } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../scss/pages/videos.scss'
import IframeResizer from '@iframe-resizer/react'


const items = [
  <IframeResizer
    src="https://www.youtube.com/embed/G0pIKrOVTEI"
    license="GPLv3"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    width="100%"
    height="220px"
    scrolling="omit"
    checkOrigin={false}
  />,

  <IframeResizer
    src="https://www.youtube.com/embed/cTsWwbeezh8"
    license="GPLv3"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    width="100%"
    height="220px"
    scrolling="omit"
    checkOrigin={false}
  />,

  <IframeResizer
    src="https://www.youtube.com/embed/-eixf5-BFMQ"
    license="GPLv3"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    width="100%"
    height="220px"
    scrolling="omit"
    checkOrigin={false}
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
      container
      xs={10}
      sm={8}
      md={4}
      lg={4}
      style={{ height: "100%" }}
    >
      <Grid
        className="secondary"
        item
        xs={12}
        container
        justifyContent="center"
        alignContent='center'
        alignItems="center"
        style={{ height: "100%" }}
      >

        {/* headline */}
        <Grid
          item xs={12}
          style={{marginBottom: '50px'}}
        >
          <Typography 
          variant="h5" 
          align="center"
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
    </Grid>
  )
}

export default Videos