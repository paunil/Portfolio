import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DragEventHandler } from 'react'
import Grid from '@mui/material/Grid';
import { useState } from 'react'

import AliceCarousel, { DotsItem } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../scss/pages/projects.scss'



const handleDragStart: DragEventHandler<HTMLImageElement> = (e) => e.preventDefault();
const style = {width:"100%"}

const items = [
  <img style={style} src="./images/login.png" alt="" onDragStart={handleDragStart} />,
  <img style={style} src="./images/password.png" alt="" onDragStart={handleDragStart} />,
  <img style={style} src="./images/countdown.png" alt="" onDragStart={handleDragStart} />,
  <img style={style} src="./images/shapes.png" alt="" onDragStart={handleDragStart} />,
];

const projects = [
  {
    title: "Password Generator",
    github: "https://github.com/paunil/password-generator",
    website: "https://password-generator.paulina.tech/",
  },
  {
    title: "Countdown Timer",
    github: "https://github.com/paunil/countdown-timer",
    website: "https://countdown-timer.paulina.tech/",
  },
  {
    title: "Login Form",
    github: "https://github.com/paunil/login-form",
    website: "https://login-form.paulina.tech/",
  },
  {
    title: "Shape Changer",
    github: "https://github.com/paunil/shape-changer",
    website: "https://shape-changer.paulina.tech/",
  },
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



function Projects() {

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


  return(
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
        alignContent="center"
        alignItems="center"
        style={{ height: "100%"}}
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
            PROJECTS
          </Typography>
        </Grid>


        {/* button previous */}
        <Grid item xs={1}>
          <div className="btn-prev" style={{cursor:"pointer"}} onClick={slidePrev}>&lang;</div>
        </Grid>


        {/* carousel */}
        <Grid className="head-text" item xs={10}>
          <AliceCarousel
            mouseTracking
            infinite
            disableButtonsControls
            items={items}
            activeIndex={thumbIndex}
            renderDotsItem={renderDotsItem}
          />

          {/* text on image  */}
          <Grid 
            className="text-on-image"
            container 
            alignContent="center" 
            justifyContent="center"
          >
            <Grid 
              item 
              xs={10}
              container
              justifyContent="center"
              style={{marginBottom:"20px"}}
            >
                {projects[thumbIndex].title}
            </Grid>

            <Grid item xs={6}>
              <Button 
                className="tertiary"
                fullWidth
                href={projects[thumbIndex].github}
                target="_blank" 
                style={{textTransform:"none"}}
              >
                &lt;code/&gt;
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button 
                fullWidth
                className="tertiary"
                href={projects[thumbIndex].website}
                target="_blank" 
                style={{textTransform:"none"}}
              >
                website
              </Button>
            </Grid>
          </Grid>

        </Grid>

        {/* button next */}
        <Grid item xs={1}>
          <div className="btn-next" style={{cursor:"pointer"}} onClick={slideNext}>&rang;</div>
        </Grid>
        
      </Grid>
    </Grid>
  )
}

export default Projects