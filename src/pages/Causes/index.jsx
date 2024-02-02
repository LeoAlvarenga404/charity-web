import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/causes.png'
import image1 from '../../assets/causes-1.png'
import image2 from '../../assets/causes-2.png'
import image3 from '../../assets/causes-3.png'
import image4 from '../../assets/causes-4.png'
import image5 from '../../assets/causes-5.png'
import image6 from '../../assets/causes-6.png'
import { SliderCard } from '../../components/SliderCard'
import { Footer } from '../../components/Footer';

export function Causes(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Donation'} largerTitle={'Our Causes'}/>
      <main>
        <div className="content">
          <SliderCard imageSrc={image1} promo={"85%"} title={"Big charity: build school for poor children"} raised={'Raised - 6M'} goal={'Goal - $10M'}/>
          <SliderCard imageSrc={image2} promo={"55%"} title={"Lorem ipsum dolor sit amet, consectetur"} raised={'Raised - 9M'} goal={'Goal - $17M'}/>
          <SliderCard imageSrc={image3} promo={"60%"} title={"Lorem ipsum dolor sit amet,"} raised={'Raised - 12M'} goal={'Goal - $18M'}/>
          <SliderCard imageSrc={image4} promo={"85%"} title={"Big charity: build school for poor children"} raised={'Raised - 6M'} goal={'Goal - $10M'}/>
          <SliderCard imageSrc={image5} promo={"55%"} title={"Lorem ipsum dolor sit amet, consectetur"} raised={'Raised - 9M'} goal={'Goal - $17M'}/>
          <SliderCard imageSrc={image6} promo={"60%"} title={"Lorem ipsum dolor sit amet,"} raised={'Raised - 12M'} goal={'Goal - $18M'}/>
        </div>
      </main>
      <Footer/>
    </Container>
  )
}