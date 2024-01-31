import { Container } from "./style"
import { Logo } from '../logo'
import { Button } from '../Button'
export function Header(){
  return(
    <Container>
      <Logo/>
      <div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Pages</a>
          <a href="#">Event</a>
          <a href="#">Contact</a>
        </nav>
        <Button title="Donate"></Button>
      </div>
    </Container>
  )
}