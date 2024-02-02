import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/team.png'
import { Footer } from '../../components/Footer';

export function Team(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Humanity Peoples...'} largerTitle={'Team Member'}/>
      <Footer/>
    </Container>
  )
}