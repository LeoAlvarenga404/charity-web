import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/events.png'
import { Footer } from '../../components/Footer';

export function Events(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Donation'} largerTitle={'Our Events'}/>
      <Footer/>
    </Container>
  )
}