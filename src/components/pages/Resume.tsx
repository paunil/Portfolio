import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import '../../scss/pages/resume.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSearch } from '@fortawesome/free-solid-svg-icons'


function Resume() {
  return (
    <Grid
      className="secondary"
      id="resume-container"
      container
      justifyContent="center"
      style={{ height: "100%" }}
    >
      {/* headline */}
      <Grid item xs={12}>
        <Typography 
        align="center" 
        variant="h5"
        >
          RESUME
        </Typography>
      </Grid>


      {/* resume image */}
      <Grid 
        item 
        xs={12} 
        container 
        justifyContent="center"
      >        
        <img src="./images/resume.png" alt="hhh" width="55%" />
      </Grid>
      

      {/* download button */}
      <Grid 
        item 
        xs={6} 
        container 
        justifyContent="center"
      >
        <Button
          href="./images/paulina.tech-resume.pdf" 
          download
        >
          <FontAwesomeIcon 
            size="1x" 
            icon={faDownload} 
            color="black" 
          />
            &nbsp;
            Download
        </Button>
      </Grid> 


      {/* preview button */}
      <Grid 
        item 
        xs={6} 
        container 
        justifyContent="center"
      >
        <Button
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEQB0PP0bk&#x2F;view?utm_content=DAEQB0PP0bk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" 
          target="_blank" 
        >
          <FontAwesomeIcon 
            size="1x" 
            icon={faSearch} 
            color="black" 
          />
            &nbsp;
            Preview
        </Button>
      </Grid> 
      
    </Grid>
  )
}

export default Resume