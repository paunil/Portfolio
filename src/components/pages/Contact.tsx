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
        style={{ height: "100%" }}
      >

        {/* headline */}
        <Grid item xs={12}>
          <Typography align="center" variant="h5">CONTACT</Typography>
        </Grid>


        {/* embedded google maps position */}

        <Grid 
          item 
          container 
          justifyContent="center"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165800.1932743059!2d17.922868951749894!3d59.37358234721916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fa19236619271%3A0x288239ab1520271!2sJ%C3%A4rf%C3%A4lla%20Municipality!5e0!3m2!1sen!2sse!4v1627914778450!5m2!1sen!2sse"
            title="google maps Stockholm embeded"  
            style={{border:0, width: "100%"}} 
            loading="lazy"
          />
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
            &nbsp; Adress: &nbsp; Stockholm, Sweden
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


        {/* phone */}
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
            icon={faPhone} 
          />
          &nbsp; Phone: &nbsp; (+46)725277850
        </Grid>


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
      </Grid>
    </Grid>
  )
}

export default Contact