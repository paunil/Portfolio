import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../../scss/pages/contact.scss'



const style = {width:"50%", marginTop:"5%"}

function About() {
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
        id="resume-container"
        container
        justifyContent="center"
        alignContent="center"
        style={{ height: "100%" }}
      >
        {/* headline */}
        <Grid item xs={12} style={{marginBottom: '50px'}}>
          <Typography align="center" variant="h5">
            ABOUT ME
          </Typography>
        </Grid>

        {/* content */}
        <Grid item container xs={8}>
          <Typography variant="subtitle2">
            <p>Hi!</p> 

            I'm an ambitious frontend developer based in Stockholm. 
            I strive to create user friendly and nice looking solutions with the latest technologies. 
            Currently with React and TypeScript as my main tools.
            I’m always eager to collaborate and bring my skills to new projects. 
            If you think I could be a good fit for your team, don't hesitate to reach out!
           
            <p>// Paulina </p>
          </Typography>

          {/* image */}
          <Grid item container justifyContent="center">
            <img style={style} src="./images/about.png" alt="" />
          </Grid>
    
        </Grid>

      </Grid>

    </Grid>
  )
}

export default About