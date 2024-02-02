import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/project.png'
import { Footer } from '../../components/Footer';

export function Project(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Donation...'} largerTitle={'Meet Charity Projects'}/>
      <Footer/>
    </Container>
  )
}