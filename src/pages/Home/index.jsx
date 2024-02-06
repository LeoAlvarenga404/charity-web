import { HeaderContact } from '../../components/HeaderContact';
import { Header } from "../../components/Header";
import { BannerHome } from "../../components/BannerHome";
import { Container } from "./style";
import image from '../../assets/home.png';
import { Discover } from '../../components/Discover';
import { TextGroup } from '../../components/TextGroup';
import { Button } from '../../components/Button';
import { Bar } from '../../components/Bar';
import { Link } from 'react-router-dom';
import { Confirm } from '../../components/confirm'
import { SliderCard } from '../../components/SliderCard';
import { SliderCardDark } from '../../components/SliderCardDark';
import image1 from '../../assets/causes-1.png'
import image2 from '../../assets/causes-2.png'
import image3 from '../../assets/causes-3.png'
import image4 from '../../assets/causes-4.png'
import volunteerhome from '../../assets/volunteer-home.png'
import { Form } from '../../components/Form';
import { Footer } from '../../components/Footer';
import { Need } from '../../components/Need';

import medicineIcon from '../../assets/icons/medicine.svg'
import waterIcon from '../../assets/icons/water.svg'
import babyIcon from '../../assets/icons/baby.svg'
import foodIcon from '../../assets/icons/food.svg'
import worldIcon from '../../assets/icons/world.svg'
import learnIcon from '../../assets/icons/learn.svg'

import { Project } from '../../components/Project'

import { TeamCard } from '../../components/TeamCard'
import imagemCard1 from '../../assets/team1.png'
import imagemCard2 from '../../assets/team2.png'
import imagemCard3 from '../../assets/team3.png'
import { TeamCardBlue } from '../../components/TeamCardBlue';
import { Event } from '../../components/Event';
import { LuMapPin } from 'react-icons/lu'

import eventImg from '../../assets/event1.png'


