import { Grid } from '@material-ui/core'
import { motion, useCycle } from 'framer-motion'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import Hidden from '@material-ui/core/Hidden'

import { HamburgerButton, Navigation, DesktopMenu } from './common'
import { Home, Videos, Projects, Resume, Contact } from './pages/'
import Particles from 'react-particles-js'



// font family
let theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    h4: {
      fontWeight: 800,
      color: '#383838'
    },
    h5: {
      fontWeight: 600,
      color: '#383838'
    },
    subtitle1: {
      fontWeight: 600,

    },
    body1: {
      fontWeight: 600,
      color: '#383838'
    }
  }
})

// makes font size responsive
theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md", "lg"],
  factor: 4,
  variants: ["h4"]
})

const sidebar = {
  open: (height = 200) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const HiddenHome = () => (
  <Grid
    item
    xs={10}
    md={2}
    lg={2}
    style={{ height: "100%" }}
  >
    <Hidden mdUp>
      <Home />
    </Hidden>
  </Grid>
)



function App() {

  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <ThemeProvider theme={theme}>

      {/* background animation */}
      <Particles
        width="100vw"
        height="100vh"
        style={{ position: 'absolute', top: '0', left: '0', zIndex: '-100' }}
        params={{
          "particles": {
            "number": {
              "value": 250,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "right",
              "speed": 0
            },
            "size": {
              "value": 1.3
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 3.5,
                "opacity_min": 0.8
              }
            }
          },
          "retina_detect": true
        }} />

      <Router>
        <Grid
          id="app-container"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            if (isOpen) {
              toggleOpen() // makes isOpen false instead
            }
          }}
        >

          <Grid
            item
            container
            justifyContent="center"
            spacing={2}
            style={{ height: "80vh" }}
          >
            
            {/* desktop screen menu */}
            <Hidden smDown>
              <Grid
                item
                md={2}
                lg={2}
                style={{ height: "100%" }}
              >
                <DesktopMenu />
              </Grid>
              <Grid
                item
                xs={4}
                style={{ height: "100%" }}
              >
                <Home />
              </Grid>
            </Hidden>


            {/* main content */}
            <Switch>
              <Route path={["/", "/home"]} exact component={HiddenHome} />
              <Route path="/watch-me-code" component={Videos} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Grid>
        </Grid>

        {/* hamburger menu */}
        <Hidden mdUp>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}>
            <motion.div className="menu-background" variants={sidebar} >
              <Navigation />
            </motion.div>
            <HamburgerButton toggle={() => toggleOpen()} />
          </motion.nav>
        </Hidden>

      </Router>
    </ThemeProvider>
  )
}

export default App