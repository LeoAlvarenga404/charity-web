import { Container } from "./style"
import { Logo } from '../logo'
import { Button } from '../Button'
import { ArrowDrop } from "../arrowdrop"
import { Link, NavLink } from "react-router-dom"

export function Header(){
  return(
    <Container>
      <Link to="/"><Logo/></Link>
      <div>
        <nav>
          <ul>
            
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="dropdown">
            <Link className="dropbtn">Pages<ArrowDrop/>
            </Link>
              <div className="dropdown-content">
              <Link to="/causes">Causes</Link>
              <Link to="/project">Project</Link>
              <Link to="/team">Team</Link>
              <Link to="/volunteer">Volunteer</Link>
              </div>
          </li>
          <li><Link to="/events">Event</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Button title="Donate"></Button>
      </div>
    </Container>
  )
}