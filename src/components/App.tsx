import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { motion, useCycle } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import { HamburgerButton, Navigation, DesktopMenu } from './common'
import { Home, About, Videos, Projects, Resume, Contact } from './pages/'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useMediaQuery } from "@mui/material";


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
    subtitle2: {
      fontWeight: 400,
      fontSize: '12px'
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
  factor: 2,
  variants: ["h4"]
})

const sidebar = {
  open: (height = 200) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const HiddenHome = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Grid
      item
      xs={10}
      lg={2}
      style={{ height: "100%" }}
    >
      {!isMdUp && <Home />}
    </Grid>
  );
}

function App() {

  const [isOpen, toggleOpen] = useCycle(false, true)
  const [init, setInit] = useState(false);
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

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
            {isMdUp && (
              <>
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
              </>
            )}

            {/* main content */}
            <Routes>
              <Route path="/" element={<HiddenHome />} />
              <Route path="/home" element={<HiddenHome />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/watch-me-code" element={<Videos />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
        </Grid>

        {/* hamburger menu */}
        {!isMdUp && (
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}>
            <motion.div className="menu-background" variants={sidebar} >
              <Navigation />
            </motion.div>
            <HamburgerButton toggle={() => toggleOpen()} />
          </motion.nav>
        )}

      </Router>
    </ThemeProvider>
  )
}

export default App