import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/aboutUs.png'
import { Footer } from '../../components/Footer';
export function AboutUs(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'What We Do...'} largerTitle={'About our Organization'}/>
      <Footer/>
    </Container>
  )
}