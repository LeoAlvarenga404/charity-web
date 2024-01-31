import { Container } from "./style"
import { Logo } from '../logo'
import { Button } from '../Button'

import { Link } from "react-router-dom"

export function Header(){
  return(
    <Container>
      <Logo/>
      <div>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="dropdown">
            <Link className="dropbtn">Pages <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#2F2F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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