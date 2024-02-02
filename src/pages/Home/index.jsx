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

import { Footer } from '../../components/Footer';

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
      </main>
      <Footer/>
    </Container>
  );
}

