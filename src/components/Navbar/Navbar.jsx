import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <Link to="/" class="nav__link nav__link--active">Home</Link>
          </li>
          <li class="nav__item">
            <Link to="/about" class="nav__link">About Me</Link>
          </li>
          <li class="nav__item">
            <Link to="/projects" class="nav__link">My Projects</Link>
          </li>
          <li class="nav__item">
            <Link to="/contact" class="nav__link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar