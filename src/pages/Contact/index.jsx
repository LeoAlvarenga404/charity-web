import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/contact.png'
import { Footer } from '../../components/Footer';

export function Contact(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Contact'} largerTitle={'Get in Touch'}/>
      <Footer/>
    </Container>
  )
}