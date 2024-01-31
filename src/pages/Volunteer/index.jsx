import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/volunteer.png'

export function Volunteer(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Need Your Heartful Help...'} largerTitle={'Become a Volunteer'}/>
    </Container>
  )
}