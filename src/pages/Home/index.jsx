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


export function Home(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <BannerHome imageSrc={image} smallerTitle={'Need Help...'} largerTitle={'Being Life Saver For Someone'}/>
      
      <main>
       <Discover/>

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
              <h6>Collection - $5M</h6>
              <h6>Goal - $10M</h6>
            </div>
          </div>
          <Button title={"donate now"}/>
        </div>
       </section>
        
      </main>
    </Container>
  );
}