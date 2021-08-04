import * as React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'
import '../../scss/common/navigation.scss'


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const menuOptions = [
  {
    route: "/home",
    text: "HOME"
  },
  {
    route: "/watch-me-code",
    text: "WATCH ME CODE"
  },
  {
    route: "/projects",
    text: "PROJECTS"
  },
  {
    route: "/resume",
    text: "RESUME"
  },
  {
    route: "/contact",
    text: "CONTACT"
  }
]

function Navigation() {
  return (
    <motion.ul className="navigation-ul" variants={variants}>
      {menuOptions.map((option, i) => (
        <MenuItem 
          key={i} 
          route={option.route} 
          text={option.text}
        />
      ))}
    </motion.ul>
  )
}

export default Navigation