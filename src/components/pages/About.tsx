import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../../scss/pages/contact.scss'



const style = {width:"50%", marginTop:"10%"}

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
        <Grid item xs={8}>
          <Typography variant="subtitle2">
            <p>Hi!</p> 
            
            I'm an ambitious frontend developer based in Stockholm.
            I offer experience in web development, currently with React and TypeScript as my main tools.
            As a person who loves design, the visual aspect is a big part for me when coding. Therefore I always strive to create user friendly and nice looking interfaces.
            Don't hesitate to reach out if you think I would make a good fit for your team! 
            
            <p>// Paulina</p>
          </Typography>

          {/* image */}
          <Grid item alignItems="center">
            <img style={style} src="./images/about.png" alt="" />
          </Grid>
    
        </Grid>

      </Grid>

    </Grid>
  )
}

export default About