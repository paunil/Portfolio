import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { motion, useCycle } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Hidden from '@material-ui/core/Hidden'

import { HamburgerButton, Navigation, DesktopMenu } from './common'
import { Home, Videos, Projects, Resume, Contact } from './pages/'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


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
      fontWeight: 600
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
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>

      {/* background animation */}
      {
        init && <Particles
          id="star-animation"
          options={{
            particles: {
              number: {
                value: 250,
                density: {
                  enable: true
                }
              },
              links: {
                enable: true,
                opacity: 0.02
              },
              move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                  default: OutMode.out,
                },
                random: true,
                speed: 0,
                straight: false,
              },
              size: {
                value: 1.3
              },
              opacity: {
                animation: {
                  enable: true,
                  speed: 3.5,
                  sync: false,
                },
                value: { min: 0, max: 0.8 },
              }
            },
            detectRetina: true
          }} />
      }

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
            <Routes>
              <Route path="/" element={<HiddenHome />} />
              <Route path="/home" element={<HiddenHome />} />
              <Route path="/watch-me-code" element={<Videos />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
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