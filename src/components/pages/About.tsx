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
            
            I’m an ambitious frontend developer based in Stockholm, with a strong 
            focus on building dynamic and user-centric web applications. I specialize 
            in React and TypeScript, and I’m passionate about crafting clean, responsive 
            interfaces that are both functional and visually appealing.
            As someone who has a deep appreciation for design, I prioritize creating 
            intuitive and aesthetically pleasing user experiences. I’m always eager to 
            collaborate and bring my skills to new projects. If you think I could be 
            a great fit for your team, feel free to reach out! 
            
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