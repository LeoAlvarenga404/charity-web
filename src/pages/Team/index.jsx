import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import { TeamCard } from '../../components/TeamCard'
import image from '../../assets/team.png'

import imagemCard1 from '../../assets/team1.png'
import imagemCard2 from '../../assets/team2.png'
import imagemCard3 from '../../assets/team3.png'
import imagemCard4 from '../../assets/team4.png'
import imagemCard5 from '../../assets/team5.png'
import imagemCard6 from '../../assets/team6.png'

import { BannerMain } from '../../components/BannerMain'
import imagebanner from '../../assets/TeamBannerMain.png'
import { Footer } from '../../components/Footer';

export function Team(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Humanity Peoples...'} largerTitle={'Team Member'}/>
      <main>
      <TeamCard image={imagemCard1} name={'Martin Luther'}/>
      <TeamCard image={imagemCard2} name={'Keira Knightley'}/>
      <TeamCard image={imagemCard3} name={'Jack Sparrow'}/>
      <TeamCard image={imagemCard4} name={'Karen Allen'}/>
      <TeamCard image={imagemCard5} name={'Stephen Lang'}/>
      <TeamCard image={imagemCard6} name={'Michelle Ray'}/>
      </main>
      <BannerMain imagedobanner={imagebanner} subtitle={'Beacame Volonteer'} title={'Join Our Organization'} text={'Save the Children believes every child deserves a future. In the U.S. and around the world, we give children a healthy start in life.'} input={{display: 'none'}} button={'Join us Now'} />
      <Footer/>
    </Container>
  )
}