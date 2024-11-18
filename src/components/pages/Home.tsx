import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { faLinkedin, faGithubSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../scss/pages/home.scss'
import '../../scss/common/colors.scss'
import { motion } from 'framer-motion'


function Home() {
  return(
    <Grid
      className="secondary"
      id="home-container"
      container    
      justifyContent="center"
      style={{ height: "100%" }}
    >
      {/* image */}
      <motion.img 
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        width="150px"
        height="150px" 
        src="./images/hexagon.png" 
        alt="" 
        style={{textTransform:"none", marginBottom:"5%",}}
      />

      {/* name and title */}
      <Grid item xs={12}>
        <Typography 
          align="center" 
          variant="h4"
        >
          PAULINA ENGBERG
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography 
          align="center"
        >
          FRONTEND DEVELOPER
        </Typography>
      </Grid>

      {/* email button */}
      <Grid 
        item 
        xs={12} 
        sm={8}
        md={12}
        lg={10}
        container 
        justifyContent="center"
      >
        <Button 
          fullWidth
          className="primary"
          href="mailto:contact@paulina.tech"
          type=""
          style={{
            textTransform:"none", 
            margin:"10% 10% 5% 10%", 
            fontWeight:600,
          }}
        >
          Email: contact@paulina.tech
        </Button>
      </Grid>

      {/* social media icons */}
      <Grid 
        item 
        xs={5} 
        lg={4}
        container 
        justifyContent="space-evenly"
      >
        <a 
          href="https://www.linkedin.com/in/paunil/" 
          target="_blank" 
          rel="noreferrer"
        >
          <FontAwesomeIcon 
            className="tertiary"
            size="2x" 
            icon={faLinkedin} 
          />
        </a> 

        <a 
          href="https://github.com/paunil" 
          target="_blank" 
          rel="noreferrer"
        >
          <FontAwesomeIcon 
            className="tertiary"
            size="2x" 
            icon={faGithubSquare} 
          />
        </a> 

        <a 
          href="https://www.youtube.com/channel/UCeP8igwr4LKGW33ol4OhiGA" 
          target="_blank" 
          rel="noreferrer"
        >
          <FontAwesomeIcon 
            className="tertiary"
            size="2x" 
            icon={faYoutubeSquare} 
          />
        </a> 
      </Grid>
    </Grid>
  )
}

export default Home