import { Link } from 'react-router-dom'

function Menu() {
  return(
    <div>
      <ul>
        <Link  to="/Home">
          <li>Home</li>
        </Link>

        <Link to="/Videos">
          <li>Videos</li>
        </Link>

        <Link to="/Projects">
          <li>Projects</li>
        </Link>

        <Link to="/Resume">
          <li>Resume</li>
        </Link>

        <Link to="/Contact">
          <li>Contact</li>
        </Link>
       
      </ul>
    </div>
  )
}

export default Menu