import { HeaderContact } from '../../components/HeaderContact';
import { Header } from "../../components/Header";
import { BannerHome } from "../../components/BannerHome";
import { Container } from "./style";
import image from '../../assets/home.png';
import { Discover } from '../../components/Discover';

export function Home(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <BannerHome imageSrc={image} smallerTitle={'Need Help...'} largerTitle={'Being Life Saver For Someone'}/>
      
      <main>
       <Discover/>

      </main>
    </Container>
  );
}