import { Container } from "./style";
import { HeaderContact } from '../../components/HeaderContact';
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { TeamCard } from '../../components/TeamCard';
import { TextGroup } from '../../components/TextGroup';
import { BannerMain } from '../../components/BannerMain';
import { Footer } from '../../components/Footer';
import { TeamCardBlue } from '../../components/TeamCardBlue'
import image from '../../assets/aboutUs.png';
import imagemCard1 from '../../assets/team1.png';
import imagemCard2 from '../../assets/team2.png';
import imagemCard3 from '../../assets/team3.png';
import imagebanner from '../../assets/AboutBannerMain.png';
import abouthero from '../../assets/abouthero.png'
import { Aspas } from '../../assets/aspas'
import { Button } from "../../components/Button";
import logomarca1 from '../../assets/marcas/logomarca1.svg'
import logomarca2 from '../../assets/marcas/logomarca2.svg'
import logomarca3 from '../../assets/marcas/logomarca3.svg'
import logomarca4 from '../../assets/marcas/logomarca4.svg'
import logomarca5 from '../../assets/marcas/logomarca5.svg'

import mission from '../../assets/mission.png'

import { Tag } from "../../components/Tag";


export function AboutUs(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'What We Do...'} largerTitle={'About our Organization'}/>
      <main>
        <div className="container">
          <div className="hero">
            <div className="hero-container">
              <div className="content-1">
                <img src={abouthero} alt="imagem de um menino"/>
                <div className="phrase">
                  <Aspas/>
                  <h5>He is truly great who hath a great charity.</h5>
                </div>
              </div>
              <div className="content-2">
                <TextGroup smallerTitle={'About Us'} largerTitle={'Solutions to Help People in Need and Save the Planet'} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. '}/>
              
                <span className="green">Save the children believes every child deserves a future</span>
                <a href="/events"><Button title={'More About'}/></a>
              </div>   
            </div>
          </div>
          <div className="marcas">
            <img src={logomarca1} alt="logomarca" />
            <img src={logomarca2} alt="logomarca" />
            <img src={logomarca3} alt="logomarca" />
            <img src={logomarca4} alt="logomarca" />
            <img src={logomarca5} alt="logomarca" />
          </div>
          <div className="content">
            <div className="goal">
              <TextGroup largerTitle={'Our Goal'} text={'Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book. '}/>
              <div className="tags">
                <Tag text={'Make Donation'}/>
                <Tag text={'Donation Reched 10M'}/>
                <Tag text={'Education For All'}/>
                <Tag text={'Become A Volunteer'}/>
                <Tag text={'Food For Poor People dayle'}/>
              </div>
            <p>Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book. </p>
            </div>
          
            <div className="mission">
              <TextGroup largerTitle={'Our Mission'} text={'Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book. '}/>
              <img src={mission} alt="mão com uma planta"/>
              <div className="mission-text">
                <h1>20000+</h1>
                <p>Thousand People Helped</p>
              </div>
            </div>
          </div>
        </div>

        
      <section id="team">
          <div className="team-container">
          <TextGroup smallerTitle={'Team'} largerTitle={'Meet Our Volunteers'} containerStyle={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}/>
          <div className="team-cards">
            <TeamCard image={imagemCard1} name={'Martin Luther'}/>
            <TeamCard image={imagemCard2} name={'Keira Knightley'}/>
            <TeamCard image={imagemCard3} name={'Jack Sparrow'}/>
            <TeamCardBlue/>
          </div>

          </div>
        </section>
      </main>
      <BannerMain imagedobanner={imagebanner} subtitle={'Subscribe'} title={'Newsletter'} text={'Save the Children believes every child deserves a future. In the U.S. and around the world, we give children a healthy start in life.'} button={'Send'} />
      <Footer/>
    </Container>
  )
}