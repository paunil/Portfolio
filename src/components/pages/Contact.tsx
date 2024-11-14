import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../../scss/pages/contact.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faMap, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


function Contact() {
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
        id="contact-container"
        container
        justifyContent="center"
        alignContent="center"
        style={{ height: "100%"}}
      >

        {/* headline */}
        <Grid item xs={12} style={{marginBottom: '50px'}}>
          <Typography align="center" variant="h5">CONTACT</Typography>
        </Grid>


        <Grid
          item 
          xs={12}
          container 
          justifyContent="flex-start"
          alignItems="center"
          rowGap={1}
        >

          {/* linkedin */}
          <Grid 
            item 
            xs={12} 
            container 
            justifyContent="flex-start"
            alignItems="center"
          >
            <FontAwesomeIcon 
              className="tertiary"
              size="1x" 
              icon={faLinkedin} 
            />
            &nbsp; LinkedIn: &nbsp; Paunil
          </Grid>

          {/* phone */}
          <Grid 
            item 
            xs={12} 
            container 
            justifyContent="flex-start"
            alignItems="center"
          >
            <FontAwesomeIcon className="tertiary" size="1x" icon={faPhone} />
            &nbsp; Phone: &nbsp; (+46)725277850
          </Grid>

          {/* email */}
          <Grid 
            item 
            xs={12} 
            container 
            justifyContent="flex-start"
            alignItems="center"
          >
            <FontAwesomeIcon 
              className="tertiary"
              size="1x" 
              icon={faEnvelope} 
            />
              &nbsp; E-mail: &nbsp; contact@paulina.tech
          </Grid>

          {/* address */}
          <Grid 
            item 
            xs={12} 
            container 
            justifyContent="flex-start"
            alignItems="center"
          >
            <FontAwesomeIcon
              className="tertiary" 
              size="1x" 
              icon={faMap} 
            />
              &nbsp; Adress: &nbsp; Sollentuna - Stockholm, Sweden
          </Grid>

          {/* embedded google maps position */}
          <Grid 
            item 
            container 
            justifyContent="center"
            style={{marginTop: '20px'}}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172013.8272433972!2d17.807816130960656!3d59.41871501682646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f98cd789e64b9%3A0x400fef341e48c60!2sSollentuna!5e0!3m2!1ssv!2sse!4v1721801981128!5m2!1ssv!2sse"
              title="google maps Stockholm embeded"  
              style={{border:0, width: "100%"}} 
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact