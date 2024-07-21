import Typography from '@mui/material/Typography';
import { Link, useLocation } from "react-router-dom";
import '../../scss/common/desktopMenu.scss'

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

function DesktopMenu() {
  const location = useLocation()
  return(
    <ul style={{margin: 0, paddingInlineStart: 0}}>
    {menuOptions.map((option, i) => (
        <li
          key={i}
          className="navigation-li"
        >
          <Link to={option.route} style={{width: '100%'}}>
            <Typography
              variant="subtitle1"
              className={location.pathname === option.route ? "desktop-menu-item-selected" : "desktop-menu-item"}
            >
              {option.text}
            </Typography>
          </Link>
        </li>
    ))}
  </ul>
  )
}

export default DesktopMenu