export function Home(){
  
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <BannerHome imageSrc={image} smallerTitle={'Need Help...'} largerTitle={'Being Life Saver For Someone'}/>
      <main>
        <section id="discover">
        <Discover/>
       </section>
       <section id='aboutUs'>
        <div className="about-us">
        <TextGroup smallerTitle={'About Us'} largerTitle={`Help People, Our Main Goals`} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        secondText={'It has survived not only five centuries, but also the leap into electronic typesetting, remaining when an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.'}/>
        <Link to="/about"><Button title={'More about'}/></Link>
        </div>
        <div className="donation">
          <div className="content-verify">
          <div className="verify">
            <Confirm/>
            <p>Food Donation</p>
          </div>
          <div className="verify">
            <Confirm/>
            <p>Water Supplay</p>
          </div>
          <div className="verify">
            <Confirm/>
            <p>Money Donation</p>
          </div>
          <div className="verify">
            <Confirm/>
            <p>Education Donation</p>
          </div>
          <div className="verify">
            <Confirm/>
            <p>Dress Donation</p>
          </div>
          <div className="verify">
            <Confirm/>
            <p>Toys Donation</p>
          </div>
          </div>
          <div className="total-donation">
            <h4>Total Donation</h4>
            <Bar/>
            <div className="total-donation-text">
              <h6>Collection - $6M</h6>
              <h6>Goal - $10M</h6>
            </div>
          </div>
          <Link to="/causes"><Button title={"donate now"}/></Link>
        </div>
       </section>
       <section id='causes'>
        <div className="causes-container">
          <div className="causes-title">
          <TextGroup smallerTitle={'Our Causes'} largerTitle={'You can help lots of people by donating little'}/>
          <Link to="/causes"><Button title={"More causes"}/></Link>
        </div>
          <div className="slider-cards">
            <SliderCard imageSrc={image1} promo={"85%"} title={"Big charity: build school for poor children"} raised={'Raised - 6M'} goal={'Goal - $10M'}/>
            <SliderCard imageSrc={image2} promo={"55%"} title={"Lorem ipsum dolor sit amet, consectetur"} raised={'Raised - 9M'} goal={'Goal - $17M'}/>
            <SliderCard imageSrc={image3} promo={"60%"} title={"Lorem ipsum dolor sit amet,"} raised={'Raised - 12M'} goal={'Goal - $18M'}/>
            <SliderCardDark imageSrc={image4} promo={"25%"} title={"Big charity: build school for poor children"} raised={'Raised - 5M'} goal={'Goal - $10M'}/>
          </div>
        </div>
       </section>
        <section id="volunteer">
          <div className="container-volunteer">
          <div className="content-1">
            <TextGroup smallerTitle={'How We Help'} largerTitle={`Join The Community To Give Education For Children`} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} smallerTitleStyle={{color: 'white'}} largerTitleStyle={{color: 'white'}} textStyle={{color: 'white'}}/>
            <img src={volunteerhome} alt="menino escrevendo"/>
            <Button title={'donate now'}/>
            
          </div>
            <Form
              containerStyle={{background: 'transparent', border: '1px solid white'}} title={'Become A Volunter'} titleStyle={{color: 'white'}} firstInput={'Full name*'}
              firstInputStyle={{color: 'white', background: 'transparent', border: '1px solid white'}}
              secondInput={'Email Adress*'}
              secondInputStyle={{color: 'white', background: 'transparent', border: '1px solid white'}}
              thirdInput={'Phone Number*'}
              thirdInputStyle={{color: 'white', background: 'transparent', border: '1px solid white'}}
              fourInputStyle={{display: 'none'}}
              textarea={'Message*'}
              textareaStyle={{color: 'white', background: 'transparent', border: '1px solid white'}}
              button={'Submit now'}
              buttonStyle={{background: 'white', color: 'black'}}
              />
        </div>
        </section>
        <section id="need">
          <div className="container">
            <TextGroup smallerTitle={'What we do'} largerTitle={'We do it for People in Need'} containerStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}/>
            <div className="content">
            <Need image={medicineIcon} title={'Medicine Help'}/>
            <Need image={waterIcon} title={'Water Delivery'}/>
            <Need image={babyIcon} title={'We Care About'}/>
            <Need image={foodIcon} title={'Food Delivery'}/>
            <Need image={worldIcon} title={'Spread The World'}/>
            <Need image={learnIcon} title={'Learn Education'}/>
            </div>
          </div>
        </section>
        <section id="project">
        <Project/>
        </section>
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
        <section id="events">
          <div className="events-container">
            <div className="events-title">
              <TextGroup smallerTitle={'Our Events'} largerTitle={'Join Upcoming Events Replays & Webinars'}/>
              <Link to={'/events'}><Button title={'More EventS'}/></Link>
            </div>
            <div className="events-content">
              <div className="content-1">
                  <Event imageEvent={eventImg} day={'18'} month={'June'}/>
                <div className="locate">
                  <div>
                    <LuMapPin/>
                  </div>
                  <div>
                    <span>Dark Spurt, San Francisco, CA 94528</span>
                  </div>
                </div>
              </div>
              <div className="content-2">
                <div className="container">
                  <div className="calendary">
                    <h1>18</h1>
                    <h4>June</h4>
                  </div>
                  <div className="calendary-text">
                    <p>Organized By: <span>Nattasha</span></p>
                    <h4>Healthy Food for Growing</h4>
                    <p>There are many varieations of passages of injected Lorem Ipsum available.</p>
                  </div>
                </div>
                <div className="container">
                  <div className="calendary">
                    <h1>21</h1>
                    <h4>August</h4>
                  </div>
                  <div className="calendary-text">
                    <p>Organized By: <span>Nattasha</span></p>
                    <h4>Healthy Food for Growing</h4>
                    <p>There are many varieations of passages of injected Lorem Ipsum available.</p>
                  </div>
                </div>
                <div className="container">
                  <div className="calendary">
                    <h1>14</h1>
                    <h4>July</h4>
                  </div>
                  <div className="calendary-text">
                    <p>Organized By: <span>Nattasha</span></p>
                    <h4>Healthy Food for Growing</h4>
                    <p>There are many varieations of passages of injected Lorem Ipsum available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Container>
  );
}

