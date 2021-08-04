import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import '../../scss/common/menuItem.scss'


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

function MenuItem(props: {route: string, text: string}) {

  const location = useLocation()
 
  return (
    <motion.li
      className="navigation-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={props.route}>
        <div className="text-placeholder" style={{color: location.pathname === props.route ? '#00c2cb': '#383838'}}>{props.text}</div>
      </Link>
    </motion.li>
  );
};

export default MenuItem